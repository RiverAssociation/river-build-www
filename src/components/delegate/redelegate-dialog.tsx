import type { StackableOperator } from '@/data/requests'
import { useOperatorsWithDeposits } from '@/lib/hooks/use-stakeable-operators'
import { useMemo } from 'react'
import type { Address } from 'viem'
import { OperatorCard } from '../stake/operator-card'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'
import { RedelegateButton } from './redelegate-button'

export const RedelegateDialogContent = ({
  deposits,
  onRedelegateFinish,
}: {
  deposits: { id: bigint; delegatee: Address }[]
  onRedelegateFinish?: () => void
}) => {
  const { data: operators } = useOperatorsWithDeposits()
  const operatorsWithDeposits: Record<Address, StackableOperator> = useMemo(() => {
    // const withDeposits = FAKE_OPERATORS
    const withDeposits = operators.filter((operator) => 'deposits' in operator)

    const fromOperatorAddress = Object.fromEntries(
      withDeposits.map((operator) => [operator.address, operator]),
    )
    return fromOperatorAddress
  }, [operators])

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Redelegate</DialogTitle>
      </DialogHeader>
      <DialogDescription>Select the operator you want to redelegate to.</DialogDescription>
      <div className="flex max-h-96 flex-col gap-2 overflow-y-auto">
        {deposits.map((deposit) => (
          <OperatorCard
            key={deposit.delegatee}
            operator={operatorsWithDeposits[deposit.delegatee]}
            button={
              <RedelegateButton
                className="w-full"
                delegatedAddress={deposit.delegatee}
                depositId={deposit.id}
                onRedelegateFinish={onRedelegateFinish}
              />
            }
          />
        ))}
      </div>
    </DialogContent>
  )
}
