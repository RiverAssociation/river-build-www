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
  useReadRiverTokenBalanceOf,
} from '@/contracts'
import type { StackableOperator } from '@/data/requests'
import { useApprove } from '@/lib/hooks/use-approve'
import { useStake } from '@/lib/hooks/use-stake'
import { formatRVRAmount } from '@/lib/utils/formatRVRAmount'
import { zodResolver } from '@hookform/resolvers/zod'
import type { DialogContentProps } from '@radix-ui/react-dialog'
import { useQueryClient } from '@tanstack/react-query'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { isAddress, parseUnits, type Address } from 'viem'
import { useAccount } from 'wagmi'
import * as z from 'zod'
import { MaxButton } from '../max-button'
import { DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { OperatorCard } from './operator-card'

type StakeFormProps = {
  operator: StackableOperator
  onStakeFinish?: (amount: number) => void
}

export function StakeForm({ operator, onStakeFinish }: StakeFormProps) {
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
        beneficiary: z.string().refine((val) => isAddress(val), {
          message: 'Invalid address',
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
    defaultValues: {
      beneficiary: address,
    },
  })

  const [lastAmount, setLastAmount] = useState(0)
  const { stake, isPending, isTxPending, isTxConfirmed } = useStake()

  useEffect(() => {
    if (isTxConfirmed) {
      queryClient.invalidateQueries({ queryKey: allowanceQueryKey })
      onStakeFinish?.(lastAmount)
      form.reset()
    }
  }, [isTxConfirmed, onStakeFinish, form, queryClient, allowanceQueryKey, lastAmount])

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
      stake({
        args: [
          parseUnits(amount.toString(), 18),
          operator.address,
          form.getValues('beneficiary') as Address,
        ],
      })
    }
  }, [form, isApproveTxConfirmed, isStaking, operator.address, stake, setLastAmount])

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
          stake({
            args: [
              parseUnits(values.amount.toString(), 18),
              operator.address,
              values.beneficiary as Address,
            ],
          })
        })}
        className="space-y-6 py-4"
      >
        <div className="space-y-2">
          <FormLabel className="text-sm font-medium">Stake to:</FormLabel>
          <OperatorCard operator={operator} />
        </div>

        <FormField
          control={form.control}
          name="beneficiary"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Beneficiary</FormLabel>
              </div>
              <FormDescription>
                Beneficiary is the address that will receive the rewards from the operator.
              </FormDescription>
              <FormControl>
                <Input placeholder="0x..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
            if (isStaking) return 'Staking...'
            if (isWaitingForApproval) return 'Approving...'
            if (!isAllowed) return 'Approve'
            return 'Stake'
          })()}
        </Button>
      </form>
    </Form>
  )
}

export const StakeDialogContent = ({
  operator,
  onStakeFinish,
  ...rest
}: StakeFormProps & DialogContentProps) => {
  return (
    <DialogContent disableInteractOutside {...rest}>
      <DialogHeader>
        <DialogTitle className="text-center">Stake to Operator</DialogTitle>
      </DialogHeader>
      <StakeForm operator={operator} onStakeFinish={onStakeFinish} />
    </DialogContent>
  )
}
