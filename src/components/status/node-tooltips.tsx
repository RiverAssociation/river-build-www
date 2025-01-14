import { NodeDataWithStatus } from '@/lib/hooks/use-river-nodes'
import { formatUptime, formatUrl } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import React, { forwardRef, useEffect, useRef } from 'react'

type Props = {
  hoveredNode: NodeDataWithStatus | null
  containerRef: React.RefObject<HTMLElement>
}

export const NodeTooltips = (props: Props) => {
  const { hoveredNode, containerRef } = props
  const tooltipPositionRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !hoveredNode) {
      return
    }

    const onPointerMove = (e: PointerEvent) => {
      const containerBounds = container.getBoundingClientRect()
      const maxX = window.innerWidth

      if (tooltipPositionRef.current && tooltipRef.current) {
        const tooltipWidth = tooltipRef.current.offsetWidth
        const x = e.clientX - Math.max(0, e.clientX + tooltipWidth - maxX)

        const y = e.clientY + 16 - containerBounds.top
        tooltipPositionRef.current.style.top = `${y}px`
        tooltipPositionRef.current.style.left = `${x - containerBounds.left - 30}px`
      }
    }

    container.addEventListener('pointermove', onPointerMove)
    return () => {
      container.removeEventListener('pointermove', onPointerMove)
    }
  }, [containerRef, hoveredNode])

  return (
    <AnimatePresence>
      {hoveredNode && (
        <motion.div ref={tooltipPositionRef} className="pointer-events-none absolute left-0 top-0">
          <NodeTooltip nodeData={hoveredNode} ref={tooltipRef} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const NodeTooltip = forwardRef<HTMLDivElement, { nodeData: NodeDataWithStatus }>(
  ({ nodeData }, ref) => {
    // TODO: Move colors to tailwind config
    return (
      <div
        ref={ref}
        className="flex min-w-full select-none flex-col gap-0.5 rounded-md border border-gray-30 bg-[#222026] px-2.5 py-1.5 shadow-sm"
      >
        <span className="text-nowrap text-xs" style={{ color: nodeData.color }}>
          {formatUrl(nodeData.nodeUrl)}
        </span>
        <span className="overflow-ellipsis text-xs text-[#8A8791]">
          <span className="text-[#CECBD8]">Health </span>
          {nodeData.data.grpc.elapsed} gRPC <span className='"text-[#CECBD8]'> &bull; </span>
          {nodeData.data.http20.elapsed} HTTP/2
        </span>
        <span className="overflow-ellipsis text-xs text-[#8A8791]">
          <span className="text-[#CECBD8]">Uptime</span>{' '}
          {formatUptime(new Date(nodeData.data.grpc.start_time))}
        </span>
      </div>
    )
  },
)

NodeTooltip.displayName = 'NodeTooltips'
