import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { cn } from '@/lib/utils'

const box = cn(
  'flex rounded-xl border border-solid border-gray-60 bg-gray-80 p-6 text-gray-100 flex-grow flex-col gap-1  col-span-4',
)

export const AirDropDelegate = (props: { onBackClick: () => void }) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <div
          onClick={props.onBackClick}
          className="absolute -m-48 rounded-3xl bg-gray-800 p-2 px-4 text-gray-400"
        >
          Back
        </div>
        <div className="flex flex-grow flex-col gap-4">
          <Typography as="h2" size="2xl" className="place-self-center text-center text-gray-10">
            Delegate
          </Typography>
          <Typography as="h2" size="md" className="place-self-center text-center text-gray-10">
            To distribute power on the network, please delegate to top performing operators.
          </Typography>
        </div>
      </div>
      <div className="grid h-full grid-cols-12 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div className={box} key={index}>
            <Typography as="h2" size="md" className="text-gray-10">
              alpha-{index + 1}.river.lgns.net
            </Typography>
            <div className="flex flex-col">
              <Typography as="h2" size="md" className="text-gray-400">
                Health: <span className="text-gray-200">9ms gRPC</span>
              </Typography>
              <Typography as="h2" size="md" className="text-gray-400">
                Uptime: <span className="text-gray-200">57m43s</span>
              </Typography>
              <Typography as="h2" size="md" className="text-gray-400">
                Commission: <span className="text-gray-200">10%</span>
              </Typography>
            </div>
            <Button size="sm">Delegate</Button>
          </div>
        ))}
      </div>
    </div>
  )
}
