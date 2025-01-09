import { Typography } from '@/components/ui/typography'
import { getNodeData } from '@/data/requests'
import { Loader2 } from 'lucide-react'
import loadDynamic from 'next/dynamic'
import { NodeStatus } from './node-status'

export const dynamic = 'force-dynamic'

const NodeAnimation = loadDynamic(
  () => import('@/components/status/node-animation-scene').then((mod) => mod.NodeAnimationScene),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full flex-grow items-center justify-center text-white">
        <Loader2 className="h-4 w-4 animate-spin" />
      </div>
    ),
  },
)

const StatusPage = async () => {
  const initialData = await getNodeData('omega').catch(() => undefined)

  return (
    <div className="hero-glow mx-auto flex items-center justify-center px-4 pt-24 lg:pt-28">
      <div className="flex flex-col gap-4 text-white">
        <div className="flex flex-col items-center">
          <Typography
            as="h1"
            className="text-center text-[36px] font-semibold leading-[48px] text-gray-10"
          >
            River Node <br className="sm:hidden" />
            Network Status
          </Typography>
          <Typography as="span" size="2xl" className="text-center font-semibold">
            Response Times
          </Typography>
        </div>

        <div className="relative flex h-52 items-center justify-center lg:h-96">
          <NodeAnimation />
        </div>

        <NodeStatus initialData={initialData} />
      </div>
    </div>
  )
}

export default StatusPage
