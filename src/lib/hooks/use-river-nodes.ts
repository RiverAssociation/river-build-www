import { SECOND_MS } from '@/constants/time-ms'
import { NodeData as RawNodeData, getRiverNodes } from '@/data/requests'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { baseSepolia } from 'viem/chains'
import { useAccount } from 'wagmi'

const colors = [
  '#1DDCF2',
  '#AFDD79',
  '#FED83D',
  '#C740F2',
  '#9558FA',
  '#FEA56F',
  '#FF60B2',
  '#FEA56F',
  '#DBDE54',
]

export type NodeDataWithStatus = ReturnType<typeof useRiverNodes>[0]

export const useRiverNodes = ({
  initialData,
  liveQuery,
}: { initialData?: RawNodeData[]; liveQuery?: boolean } = {}) => {
  const { chainId } = useAccount()
  const env = useMemo(() => (chainId === baseSepolia.id ? 'gamma' : 'omega'), [chainId])
  const { data } = useQuery({
    queryKey: ['nodeStatus', env],
    queryFn: () => getRiverNodes(env),
    refetchInterval: liveQuery ? 30 * SECOND_MS : undefined,
    initialData: initialData,
  })

  const nodeConnections = useMemo(() => {
    return formatNodeToDataWithStatus(data)
  }, [data])

  return nodeConnections
}

export const formatNodeToDataWithStatus = (nodes: RawNodeData[] | undefined) => {
  if (!nodes) return []
  const operators = new Set<string>()
  return nodes.map((n, i) => {
    operators.add(n.record.operator)
    const operatorIndex = Array.from(operators.values()).indexOf(n.record.operator)
    return {
      id: n.record.url,
      index: i,
      nodeUrl: n.record.url,
      statusText: n.record.status_text,
      status: n.record.status,
      operator: n.record.operator,
      operatorIndex,
      data: n,
      color: colors[Math.floor((i * colors.length) / nodes.length) % colors.length],
      operatorColor: colors[(3 + operatorIndex) % colors.length],
    }
  })
}
