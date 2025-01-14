'use client'
import { base, baseSepolia } from 'viem/chains'
import { useAccount, useSwitchChain } from 'wagmi'
import { Button } from './ui/button'
import { Typography } from './ui/typography'

export const SwitchToBase = () => {
  const { chainId, isConnected } = useAccount()
  const isBase = chainId === base.id || chainId === baseSepolia.id
  const { switchChain } = useSwitchChain()
  return (
    <>
      {isConnected && !isBase && (
        <div className="flex items-center justify-between gap-2 rounded-md border border-red-400/60 bg-red-400/10 px-4 py-2">
          <Typography size="sm" className="text-red-400">
            You can only stake on the Base chain. Please switch to Base.
          </Typography>
          <Button size="sm" onClick={() => switchChain({ chainId: base.id })}>
            Switch
          </Button>
        </div>
      )}
    </>
  )
}
