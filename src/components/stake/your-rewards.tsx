'use client'

import { useClaim } from '@/lib/hooks/use-claim'
import { formatRVRAmount } from '@/lib/utils/formatRVRAmount'
import { useAccount } from 'wagmi'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { ConnectWalletButton } from '../ui/connect-wallet-button'
import { Skeleton } from '../ui/skeleton'

export const YourRewardsCard = () => {
  const { isConnected, address } = useAccount()
  const {
    isPending,
    claimableBalance,
    isTxConfirmed,
    isLoadingClaimableBalance,
    isTxPending,
    claimReward,
  } = useClaim()
  return (
    <Card className="flex h-full flex-col justify-between gap-4" disableHover>
      <CardHeader>
        <CardTitle className="text-center">Your Rewards</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          {isConnected ? (
            isLoadingClaimableBalance ? (
              <Skeleton className="h-4 w-16" />
            ) : (
              <span className="text-2xl">{formatRVRAmount(claimableBalance ?? 0n)} RVR</span>
            )
          ) : (
            <span>-</span>
          )}
        </div>
        {isConnected ? (
          <Button
            className="w-full"
            disabled={claimableBalance === 0n}
            isLoading={isPending || isTxPending}
            onClick={() =>
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
            }
          >
            Claim Rewards
          </Button>
        ) : (
          <ConnectWalletButton className="w-full">
            Connect Wallet to Claim Rewards
          </ConnectWalletButton>
        )}
      </CardContent>
    </Card>
  )
}
