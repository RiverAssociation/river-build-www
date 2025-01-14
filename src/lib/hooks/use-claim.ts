'use client'

import { toast } from '@/components/ui/use-toast'
import {
  useReadRewardsDistributionCurrentReward,
  useReadRiverTokenBalanceOf,
  useWriteRewardsDistributionClaimReward,
} from '@/contracts'
import { useQueryClient } from '@tanstack/react-query'
import Confetti from 'js-confetti'
import { useEffect, useMemo } from 'react'
import { useAccount, useWaitForTransactionReceipt } from 'wagmi'

export const useClaim = () => {
  const { address } = useAccount()
  const qc = useQueryClient()
  const confetti = useMemo(() => new Confetti(), [])
  const { queryKey: riverBalanceQueryKey } = useReadRiverTokenBalanceOf({
    args: [address!],
    query: {
      enabled: !!address,
    },
  })
  const {
    data: claimableBalance,
    isLoading: isLoadingClaimableBalance,
    queryKey: riverClaimBalanceQueryKey,
  } = useReadRewardsDistributionCurrentReward({
    args: [address!],
    query: {
      enabled: !!address,
    },
  })
  const {
    data: hash,
    writeContract: claimReward,
    isPending,
  } = useWriteRewardsDistributionClaimReward({
    mutation: {
      onError: (e) => {
        toast({
          title: 'Error',
          description: e.name,
        })
        console.error(e)
      },
    },
  })
  const { isLoading: isTxPending, isSuccess: isTxConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  useEffect(() => {
    if (isTxConfirmed) {
      Promise.all([
        confetti
          .addConfetti({
            confettiColors: ['#F7F7F8', '#3A3941', '#959499'],
            confettiNumber: 250,
          })
          .then(() => {
            confetti.clearCanvas()
          }),
        qc.invalidateQueries({ queryKey: riverBalanceQueryKey }),
        qc.invalidateQueries({ queryKey: riverClaimBalanceQueryKey }),
      ])
    }
  }, [confetti, isTxConfirmed, qc, riverBalanceQueryKey, riverClaimBalanceQueryKey])

  return {
    claimReward,
    isTxPending,
    isTxConfirmed,
    isPending,
    claimableBalance,
    isLoadingClaimableBalance,
  }
}
