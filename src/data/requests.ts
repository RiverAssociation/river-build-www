import { HOSTNAME_TO_OPERATOR_NAME } from '@/constants/hostname-to-operator'
import type { RiverEnv } from '@/constants/river-env'
import { SECOND_MS } from '@/constants/time-ms'
import {
  nodeOperatorAbi,
  nodeOperatorAddress,
  rewardsDistributionAbi,
  rewardsDistributionAddress,
  riverRegistryAbi,
  riverRegistryAddress,
} from '@/contracts'
import { river, riverGamma } from '@/lib/riverChain'
import { createPublicClient, http, isAddress, type Address } from 'viem'
import { base, baseSepolia } from 'viem/chains'
import { z } from 'zod'

const getRandomNode = async (env: RiverEnv) => {
  const chain = env === 'gamma' ? riverGamma : river
  const chainId = chain.id
  const riverClient = createPublicClient({
    chain,
    transport: http(),
  })
  const nodes = await riverClient.readContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress[chainId],
    functionName: 'getAllNodes',
  })
  const operationalNodes = nodes.filter((node) => node.status === 2)
  const randomNode = operationalNodes[Math.floor(Math.random() * operationalNodes.length)]
  return { node: randomNode, length: operationalNodes.length }
}

export const getRiverNodes = async (env: RiverEnv) => {
  let attempts = 0
  let lastError
  let lastNode
  let { node: randomNode, length: maxRetries } = await getRandomNode(env)

  while (attempts < maxRetries) {
    while (randomNode === lastNode) {
      randomNode = await getRandomNode(env).then(({ node }) => node)
    }
    try {
      const res = await fetch(`${randomNode.url}/debug/multi/json`)
      if (!res.ok) throw new Error(`${randomNode.url} failed with status: ${res.status}`)
      const data = (await res.json()) as NodeDebugMultiJsonSchema
      return data.nodes
    } catch (error) {
      attempts++
      lastError = error
      lastNode = randomNode
      console.warn(`Attempt ${attempts} failed. Trying another node...`)
    }
  }

  throw new Error(
    `Failed to fetch node data after ${maxRetries} attempts. Last error: ${lastError}`,
  )
}

const zodAddress = z.string().refine(isAddress)
export type NodeDebugMultiJsonSchema = z.infer<typeof nodeDebugMultiJsonSchema>

export type NodeData = Awaited<ReturnType<typeof getRiverNodes>>[number]

export const nodeDebugMultiJsonSchema = z.object({
  nodes: z.array(
    z.object({
      record: z.object({
        address: zodAddress,
        url: z.string(),
        operator: zodAddress,
        status: z.number(),
        status_text: z.string(),
      }),
      local: z.boolean().optional(),
      http11: z.object({
        success: z.boolean(),
        status: z.number(),
        status_text: z.string(),
        elapsed: z.string(),
        elapsed_after_dns: z.string(),
        elapsed_after_conn: z.string(),
        response: z.object({
          status: z.string(),
          instance_id: z.string(),
          address: z.string(),
          version: z.string(),
          start_time: z.string(),
          uptime: z.string(),
          graffiti: z.string(),
        }),
        protocol: z.string(),
        used_tls: z.boolean(),
        remote_address: z.string(),
        dns_addresses: z.array(z.string()),
      }),
      http20: z.object({
        success: z.boolean(),
        status: z.number(),
        status_text: z.string(),
        elapsed: z.string(),
        elapsed_after_dns: z.string(),
        elapsed_after_conn: z.string(),
        response: z.object({
          status: z.string(),
          instance_id: z.string(),
          address: z.string(),
          version: z.string(),
          start_time: z.string(),
          uptime: z.string(),
          graffiti: z.string(),
        }),
        protocol: z.string(),
        used_tls: z.boolean(),
        remote_address: z.string(),
        dns_addresses: z.array(z.string()),
      }),
      grpc: z.object({
        success: z.boolean(),
        status_text: z.string(),
        elapsed: z.string(),
        elapsed_after_dns: z.string(),
        elapsed_after_conn: z.string(),
        version: z.string(),
        start_time: z.string(),
        uptime: z.string(),
        graffiti: z.string(),
        protocol: z.string(),
        x_http_version: z.string(),
        remote_address: z.string(),
        dns_addresses: z.array(z.string()),
      }),
      river_eth_balance: z.string(),
    }),
  ),
  query_time: z.string(),
  elapsed: z.string(),
})

