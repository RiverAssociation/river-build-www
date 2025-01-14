import { SECOND_MS } from '@/constants/time-ms'
import {
  rewardsDistributionAbi,
  rewardsDistributionAddress,
  useReadRewardsDistributionGetDepositsByDepositor,
} from '@/contracts'
import {
  getStakeableOperators,
  type StackableOperator,
  type StakeableOperatorsResponse,
} from '@/data/requests'
import { useQuery } from '@tanstack/react-query'
import { baseSepolia } from 'viem/chains'
import { useAccount, useReadContracts } from 'wagmi'

export const useStakeableOperators = ({
  initialData,
  liveQuery,
}: {
  initialData?: StakeableOperatorsResponse
  liveQuery?: boolean
}) => {
  const { chainId } = useAccount()
  const env = chainId === baseSepolia.id ? 'gamma' : 'omega'
  const { data, isLoading } = useQuery({
    queryKey: ['stakeable-operators', env],
    queryFn: () => getStakeableOperators(env),
    refetchInterval: liveQuery ? 30 * SECOND_MS : undefined,
    initialData,
  })

  return {
    operators: data?.operators ?? [],
    networkEstimatedApy: data?.networkEstimatedApy ?? 0,
    isLoading,
  }
}

export type OperatorWithDeposits = StackableOperator & {
  deposits?: Deposit
}

type Deposit = {
  depositId: bigint
  amount: bigint
  owner: `0x${string}`
  commissionEarningPower: bigint
  delegatee: `0x${string}`
  pendingWithdrawal: bigint
  beneficiary: `0x${string}`
}

export const useOperatorsWithDeposits = (initialData?: StakeableOperatorsResponse) => {
  const { address, isConnected, chainId } = useAccount()
  const { operators } = useStakeableOperators({
    initialData,
    liveQuery: true,
  })
  const { data: allDepositIds } = useReadRewardsDistributionGetDepositsByDepositor({
    args: [address!],
    query: { enabled: isConnected },
  })

  const depositsQueries = useReadContracts({
    contracts: (allDepositIds || []).map(
      (id) =>
        ({
          abi: rewardsDistributionAbi,
          address: rewardsDistributionAddress[chainId as keyof typeof rewardsDistributionAddress],
          functionName: 'depositById',
          args: [id],
        }) as const,
    ),
    query: { enabled: isConnected && !!allDepositIds },
  })

  const deposits = depositsQueries.data
    ?.flatMap((query) => query.result)
    .filter((deposit): deposit is NonNullable<typeof deposit> => deposit !== undefined)

  const operatorDeposits = allDepositIds
    ? Object.fromEntries(
        (deposits ?? [])
          .filter((deposit): deposit is NonNullable<typeof deposit> => deposit !== undefined)
          // The key is the delegatee, which is the operator address
          .map((deposit, idx) => [
            deposit.delegatee,
            { ...deposit, depositId: allDepositIds[idx] },
          ]),
      )
    : {}

  const operatorsWithDeposits = operators.map((operator: StackableOperator) => {
    const operatorDeposit = operatorDeposits?.[operator.address]
    return {
      ...operator,
      deposits: operatorDeposit,
    }
  })

  return {
    data: isConnected ? operatorsWithDeposits : operators,
    queryKey: depositsQueries.queryKey,
  }
}
