'use client'

import type { StakeableOperatorsResponse } from '@/data/requests'
import {
  useOperatorsWithDeposits,
  type OperatorWithDeposits,
} from '@/lib/hooks/use-stakeable-operators'
import { useAccount } from 'wagmi'
import { Typography } from '../ui/typography'
import { OperatorCard } from './operator-card'

import { baseSepolia } from 'viem/chains'
export const AllOperators = ({
  initialData,
}: {
  initialData: StakeableOperatorsResponse | undefined
}) => {
  const { data: operatorsWithDeposits } = useOperatorsWithDeposits(initialData)
  const { chainId } = useAccount()
  const env = chainId === baseSepolia.id ? 'gamma' : 'omega'

  return (
    <div id="all-operators" className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-center text-2xl font-bold">
          All Operators
          {env === 'gamma' ? ' (Gamma)' : ''}
        </h2>
        <Typography size="md" className="text-center font-medium text-gray-20">
          To distribute power on the network, please delegate to top performing operators.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {operatorsWithDeposits.map((operator: OperatorWithDeposits) => (
          <OperatorCard
            key={operator.address}
            operator={operator}
            deposits={operator.deposits}
            allOperators={operatorsWithDeposits}
            showButton
          />
        ))}
      </div>
    </div>
  )
}
