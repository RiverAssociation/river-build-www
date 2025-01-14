'use client'
import { useWriteRewardsDistributionInitiateWithdraw } from '@/contracts'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useWaitForTransactionReceipt } from 'wagmi'
import { useOperatorsWithDeposits } from './use-stakeable-operators'

export const useInitiateWithdraw = () => {
  const qc = useQueryClient()
  const {
    writeContract: initiateWithdraw,
    data: hash,
    isPending,
  } = useWriteRewardsDistributionInitiateWithdraw({
    mutation: {
      onError: (error) => {
        console.error(error)
      },
    },
  })
  const { queryKey: operatorsQueryKey } = useOperatorsWithDeposits()
  const { isLoading: isTxPending, isSuccess: isTxConfirmed } = useWaitForTransactionReceipt({
    hash: hash,
  })

  useEffect(() => {
    if (isTxConfirmed) {
      qc.invalidateQueries({ queryKey: operatorsQueryKey })
    }
  }, [isTxConfirmed, operatorsQueryKey, qc])

  return {
    initiateWithdraw,
    isPending,
    isTxPending,
    isTxConfirmed,
  }
}
