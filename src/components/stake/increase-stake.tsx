import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  rewardsDistributionAddress as _rewardsDistributionAddress,
  useReadRewardsDistributionDepositById,
  useReadRiverTokenBalanceOf,
} from '@/contracts'
import type { StackableOperator } from '@/data/requests'
import { useApprove } from '@/lib/hooks/use-approve'
import { useIncreaseStake } from '@/lib/hooks/use-increase-stake'
import { formatRVRAmount } from '@/lib/utils/formatRVRAmount'
import { zodResolver } from '@hookform/resolvers/zod'
import type { DialogContentProps } from '@radix-ui/react-dialog'
import { useQueryClient } from '@tanstack/react-query'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { parseUnits } from 'viem'
import { useAccount } from 'wagmi'
import * as z from 'zod'
import { MaxButton } from '../max-button'
import { DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Skeleton } from '../ui/skeleton'
import { Typography } from '../ui/typography'
import { OperatorCard } from './operator-card'

type IncreaseStakeFormProps = {
  operator: StackableOperator
  depositId: bigint
  onIncreaseStakeFinish?: (amount: bigint) => void
}

export function IncreaseStakeForm({
  operator,
  depositId,
  onIncreaseStakeFinish,
}: IncreaseStakeFormProps) {
  const { address, chainId } = useAccount()
  const rewardsDistributionAddress =
    _rewardsDistributionAddress[chainId as keyof typeof _rewardsDistributionAddress]
  const queryClient = useQueryClient()
  const { data: balance } = useReadRiverTokenBalanceOf({
    args: [address!],
    query: { enabled: !!address },
  })
  const avaliableBalance = balance || 0n
  const formSchema = useMemo(
    () =>
      z.object({
        amount: z
          .number()
          .refine((val) => val > 0, {
            message: 'Amount must be a positive number',
          })
          .refine((val) => BigInt(val) <= avaliableBalance, {
            message: 'Amount can not be greater than available balance',
          }),
      }),
    [avaliableBalance],
  )

  const {
    allowance,
    approve,
    isApproving,
    isApproveTxPending,
    isApproveTxConfirmed,
    queryKey: allowanceQueryKey,
  } = useApprove(rewardsDistributionAddress)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const [lastAmount, setLastAmount] = useState(0)
  const { data: currentDeposit, isPending: isCurrentDepositPending } =
    useReadRewardsDistributionDepositById({
      args: [depositId],
      query: { enabled: !!address },
    })

  const { increaseStake, isPending, isTxPending, isTxConfirmed } = useIncreaseStake(depositId)

  useEffect(() => {
    if (isTxConfirmed) {
      queryClient.invalidateQueries({ queryKey: allowanceQueryKey })
      onIncreaseStakeFinish?.(parseUnits(lastAmount.toString(), 18))
    }
  }, [isTxConfirmed, onIncreaseStakeFinish, form, queryClient, allowanceQueryKey, lastAmount])

  const isAllowed =
    !!allowance &&
    BigInt(allowance) >= BigInt(parseUnits((form.watch('amount') ?? 0).toString(), 18))

  const isStaking = isPending || isTxPending
  const isWaitingForApproval = isApproving || isApproveTxPending

  useEffect(() => {
    if (isApproveTxConfirmed && !isStaking) {
      const amount = form.getValues('amount')
      if (!amount) return
      setLastAmount(amount)
      increaseStake({
        args: [depositId, parseUnits(amount.toString(), 18)],
      })
    }
  }, [isApproveTxConfirmed, form, increaseStake, depositId, isStaking, setLastAmount])

  const handleSetMax = useCallback(() => {
    form.setValue('amount', Number(avaliableBalance))
  }, [avaliableBalance, form])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => {
          if (!isAllowed) {
            approve({
              args: [rewardsDistributionAddress, parseUnits(values.amount.toString(), 18)],
            })
            return
          }
          setLastAmount(values.amount)
          increaseStake({
            args: [depositId, parseUnits(values.amount.toString(), 18)],
          })
        })}
        className="space-y-6 py-4"
      >
        <div className="space-y-2">
          <FormLabel className="text-sm font-medium">Stake to:</FormLabel>
          <OperatorCard operator={operator} />
        </div>
        <div className="flex flex-col gap-2">
          <FormLabel className="font-medium">Currently Staked:</FormLabel>
          {isCurrentDepositPending ? (
            <Skeleton className="h-4 w-16" />
          ) : (
            <Typography as="p" size="lg" className="font-medium">
              {formatRVRAmount(currentDeposit?.amount ?? 0n)} RVR
            </Typography>
          )}
        </div>

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Enter amount</FormLabel>
                <MaxButton onClick={handleSetMax} />
              </div>
              <FormControl>
                <Input
                  type="number"
                  placeholder="0"
                  {...field}
                  onChange={(e) => {
                    const value = Number(e.target.value)
                    field.onChange(value)
                  }}
                  className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
              </FormControl>
              <FormMessage />
              <FormDescription className="flex w-full justify-end">
                Available Balance {formatRVRAmount(avaliableBalance)} RVR
              </FormDescription>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={isStaking || isWaitingForApproval}
          isLoading={isStaking || isWaitingForApproval}
        >
          {(() => {
            if (isStaking) return 'Increasing Stake...'
            if (isWaitingForApproval) return 'Approving...'
            if (!isAllowed) return 'Approve'
            return 'Increase Stake'
          })()}
        </Button>
      </form>
    </Form>
  )
}

export const IncreaseStakeDialogContent = ({
  operator,
  depositId,
  onIncreaseStakeFinish,
  ...rest
}: IncreaseStakeFormProps & DialogContentProps) => {
  return (
    <DialogContent {...rest}>
      <DialogHeader>
        <DialogTitle className="text-center">Increase Stake</DialogTitle>
      </DialogHeader>
      <IncreaseStakeForm
        operator={operator}
        depositId={depositId}
        onIncreaseStakeFinish={onIncreaseStakeFinish}
      />
    </DialogContent>
  )
}
