import { cn } from '@/lib/utils'

import { useAppKit } from '@reown/appkit/react'
import BeaverClaimAscii from '../claim/beaver-claim-ascii'

import { Button } from '../ui/button'
import { Typography } from '../ui/typography'

export const ConnectWallet = () => {
  const { open } = useAppKit()
  return (
    <section
      className={cn(
        'hero-glow relative w-full overflow-x-clip bg-gray-90',
        'flex w-full flex-col items-start justify-center gap-6',
        'px-4 py-24',
        'min-h-screen items-center',
      )}
    >
      <div className="h-[310px]">
        <BeaverClaimAscii className="size-full" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <Typography
          as="h1"
          size="4xl"
          className="text-[32px] font-semibold leading-[44px] text-gray-10"
        >
          Claim Airdrop
        </Typography>
        <Typography size="sm" as="span" className="text-gray-20">
          Connect your wallet to check eligibility.
        </Typography>
      </div>
      <Button variant="primary" onClick={() => open()}>
        Connect Wallet
      </Button>
    </section>
  )
}
