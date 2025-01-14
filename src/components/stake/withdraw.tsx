'use client'
import { Button } from '@/components/ui/button'
import type { StackableOperator } from '@/data/requests'
import { useWithdraw } from '@/lib/hooks/use-withdraw'
import { formatRVRAmount } from '@/lib/utils/formatRVRAmount'
import type { DialogContentProps } from '@radix-ui/react-dialog'
import { useEffect } from 'react'
import { DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Skeleton } from '../ui/skeleton'
import { Typography } from '../ui/typography'
import { OperatorCard } from './operator-card'

type WithdrawFormProps = {
  operator: StackableOperator
  depositId: bigint
  onWithdrawFinish?: (amount: number) => void
}

export function WithdrawForm({ operator, depositId, onWithdrawFinish }: WithdrawFormProps) {
  const {
    withdraw,
    isPending,
    isTxPending,
    isTxConfirmed,
    amountToWithdraw,
    isAmountToWithdrawPending,
  } = useWithdraw(depositId)
  const isWithdrawing = isPending || isTxPending

  useEffect(() => {
    if (isTxConfirmed) {
      onWithdrawFinish?.(Number(amountToWithdraw))
    }
  }, [isTxConfirmed, onWithdrawFinish])

  return (
    <div className="space-y-6 py-4">
      <div className="space-y-2">
        <div className="space-y-2">
          <Typography className="text-sm font-medium">Currently delegated to:</Typography>
          <OperatorCard operator={operator} />
        </div>

        <Typography className="font-medium">Amount to withdraw:</Typography>
        {isAmountToWithdrawPending ? (
          <Skeleton className="h-4 w-16" />
        ) : (
          <Typography as="span" size="md">
            {formatRVRAmount(amountToWithdraw ?? 0n)} RVR
          </Typography>
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        isLoading={isWithdrawing}
        disabled={isWithdrawing}
        onClick={() => withdraw()}
      >
        {isWithdrawing ? 'Initiating Withdraw...' : 'Initiate Withdraw'}
      </Button>
    </div>
  )
}

export const WithdrawDialogContent = ({
  operator,
  depositId,
  onWithdrawFinish,
  ...rest
}: WithdrawFormProps & DialogContentProps) => {
  return (
    <DialogContent disableInteractOutside {...rest}>
      <DialogHeader>
        <DialogTitle className="text-center">Withdraw</DialogTitle>
      </DialogHeader>
      <WithdrawForm operator={operator} depositId={depositId} onWithdrawFinish={onWithdrawFinish} />
    </DialogContent>
  )
}
