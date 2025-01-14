'use client'

import { NodeStatusPill } from '@/components/status/node-status-pill'
import type { NodeData } from '@/data/requests'
import { useRiverNodes } from '@/lib/hooks/use-river-nodes'

export const NodeStatus = ({ initialData }: { initialData?: NodeData[] }) => {
  const nodes = useRiverNodes({ initialData, liveQuery: true })
  return (
    <>
      {nodes.map((node) => (
        <NodeStatusPill key={node.nodeUrl} nodeData={node} />
      ))}
    </>
  )
}
