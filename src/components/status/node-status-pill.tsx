import { NodeDataWithStatus } from '@/lib/hooks/use-river-nodes'
import { cn, formatUptime, formatUrl } from '@/lib/utils'
import { Circle } from 'lucide-react'
import { useMemo } from 'react'
import { StatusDot } from '../icons/StatusDot'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { Typography } from '../ui/typography'
import { WalletAddress } from '../wallet-address'

type Status = {
  status: number
  statusText: string
  description: string
  className: string
}

const getResponseStatus = (nodeData: NodeDataWithStatus) => {
  if (nodeData.status !== 2) {
    return undefined
  }
  if (nodeData.data === undefined) {
    return 'Unreachable'
  }
  if (nodeData.data.http11 === undefined) {
    return 'http11 Unreachable'
  }
  if (nodeData.data.http11.response.status !== 'OK') {
    return nodeData.data.http11.response.status
  }
  if (nodeData.data.http20 === undefined) {
    return 'http20 Unreachable'
  }
  if (nodeData.data.http20.response.status !== 'OK') {
    return 'http20 ' + nodeData.data.http20.response.status
  }
  if (nodeData.data.grpc === undefined) {
    return 'grpc Unreachable'
  }
  if (nodeData.data.grpc.success === false) {
    return 'grpc Failed'
  }
  return 'OK'
}

const NodeStatus: Status[] = [
  {
    status: 0,
    statusText: 'Not Initialized',
    description: 'Initial entry, node is not contacted in any way',
    className: 'text-gray-500 bg-gray-500/10 fill-gray-500/50',
  },
  {
    status: 1,
    statusText: 'Remote Only',
    description: 'Node proxies data, does not store any data',
    className: 'text-gray-500 bg-gray-500/10 fill-gray-500/50',
  },
  {
    status: 2,
    statusText: 'Operational',
    description: 'Node serves existing data, accepts stream creation',
    className: 'text-green-500 bg-green-500/10 fill-green-500/50',
  },
  {
    status: 3,
    statusText: 'Failed',
    description: 'Node crash-exited, can be set by DAO',
    className: 'text-red-500 bg-red-500/10 fill-red-500/50',
  },
  {
    status: 4,
    statusText: 'Departing',
    description:
      'Node continues to serve traffic, new streams are not allocated, data needs to be moved out to other nodes before grace period.',

    className: 'text-red-500 bg-red-500/10 fill-red-500/50',
  },
  {
    status: 5,
    statusText: 'Deleted',
    description: 'Final state before RemoveNode can be called',
    className: 'text-gray-500 bg-gray-500/10',
  },
]

export const NodeStatusPill = ({ nodeData }: { nodeData: NodeDataWithStatus }) => {
  const nodeStatusFromContract = NodeStatus[nodeData.data.record.status]
  const responseStatus = getResponseStatus(nodeData)
  // if node is operational, but has a non-OK response, it's down
  const isDown = nodeData.status === 2 && responseStatus && responseStatus !== 'OK'

  const nodeStatus = useMemo(
    () =>
      isDown
        ? {
            status: 3,
            statusText: responseStatus,
            description: 'Node is unreachable',
            className: 'text-red-500 bg-red-500/10 fill-red-500/50',
          }
        : nodeStatusFromContract,
    [isDown, nodeStatusFromContract, responseStatus],
  )
  return (
    <Accordion type="single" collapsible>
      <div className="flex flex-col gap-1 rounded-md bg-[#222026]">
        <AccordionItem value={nodeData.id} asChild>
          <div className="flex flex-col gap-0.5 p-4">
            <AccordionTrigger>
              <div className="grid w-full grid-cols-[5fr,2fr] gap-2">
                <div
                  className="flex items-center gap-2 overflow-hidden"
                  style={{ color: nodeData.color }}
                >
                  <StatusDot />
                  <Typography as="span" className="truncate text-inherit">
                    {formatUrl(nodeData.nodeUrl)}
                  </Typography>
                </div>
                <div className="justify-self-end">
                  <StatusBadge nodeStatus={nodeStatus} />
                </div>
              </div>
            </AccordionTrigger>

            <InfoRow
              label="Health"
              value={
                <>
                  {nodeData.data.http20.elapsed} HTTP/2
                  <span className="text-[#CECBD8]"> &bull; </span>
                  {nodeData.data.grpc.elapsed} gRPC
                </>
              }
            />
            <AccordionContent className="flex flex-col gap-0.5">
              <InfoRow
                label="Uptime"
                value={formatUptime(new Date(nodeData.data.grpc.start_time))}
              />
              <InfoRow label="Start Time" value={nodeData.data.grpc.start_time} />
              <InfoRow label="Version" value={nodeData.data.grpc.version} />
              <InfoRow
                label="Address"
                value={<WalletAddress address={nodeData.data.record.address} />}
              />
              <InfoRow
                label="Operator"
                value={<WalletAddress address={nodeData.data.record.operator} />}
              />
              <InfoRow label="River ETH Balance" value={nodeData.data.river_eth_balance} />
              <InfoRow
                label="http1"
                value={nodeData.data?.http11?.response.status ?? 'Unreachable'}
              />
              <InfoRow
                label="http2"
                value={nodeData.data?.http20?.response.status ?? 'Unreachable'}
              />
              <InfoRow label="grpc" value={nodeData.data?.grpc?.status_text ?? 'Unreachable'} />
            </AccordionContent>
          </div>
        </AccordionItem>
      </div>
    </Accordion>
  )
}

const StatusBadge = ({ nodeStatus }: { nodeStatus: Status }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={cn('rounded-md px-2 py-1', nodeStatus.className)}>
            <Typography as="span" size="sm" className="text-inherit">
              {nodeStatus.statusText}
            </Typography>
          </div>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className={cn(nodeStatus.className, 'flex items-center gap-2 bg-neutral-800')}
        >
          <Circle className={cn(nodeStatus.className, 'h-3 w-3 bg-transparent')} />
          <Typography as="span" size="xs" className="text-gray-20">
            {nodeStatus.description}
          </Typography>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

const InfoRow = ({ label, value }: { label: React.ReactNode; value: React.ReactNode }) => {
  return (
    <div className="flex gap-2">
      <Typography as="span" className="text-[#8A8791]">
        {label}
      </Typography>
      <Typography as="span" className="truncate text-[#CECBD8]">
        {value}
      </Typography>
    </div>
  )
}
