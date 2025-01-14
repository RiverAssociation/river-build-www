'use client'
import {
  useReadRewardsDistributionDepositById,
  useReadRiverTokenLockCooldown,
  useWriteRewardsDistributionWithdraw,
} from '@/contracts'
import { useQueryClient } from '@tanstack/react-query'
import { useCallback, useEffect } from 'react'
import { useAccount, useWaitForTransactionReceipt } from 'wagmi'
import { useOperatorsWithDeposits } from './use-stakeable-operators'

export const useWithdraw = (depositId: bigint | undefined) => {
  const { address } = useAccount()
  const qc = useQueryClient()
  const { data: lockCooldown, isPending: isLockCooldownPending } = useReadRiverTokenLockCooldown({
    args: [address!],
    query: {
      enabled: !!address,
    },
  })

  const { writeContract, data: hash, isPending } = useWriteRewardsDistributionWithdraw()
  const { isLoading: isTxPending, isSuccess: isTxConfirmed } = useWaitForTransactionReceipt({
    hash: hash,
  })

  const {
    data: deposit,
    isPending: isAmountToWithdrawPending,
    queryKey: depositQueryKey,
  } = useReadRewardsDistributionDepositById({
    args: [depositId!],
    query: {
      enabled: !!depositId,
    },
  })
  const { queryKey: operatorsQueryKey } = useOperatorsWithDeposits()
  const amountToWithdraw = deposit?.amount

  const withdraw = useCallback(() => {
    if (!address) return
    writeContract({
      args: [depositId!],
    })
  }, [address, depositId, writeContract])

  useEffect(() => {
    if (isTxConfirmed) {
      qc.invalidateQueries({ queryKey: depositQueryKey })
      qc.invalidateQueries({ queryKey: operatorsQueryKey })
    }
  }, [depositQueryKey, isTxConfirmed, operatorsQueryKey, qc])

  return {
    withdraw,
    isPending,
    isTxPending,
    isTxConfirmed,
    amountToWithdraw,
    isAmountToWithdrawPending,
    lockCooldown,
    isLockCooldownPending,
  }
}
