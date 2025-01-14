import { useReadRiverTokenAllowance, useWriteRiverTokenApprove } from '@/contracts'
import type { Address } from 'viem'
import { useAccount, useWaitForTransactionReceipt } from 'wagmi'

export const useApprove = (to: Address) => {
  const { address } = useAccount()
  const { data: allowance, queryKey: allowanceQueryKey } = useReadRiverTokenAllowance({
    args: [address!, to],
    query: {
      enabled: !!address,
    },
  })

  const {
    writeContract: approve,
    isPending: isApprovePending,
    data: hash,
  } = useWriteRiverTokenApprove({
    mutation: {
      onError: (err) => {
        console.error(err)
      },
    },
  })

  const { isLoading: isTxPending, isSuccess: isTxConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  return {
    allowance,
    isApproving: isApprovePending,
    isApproveTxPending: isTxPending,
    isApproveTxConfirmed: isTxConfirmed,
    approve,
    queryKey: allowanceQueryKey,
  }
}
