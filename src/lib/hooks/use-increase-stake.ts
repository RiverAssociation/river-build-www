'use client'
import {
  useReadRewardsDistributionDepositById,
  useReadRewardsDistributionGetDepositsByDepositor,
  useReadRewardsDistributionStakingState,
  useWriteRewardsDistributionIncreaseStake,
} from '@/contracts'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useAccount, useWaitForTransactionReceipt } from 'wagmi'
import { useOperatorsWithDeposits } from './use-stakeable-operators'

export const useIncreaseStake = (depositId: bigint) => {
  const { address } = useAccount()
  const qc = useQueryClient()

  const {
    writeContract: increaseStake,
    data: hash,
    isPending,
  } = useWriteRewardsDistributionIncreaseStake()
  const { isLoading: isTxPending, isSuccess: isTxConfirmed } = useWaitForTransactionReceipt({
    hash: hash,
  })

  const { queryKey: currentDepositQueryKey } = useReadRewardsDistributionDepositById({
    args: [depositId],
    query: {
      enabled: !!address,
    },
  })

  const { queryKey: stakingStateQueryKey } = useReadRewardsDistributionStakingState({
    query: {
      enabled: !!address,
    },
  })

  const { queryKey: operatorsQueryKey } = useOperatorsWithDeposits()
  const { queryKey: depositsQueryKey } = useReadRewardsDistributionGetDepositsByDepositor()

  useEffect(() => {
    if (isTxConfirmed) {
      qc.invalidateQueries({ queryKey: currentDepositQueryKey })
      qc.invalidateQueries({ queryKey: stakingStateQueryKey })
      qc.invalidateQueries({ queryKey: operatorsQueryKey })
      qc.invalidateQueries({ queryKey: depositsQueryKey })
    }
  }, [
    isTxConfirmed,
    qc,
    currentDepositQueryKey,
    stakingStateQueryKey,
    operatorsQueryKey,
    depositsQueryKey,
  ])

  return {
    increaseStake,
    isPending,
    isTxPending,
    isTxConfirmed,
  }
}
