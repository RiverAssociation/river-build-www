'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { base, baseSepolia } from 'viem/chains'
import { useAccount, useSwitchChain } from 'wagmi'
import { Button } from '../ui/button'
import { Typography } from '../ui/typography'
import { WalletInfo } from '../wallet-info'
import { AirDropClaim } from './components/AirDropClaim'
import { AirDropData } from './components/AirDropData'
import { AirDropDelegate } from './components/AirDropDelegate'

export const AirdropPage = () => {
  const { chainId, chain } = useAccount()
  const { switchChain } = useSwitchChain()
  const isBase = chainId === base.id || chainId === baseSepolia.id

  const [pageContent, setPageContent] = useState<'delegate' | 'claim' | 'index'>('index')

  return (
    <section
      className={cn(
        'hero-glow relative w-full overflow-x-clip bg-gray-90 md:min-h-screen',
        'flex w-full flex-col items-center',
        'pb-24 pt-[88px]',
      )}
    >
      <section className={cn('flex w-full flex-col gap-6 px-4', 'sm:max-w-lg', 'md:max-w-2xl')}>
        <div className="flex flex-col gap-1.5 text-balance">
          {!isBase && (
            <div className="flex items-center justify-between gap-2">
              <Typography size="sm" className="text-red-400">
                You can only claim on the Base chain.
              </Typography>
              <Button size="sm" onClick={() => switchChain({ chainId: base.id })}>
                Switch
              </Button>
            </div>
          )}
        </div>
        {pageContent === 'index' ? (
          <AirDropData
            onClaimClick={() => {
              setPageContent('claim')
            }}
          />
        ) : pageContent === 'claim' ? (
          <AirDropClaim
            onBackClick={() => setPageContent('index')}
            onDelegateClick={() => setPageContent('delegate')}
          />
        ) : (
          <AirDropDelegate onBackClick={() => setPageContent('claim')} />
        )}

        <WalletInfo showRvrBalance showAuthorizedClaimer />
      </section>
      <section className={cn('flex w-full flex-col gap-6 px-4', 'sm:max-w-lg')}></section>
    </section>
  )
}
