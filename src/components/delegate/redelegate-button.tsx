import type { StackableOperator } from '@/data/requests'
import { useRedelegate } from '@/lib/hooks/use-redelegate'
import { useOperatorsWithDeposits } from '@/lib/hooks/use-stakeable-operators'
import { Check } from 'lucide-react'
import { useEffect, useMemo } from 'react'
import type { Address } from 'viem'
import { Button } from '../ui/button'
import { useToast } from '../ui/use-toast'

export const RedelegateButton = ({
  depositId,
  delegatedAddress,
  variant = 'primary',
  className,
  onRedelegateFinish,
}: {
  depositId: bigint
  delegatedAddress: Address | undefined
  variant?: 'primary' | 'secondary'
  className?: string
  onRedelegateFinish?: (operator: StackableOperator) => void
}) => {
  const { toast } = useToast()
  const { isTxConfirmed, isPending, isTxPending, writeRedelegate } = useRedelegate()
  const { data: operators } = useOperatorsWithDeposits()
  const lookup = useMemo(
    () => Object.fromEntries(operators.map((operator) => [operator.address, operator])),
    [operators],
  )

  useEffect(() => {
    if (isTxConfirmed && delegatedAddress) {
      onRedelegateFinish?.(lookup[delegatedAddress])
    }
  }, [delegatedAddress, isTxConfirmed, lookup, onRedelegateFinish, toast])

  return (
    <Button
      isLoading={isTxPending || isPending}
      aria-label="Redelegate"
      disabled={!delegatedAddress || isTxPending || isPending}
      onClick={() => {
        if (!delegatedAddress) return
        writeRedelegate({ args: [depositId, delegatedAddress] })
      }}
      variant={variant}
      className={className}
    >
      {isTxConfirmed && <Check className="mr-2 h-4 w-4" />}
      {isTxConfirmed
        ? 'Redelegated'
        : isPending || isTxPending
          ? 'Redelegating...'
          : delegatedAddress && lookup[delegatedAddress]?.name
            ? `Redelegate to ${lookup[delegatedAddress].name}`
            : 'Redelegate'}
    </Button>
  )
}
