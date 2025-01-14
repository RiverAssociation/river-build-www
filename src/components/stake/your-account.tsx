'use client'

import {
  useReadRewardsDistributionStakedByDepositor,
  useReadRiverTokenBalanceOf,
} from '@/contracts'
import { formatRVRAmount } from '@/lib/utils/formatRVRAmount'
import { useEffect, useRef } from 'react'
import { useAccount } from 'wagmi'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { ConnectWalletButton } from '../ui/connect-wallet-button'
import { Skeleton } from '../ui/skeleton'

export const YourAccountCard = () => {
  const { isConnected, address } = useAccount()
  const { data: balance, isPending: isBalancePending } = useReadRiverTokenBalanceOf({
    args: [address!],
    query: { enabled: isConnected && !!address },
  })

  const { data: stakedByUser, isPending: isStakedByUserPending } =
    useReadRewardsDistributionStakedByDepositor({
      args: [address!],
      query: { enabled: isConnected && !!address },
    })

  const allOperatorsListRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // not getting the from the parent with useRef
    // because we dont want the parent to be a client component
    allOperatorsListRef.current = document.getElementById('all-operators')
  }, [])

  return (
    <Card disableHover>
      <CardHeader>
        <CardTitle className="text-center">Your Account</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Wallet Balance</span>
          {isConnected ? (
            isBalancePending ? (
              <Skeleton className="h-4 w-16" />
            ) : (
              <span>{formatRVRAmount(balance ?? 0n)} RVR</span>
            )
          ) : (
            <span>-</span>
          )}
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Staked</span>
          {isConnected ? (
            isStakedByUserPending ? (
              <Skeleton className="h-4 w-16" />
            ) : (
              <span>{formatRVRAmount(stakedByUser ?? 0n)} RVR</span>
            )
          ) : (
            <span>-</span>
          )}
        </div>
        {isConnected ? (
          <Button
            className="w-full"
            disabled={!isConnected}
            onClick={() => allOperatorsListRef.current?.scrollIntoView({ behavior: 'smooth' })}
          >
            Stake to Operator
          </Button>
        ) : (
          <ConnectWalletButton className="w-full">Connect Wallet to Stake</ConnectWalletButton>
        )}
      </CardContent>
    </Card>
  )
}
