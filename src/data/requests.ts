import { riverRegistryAbi, riverRegistryAddress } from '@/contracts'
import { river, riverGamma } from '@/lib/riverChain'
import { createPublicClient, http, isAddress } from 'viem'
import { z } from 'zod'

const getRandomNode = async (env: 'gamma' | 'omega') => {
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

export const getNodeData = async (env: 'gamma' | 'omega') => {
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
      return res.json() as Promise<NodeStatusSchema>
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
export type NodeStatusSchema = z.infer<typeof nodeStatusSchema>

export const nodeStatusSchema = z.object({
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