const estimatedApyOfNetwork = (rewardRate: bigint, totalStaked: bigint) => {
  const apy = (Number(rewardRate) / Number(totalStaked) / 1e36) * (365 * 24 * 60 * 60)
  return apy
}

const operatorApr = (commissionRate: bigint, networkApr: number) => {
  const commInBps = Number(commissionRate)
  const apr = networkApr * (1 - commInBps / 10_000)
  return apr
}

export type StackableOperator = {
  name: string
  nodes: NodeData[]
  commissionPercentage: number
  estimatedApr: number
  address: Address
  metrics: {
    http20: number
    grpc: number
    grpc_start_time: string
  }
}

export type StakeableOperatorsResponse = {
  operators: StackableOperator[]
  networkEstimatedApy: number
}

export const getStakeableOperators = async (env: 'gamma' | 'omega') => {
  const chain = env === 'gamma' ? baseSepolia : base
  const chainId = chain.id
  const client = createPublicClient({
    chain,
    cacheTime: 30 * SECOND_MS,
    transport: http(),
  })
  const stakingState = await client.readContract({
    abi: rewardsDistributionAbi,
    address: rewardsDistributionAddress[chainId],
    functionName: 'stakingState',
  })
  const networkApy = estimatedApyOfNetwork(stakingState.rewardRate, stakingState.totalStaked)
  const nodes = await getRiverNodes(env)
  const uniqueOperators = Array.from(new Set(nodes.map((node) => node.record.operator)))

  const commissionRates = await Promise.all(
    uniqueOperators.map((operator) =>
      client.readContract({
        abi: nodeOperatorAbi,
        address: nodeOperatorAddress[chainId],
        functionName: 'getCommissionRate',
        args: [operator],
      }),
    ),
  )
  const operatorCommissionMap = uniqueOperators.reduce<Record<Address, bigint>>(
    (map, operator, index) => {
      map[operator] = commissionRates[index]
      return map
    },
    {},
  )

  const operatorMap = nodes.reduce<Record<string, NodeData[]>>((map, node) => {
    const operatorAddress = node.record.operator
    if (!map[operatorAddress]) {
      map[operatorAddress] = []
    }
    map[operatorAddress].push(node)
    return map
  }, {})

  const operatorNameOccurency: Record<string, number> = {}

  // Group nodes by unique operator address
  const operators = uniqueOperators.map((operatorAddress) => {
    const nodes = operatorMap[operatorAddress]
    const commissionRateInBps = operatorCommissionMap[operatorAddress]
    const estimatedApr = operatorApr(commissionRateInBps, networkApy)

    // Use first node's URL to derive operator name
    const hostname = new URL(nodes[0].record.url).hostname
    // return fancy name if key matches the expected hostname
    const displayName = Object.entries(HOSTNAME_TO_OPERATOR_NAME).find(([key]) =>
      hostname.includes(key),
    )?.[1]
    const name = displayName ?? hostname
    operatorNameOccurency[name] = (operatorNameOccurency?.[name] ?? 0) + 1
    const occurency = operatorNameOccurency[name]

    const http20Elapsed = nodes
      .map((node) => parseLatency(node.http20.elapsed))
      .filter((latency) => latency !== undefined) as number[]
    const grpcElapsed = nodes
      .map((node) => parseLatency(node.grpc.elapsed))
      .filter((latency) => latency !== undefined) as number[]

    return {
      name: `${name} ${occurency}`,
      nodes,
      commissionPercentage: Number(commissionRateInBps) / 100,
      estimatedApr,
      metrics: {
        http20: http20Elapsed.length ? Math.round(getMedian(http20Elapsed)) : 0,
        grpc: grpcElapsed.length ? Math.round(getMedian(grpcElapsed)) : 0,
        // TODO: median of uptime
        grpc_start_time: nodes[0].grpc.start_time,
      },
      address: operatorAddress,
    }
  })

  return {
    operators,
    networkEstimatedApy: networkApy,
  }
}

const getMedian = (arr: number[]) => {
  if (!arr.length) return 0
  if (arr.length === 1) return arr[0]
  const sorted = [...arr].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid]
}

const parseLatency = (latency: string) => {
  if (!latency) return
  const [value] = latency.split('ms')
  return Number(value)
}
