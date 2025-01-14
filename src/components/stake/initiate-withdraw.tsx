'use client'
import { Button } from '@/components/ui/button'
import { useReadRewardsDistributionDepositById } from '@/contracts'
import type { StackableOperator } from '@/data/requests'
import { useInitiateWithdraw } from '@/lib/hooks/use-initiate-withdraw'
import { formatRVRAmount } from '@/lib/utils/formatRVRAmount'
import type { DialogContentProps } from '@radix-ui/react-dialog'
import { useEffect } from 'react'
import { useAccount } from 'wagmi'
import { DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Label } from '../ui/label'
import { Skeleton } from '../ui/skeleton'
import { Typography } from '../ui/typography'
import { OperatorCard } from './operator-card'

type InitiateWithdrawFormProps = {
  operator: StackableOperator
  depositId: bigint
  onInitiateWithdrawFinish?: () => void
}

export function InitiateWithdrawForm({
  operator,
  depositId,
  onInitiateWithdrawFinish,
}: InitiateWithdrawFormProps) {
  const { address } = useAccount()
  const { data: currentDeposit, isPending: isCurrentDepositPending } =
    useReadRewardsDistributionDepositById({
      args: [depositId],
      query: { enabled: !!address },
    })

  const { initiateWithdraw, isPending, isTxPending, isTxConfirmed } = useInitiateWithdraw()
  const isWithdrawing = isPending || isTxPending

  useEffect(() => {
    if (isTxConfirmed) {
      onInitiateWithdrawFinish?.()
    }
  }, [isTxConfirmed, onInitiateWithdrawFinish])

  return (
    <div className="space-y-6 py-4">
      <div className="space-y-2">
        <Typography className="text-sm font-medium">Currently delegated to:</Typography>
        <OperatorCard operator={operator} />
      </div>

      <div className="flex flex-col gap-2">
        <Label className="font-medium">Currently Staked:</Label>
        {isCurrentDepositPending ? (
          <Skeleton className="h-4 w-16" />
        ) : (
          <Typography as="p" size="lg" className="font-medium">
            {formatRVRAmount(currentDeposit?.amount ?? 0n)} RVR
          </Typography>
        )}
      </div>

      <Typography className="text-sm font-medium text-[#B3B3B5]">
        You must do a full withdraw. Initiating withdraw will require a 30 days lock up period,
        after which you can withdraw the tokens to your wallet. You will not be earning rewards
        during the lock up period.
      </Typography>

      <Button
        type="submit"
        className="w-full"
        isLoading={isWithdrawing}
        disabled={isWithdrawing}
        onClick={() => initiateWithdraw({ args: [depositId] })}
      >
        {isWithdrawing ? 'Initiating Withdraw...' : 'Initiate Withdraw'}
      </Button>
    </div>
  )
}

export const InitiateWithdrawDialogContent = ({
  operator,
  depositId,
  onInitiateWithdrawFinish,
  ...rest
}: InitiateWithdrawFormProps & DialogContentProps) => {
  return (
    <DialogContent disableInteractOutside {...rest}>
      <DialogHeader>
        <DialogTitle className="text-center">Initiate Withdraw</DialogTitle>
      </DialogHeader>
      <InitiateWithdrawForm
        operator={operator}
        depositId={depositId}
        onInitiateWithdrawFinish={onInitiateWithdrawFinish}
      />
    </DialogContent>
  )
}
