import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { PieChart } from './PieChart'

const box = cn(
  'flex rounded-3xl border border-solid border-gray-60 bg-gray-80 p-6 text-gray-100 flex-grow flex-col gap-1 text-center',
)

export const AirDropData = (props: { onClaimClick: () => void }) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="rounded-3xl border border-solid border-gray-60 bg-gray-80 p-6 text-gray-100">
        <Typography as="h2" size="2xl" className="place-self-center text-gray-10">
          Global Airdrop
        </Typography>
        <div className="flex flex-row gap-4">
          <div className="flex flex-grow flex-col items-center justify-center gap-1 p-4">
            <PieChart percentage={100} gradient="red" />
            <Typography as="p" size="md" className="text-gray-400">
              Claimed
            </Typography>
            <Typography as="p" size="md" className="text-white">
              1,200,200
            </Typography>
          </div>
          <div className="flex flex-grow flex-col items-center justify-center gap-1 p-4">
            <PieChart percentage={33.3} gradient="blue" />
            <Typography as="p" size="md" className="text-gray-400">
              Claimed
            </Typography>
            <Typography as="p" size="md" className="text-white">
              1,200,200
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className={`${box} content-center items-center`}>
          <Typography as="h3" size="lg" className="text-white">
            Current Balance
          </Typography>
          <Typography as="p" size="lg" className="text-white">
            15,300 RVR
          </Typography>
        </div>
        <div className={box}>
          <Typography as="h3" size="lg" className="text-white">
            Claimable Balance
          </Typography>
          <Typography as="p" size="lg" className="text-white">
            15,300 RVR
          </Typography>
          <div className="full flex items-center justify-center p-2">
            <Button size="sm" onClick={props.onClaimClick}>
              Claim Airdrop
            </Button>
          </div>
        </div>
      </div>
      <div className={box}>
        <Typography as="h3" size="lg" className="text-white">
          Airdrop Criteria
        </Typography>
        <div className="flex flex-row justify-between gap-2">
          <p>River Points</p>
          <p>2,567</p>
        </div>
        <div className="flex flex-row justify-between gap-2">
          <p>Drops.com points</p>
          <p>234</p>
        </div>
      </div>
    </div>
  )
}
