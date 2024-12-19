import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const box = cn(
  'flex rounded-3xl border border-solid border-gray-60 bg-gray-80 p-6 text-gray-100 flex-grow flex-col gap-1 text-center',
)

export const AirDropClaim = (props: { onBackClick: () => void; onDelegateClick: () => void }) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <Link
          href="/airdrop"
          className="absolute -m-48 rounded-3xl bg-gray-800 p-2 px-4 text-gray-400"
          onClick={() => {
            props.onBackClick()
          }}
        >
          Back
        </Link>
        <Typography as="h2" size="2xl" className="place-self-center text-center text-gray-10">
          Global Airdrop
        </Typography>
      </div>
      <div className="flex flex-col gap-2 rounded-3xl border border-solid border-gray-60 bg-gray-80 p-6 text-gray-100">
        <div className="flex flex-col justify-between">
          <Typography as="p" size="md" className="text-white">
            Claim with penalty
          </Typography>
          <Typography as="p" size="md" className="text-gray-400">
            3,060 RVR
          </Typography>
        </div>
        <Typography as="p" size="md" className="text-gray-400">
          Receive 20% of your claimable balance now.
        </Typography>
        <Button>Claim 3,060 RVR</Button>
      </div>
      <div className="flex flex-col gap-2 rounded-3xl border border-solid border-gray-60 bg-gray-80 p-6 text-gray-100">
        <div className="flex flex-col justify-between">
          <Typography as="p" size="md" className="text-white">
            Claim and Delegate
          </Typography>
          <Typography as="p" size="md" className="text-gray-400">
            15,300 RVR
          </Typography>
        </div>
        <Typography as="p" size="md" className="text-gray-400">
          Receive 100% of your claimable balance after delegating tokens to a node operator for 30
          days. <Link href="/">Learn More</Link>
        </Typography>
        <Button onClick={props.onDelegateClick}>Claim 15,300 RVR</Button>
      </div>
    </div>
  )
}
