'use client'

import {
  useReadAuthorizerGetAuthorizedClaimer,
  useReadRewardsDistributionCurrentReward,
  useReadRiverTokenBalanceOf,
  useReadRiverTokenDecimals,
  useReadRiverTokenDelegates,
} from '@/contracts'
import { formatUnits, zeroAddress } from 'viem'
import { useAccount, useDisconnect } from 'wagmi'
import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'
import { WalletAddress } from './wallet-address'

type WalletInfoProps = {
  showRvrBalance?: boolean
  showDelegatee?: boolean
  showRewards?: boolean
  showAuthorizedClaimer?: boolean
}
export const WalletInfo = ({
  showRvrBalance,
  showDelegatee,
  showRewards,
  showAuthorizedClaimer,
}: WalletInfoProps) => {
  const { address } = useAccount()
  const { disconnect, isPending: isDisconnectPending } = useDisconnect()

  const { isPending: isRiverTokenLoading, data: riverBalance } = useReadRiverTokenBalanceOf({
    args: [address!],
    query: {
      enabled: showRvrBalance && !!address,
    },
  })

  const { data: riverDecimals } = useReadRiverTokenDecimals({
    query: {
      enabled: (showRvrBalance || showRewards) && !!address,
    },
  })

  const { isPending: isDelegateeLoading, data: delegatee } = useReadRiverTokenDelegates({
    args: [address!],
    query: { enabled: showDelegatee && !!address },
  })

  const { isPending: isCurrentRewardLoading, data: currentReward } =
    useReadRewardsDistributionCurrentReward({
      args: [address!],
      query: { enabled: showRewards && !!address },
    })

  const { isPending: isAuthorizedClaimerLoading, data: authorizedClaimer } =
    useReadAuthorizerGetAuthorizedClaimer({
      args: [address!],
      query: {
        enabled: showAuthorizedClaimer && !!address,
      },
    })

  return (
    <div className="w-full rounded-3xl border border-solid border-gray-60 bg-gray-80 p-6">
      <div className="flex justify-between gap-4">
        <span className="text-gray-20">Connected:</span>
        {address && <WalletAddress address={address} />}
      </div>
      {showRvrBalance && (
        <div className="flex justify-between">
          <span className="text-gray-20">RVR Balance:</span>
          <span className="font-mono tabular-nums text-white">
            {isRiverTokenLoading ? (
              <Skeleton className="inline-block h-4 w-20" />
            ) : riverBalance && riverDecimals ? (
              formatUnits(riverBalance, riverDecimals)
            ) : (
              0
            )}
          </span>
        </div>
      )}
      {showDelegatee && (
        <div className="flex justify-between">
          <span className="text-gray-20">Delegating to:</span>
          {isDelegateeLoading ? (
            <Skeleton className="inline-block h-4 w-36" />
          ) : delegatee && delegatee !== zeroAddress ? (
            <WalletAddress address={delegatee} />
          ) : null}
        </div>
      )}
      {showRewards && (
        <div className="flex justify-between">
          <span className="text-gray-20">Rewards Balance:</span>
          <span className="text-white">
            {isCurrentRewardLoading ? (
              <Skeleton className="inline-block h-4 w-20" />
            ) : currentReward && riverDecimals ? (
              formatUnits(currentReward, riverDecimals)
            ) : (
              0
            )}
          </span>
        </div>
      )}
      {showAuthorizedClaimer && (
        <div className="flex justify-between">
          <span className="text-gray-20">Authorized claimer:</span>
          {isAuthorizedClaimerLoading ? (
            <Skeleton className="inline-block h-4 w-36" />
          ) : authorizedClaimer && authorizedClaimer !== zeroAddress ? (
            <WalletAddress address={authorizedClaimer} />
          ) : null}
        </div>
      )}
      <Button
        aria-label="Disconnect your wallet"
        variant="secondary"
        className="w-full"
        isLoading={isDisconnectPending}
        onClick={() => disconnect()}
      >
        {isDisconnectPending ? 'Disconnecting...' : 'Disconnect'}
      </Button>
    </div>
  )
}
