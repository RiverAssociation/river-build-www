import { toast } from '@/components/ui/use-toast'
import {
  rewardsDistributionAbi,
  rewardsDistributionAddress,
  useReadRewardsDistributionGetDepositsByDepositor,
  useReadRiverTokenDelegates,
  useWriteRewardsDistributionRedelegate,
} from '@/contracts'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'
import type { Address } from 'viem'
import { base, baseSepolia } from 'viem/chains'
import { useAccount, useReadContracts, useWaitForTransactionReceipt } from 'wagmi'
import { useOperatorsWithDeposits } from './use-stakeable-operators'

const isRiverInvalidTokenAmountError = (error: Error) => {
  return error.message.includes('River__InvalidTokenAmount')
}

const isBase = (chainId?: number) => {
  return chainId === base.id || chainId === baseSepolia.id
}

export const useRedelegate = () => {
  const qc = useQueryClient()
  const { address, chainId } = useAccount()
  const { data: depositIds } = useReadRewardsDistributionGetDepositsByDepositor({
    args: [address!],
  })

  const { data } = useReadContracts({
    contracts: depositIds
      ? depositIds?.map(
          (depositId) =>
            ({
              abi: rewardsDistributionAbi,
              address: rewardsDistributionAddress[
                chainId as keyof typeof rewardsDistributionAddress
              ] as Address,
              functionName: 'depositById',
              args: [depositId],
            }) as const,
        )
      : [],
    query: {
      enabled: !!chainId && isBase(chainId) && !!depositIds,
    },
  })

  const allDeposits = useMemo(() => {
    if (data?.length !== depositIds?.length) return []
    return data?.flatMap((deposit, idx) => {
      if (deposit.error) return []
      if (!depositIds?.[idx]) return []
      if (typeof deposit.result === 'object' && 'lastUpdateTime' in deposit.result)
        return [{ ...deposit.result, id: depositIds[idx] }]
      return []
    })
  }, [data, depositIds])

  const {
    data: hash,
    writeContract: writeRedelegate,
    isPending,
  } = useWriteRewardsDistributionRedelegate({
    mutation: {
      onError: (e) => {
        console.error(e)
        if (isRiverInvalidTokenAmountError(e)) {
          toast({
            title: 'Insufficient RVR balance',
            description: 'You need some RVR token in order to delegate.',
          })
        } else {
          console.error(e)
        }
      },
    },
  })

  const { isLoading: isTxPending, isSuccess: isTxConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  const { queryKey: delegateeQueryKey } = useReadRiverTokenDelegates()
  const { queryKey: depositQueryKey } = useReadRewardsDistributionGetDepositsByDepositor({
    args: [address!],
  })
  const { queryKey: operatorsQueryKey } = useOperatorsWithDeposits()

  useEffect(() => {
    if (isTxConfirmed) {
      qc.invalidateQueries({ queryKey: delegateeQueryKey })
      qc.invalidateQueries({ queryKey: depositQueryKey })
      qc.invalidateQueries({ queryKey: operatorsQueryKey })
    }
  }, [delegateeQueryKey, depositQueryKey, isTxConfirmed, operatorsQueryKey, qc])

  return {
    isTxConfirmed,
    isTxPending,
    writeRedelegate,
    isPending,
    deposits: allDeposits,
  }
}
