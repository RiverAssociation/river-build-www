import { DOCS_URL } from '@/constants/links'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ConnectWalletButton } from '../ui/connect-wallet-button'
import { Typography } from '../ui/typography'
import { DelegateAscii } from './delegate-ascii'

export const ConnectWalletSection = () => {
  return (
    <section
      className={cn(
        'hero-glow relative w-full overflow-x-clip bg-gray-90',
        'flex w-full flex-col items-start justify-center gap-6',
        'px-4 py-24',
        'min-h-screen items-center',
      )}
    >
      <DelegateAscii />
      <div className="flex flex-col items-center gap-2">
        <Typography
          as="h1"
          size="4xl"
          className="text-[32px] font-semibold leading-[44px] text-gray-10"
        >
          Delegation
        </Typography>
        <Typography size="sm" as="span" className="text-gray-20">
          Delegate and authorize your votes
        </Typography>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <ConnectWalletButton>Connect Wallet</ConnectWalletButton>
        <Link href={`${DOCS_URL}/rvr-token/delegation`} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary">
            <div className="flex items-center gap-1">
              <span>Read the Docs</span>
              <ChevronRight height={16} width={16} />
            </div>
          </Button>
        </Link>
      </div>
    </section>
  )
}
