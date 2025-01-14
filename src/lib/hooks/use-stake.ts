'use client'
import {
  useReadRewardsDistributionGetDepositsByDepositor,
  useReadRewardsDistributionStakingState,
  useWriteRewardsDistributionStake,
} from '@/contracts'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useWaitForTransactionReceipt } from 'wagmi'
import { useOperatorsWithDeposits } from './use-stakeable-operators'

export const useStake = () => {
  const qc = useQueryClient()

  const {
    writeContract: stake,
    data: hash,
    isPending,
  } = useWriteRewardsDistributionStake({
    mutation: {
      onError: (error) => {
        console.error(error)
      },
    },
  })
  const { isLoading: isTxPending, isSuccess: isTxConfirmed } = useWaitForTransactionReceipt({
    hash: hash,
  })

  const {
    queryKey: stakingStateQueryKey,
    data: stakingState,
    isPending: isStakingStatePending,
  } = useReadRewardsDistributionStakingState()
  const { queryKey: operatorsQueryKey } = useOperatorsWithDeposits()
  const { queryKey: depositsQueryKey } = useReadRewardsDistributionGetDepositsByDepositor()

  useEffect(() => {
    if (isTxConfirmed) {
      qc.invalidateQueries({ queryKey: stakingStateQueryKey })
      qc.invalidateQueries({ queryKey: operatorsQueryKey })
      qc.invalidateQueries({ queryKey: depositsQueryKey })
    }
  }, [isTxConfirmed, qc, stakingStateQueryKey, operatorsQueryKey, depositsQueryKey])

  return {
    stake,
    isPending,
    isTxPending,
    isTxConfirmed,
    stakingState,
    isStakingStatePending,
  }
}
