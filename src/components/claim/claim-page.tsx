import { useClaim } from '@/lib/hooks/use-claim'
import { cn } from '@/lib/utils'
import { formatRVRAmount } from '@/lib/utils/formatRVRAmount'
import { base, baseSepolia } from 'viem/chains'
import { useAccount, useSwitchChain } from 'wagmi'
import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'
import { Typography } from '../ui/typography'
import { WalletInfo } from '../wallet-info'

export const ClaimPage = () => {
  const { chainId, address } = useAccount()
  const { switchChain } = useSwitchChain()

  const isBase = chainId === base.id || chainId === baseSepolia.id
  const {
    claimReward,
    isLoadingClaimableBalance,
    claimableBalance,
    isPending,
    isTxPending,
    isTxConfirmed,
  } = useClaim()

  return (
    <section
      className={cn(
        'hero-glow relative w-full overflow-x-clip bg-gray-90 md:min-h-screen',
        'flex w-full flex-col items-center',
        'pb-24 pt-[88px]',
      )}
    >
      <section className={cn('flex w-full flex-col gap-6 px-4', 'sm:max-w-lg')}>
        <div className="flex flex-col gap-1.5 text-balance">
          {/* It's impossible to the disconnect user to get to this page without being on the base network
              But they can change the network after, that's why this toast is necessary  */}
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
          <Typography
            as="h1"
            size="3xl"
            className="text-2xl font-semibold leading-[44px] text-gray-10"
          >
            Claim
          </Typography>

          <Typography as="span" size="md" className="text-gray-20">
            Claim your rewards
          </Typography>
        </div>

        <WalletInfo showRvrBalance showAuthorizedClaimer showRewards />

        <div className="flex flex-col pt-6">
          <section className="flex flex-col gap-2">
            <Typography
              as="h2"
              size="lg"
              className="text-2xl font-semibold leading-[44px] text-gray-10"
            >
              Claimable balance
            </Typography>
            <div className="flex flex-col items-center justify-between gap-2">
              {isLoadingClaimableBalance ? (
                <Skeleton className="inline-block h-6 w-32" />
              ) : (
                <Typography
                  as="span"
                  size="md"
                  className={cn(
                    'text-white',
                    !!claimableBalance && 'font-mono font-medium tabular-nums',
                  )}
                >
                  {!claimableBalance ? 0 : formatRVRAmount(claimableBalance)}
                </Typography>
              )}
              <Button
                type="submit"
                isLoading={isPending || isTxPending}
                disabled={!claimableBalance || claimableBalance === 0n}
                aria-label="Claim rewards"
                className="w-full"
                onClick={() => {
                  claimReward({
                    args: [
                      // beneficiary - in the case of this button - its the connected wallet
                      // TODO: advanced mode: allow to set any address
                      // including wallets that the user is an authorized claimer (?)
                      address!,
                      // recipient - in the case of this button - its the connected wallet
                      // but it could be any other address - including mainnet address
                      // TODO: advanced mode: allow to set any address
                      address!,
                    ],
                  })
                }}
              >
                {isTxConfirmed ? 'Claimed' : isPending || isTxPending ? 'Claiming...' : 'Claim'}
              </Button>
            </div>
          </section>
        </div>
      </section>
    </section>
  )
}
