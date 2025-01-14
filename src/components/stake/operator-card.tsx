'use client'

import { Button } from '@/components/ui/button'
import type { StackableOperator } from '@/data/requests'
import { useWithdraw } from '@/lib/hooks/use-withdraw'
import { useWithdrawTimer } from '@/lib/hooks/use-withdraw-timer'
import { cn, formatUptime } from '@/lib/utils'
import { formatPrecisionNumber } from '@/lib/utils/formatPrecisionNumber'
import { formatRVRAmount } from '@/lib/utils/formatRVRAmount'
import { ArrowRightLeftIcon, EllipsisVertical, InfoIcon, LogOutIcon, XIcon } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useAccount } from 'wagmi'
import { Dialog, DialogTrigger } from '../ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { toast } from '../ui/use-toast'
import { WalletAddress } from '../wallet-address'
import { IncreaseStakeDialogContent } from './increase-stake'
import { InitiateWithdrawDialogContent } from './initiate-withdraw'
import { RedelegateDialog, RedelegateDialogContent, RedelegateProvider } from './redelegate'
import { StakeDialogContent } from './stake-to-operator'
import { WithdrawDialogContent } from './withdraw'

export interface NodeCardProps {
  operator: StackableOperator
  deposits?: {
    depositId: bigint
    amount: bigint
    pendingWithdrawal: bigint
  }
  allOperators?: StackableOperator[]
  className?: string
  showButton?: boolean
  button?: React.ReactNode
  onSelect?: (operator: StackableOperator) => void
  ringColor?: string
}

type StakeState = 'stakeable' | 'staked' | 'locked' | 'can-withdraw'

export function OperatorCard({
  operator,
  deposits,
  className,
  showButton,
  allOperators,
  button,
  ringColor,
}: NodeCardProps) {
  const { isConnected } = useAccount()
  const depositId = deposits?.depositId
  const { lockCooldown } = useWithdraw(depositId)
  const withdrawTimer = useWithdrawTimer(lockCooldown)

  const [open, setOpen] = useState<
    'stake' | 'increase-stake' | 'redelegate' | 'withdraw' | 'cancel-withdraw' | null
  >(null)
  const {
    isStakeOpen,
    isIncreaseStakeOpen,
    isRedelegateOpen,
    isWithdrawOpen,
    isCancelWithdrawOpen,
  } = useMemo(() => {
    return {
      isStakeOpen: open === 'stake',
      isIncreaseStakeOpen: open === 'increase-stake',
      isRedelegateOpen: open === 'redelegate',
      isWithdrawOpen: open === 'withdraw',
      isCancelWithdrawOpen: open === 'cancel-withdraw',
    }
  }, [open])

  const stakeState = useMemo(() => {
    if (!deposits) return 'stakeable'
    if (deposits.pendingWithdrawal > 0n) {
      // If there's a pending withdrawal, check if we have a timer
      return withdrawTimer ? 'locked' : 'can-withdraw'
    }
    if (deposits.amount > 0n) return 'staked'
    return 'stakeable'
  }, [deposits, withdrawTimer]) satisfies StakeState

  return (
    <div
      className={cn('flex flex-col gap-3 rounded-lg bg-[#222026] p-4', className)}
      style={{ '--tw-ring-color': ringColor } as any}
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-lg bg-gray-20" />
        <div className="flex flex-col gap-1">
          <span className="tracking-tightfont-medium text-xl font-semibold leading-none text-gray-10">
            {operator.name}
          </span>
          <WalletAddress address={operator.address} className="text-sm text-gray-20" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="space-y-2">
          <div className="text-gray-20">Health</div>
          <div className="flex w-full items-center gap-1 font-medium">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            {operator.metrics.grpc}ms gRPC
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-gray-20">Uptime</div>
          <div className="font-medium">
            {formatUptime(new Date(operator.metrics.grpc_start_time))}
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-gray-20">Commission</div>
          <div className="font-medium">{`${operator.commissionPercentage}%`}</div>
        </div>
        <div className="space-y-2">
          <div className="text-gray-20">
            <Tooltip>
              <TooltipTrigger className="inline-flex items-center gap-1.5">
                Est. APR
                <InfoIcon className="size-4" />
              </TooltipTrigger>
              <TooltipContent className="text-foreground max-w-sm text-wrap bg-gray-80 text-center">
                APR may vary and depends on delegation amount or total period reward.
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="text-primary font-medium">
            {formatPrecisionNumber(operator.estimatedApr, 2)}%
          </div>
        </div>
        {deposits?.amount && (
          <div className="col-span-2 grid grid-cols-2 items-center rounded-lg bg-[#21E078]/10 px-2 py-1">
            <span className="text-gray-20">Staked</span>
            <span className="truncate font-medium hover:overflow-auto hover:text-clip hover:whitespace-normal hover:break-all">
              {formatRVRAmount(deposits.amount)} RVR
            </span>
          </div>
        )}
      </div>

      {/* Bottom Row */}
      {button && <div className="flex items-center gap-2">{button}</div>}
      {showButton ? (
        <div className="flex items-center gap-1">
          {stakeState === 'stakeable' && (
            <>
              <Dialog
                modal
                open={isStakeOpen}
                onOpenChange={(open) => setOpen(open ? 'stake' : null)}
              >
                <DialogTrigger asChild>
                  <Button className="w-full" disabled={!isConnected}>
                    {isConnected ? 'Stake' : 'Connect Wallet to Stake'}
                  </Button>
                </DialogTrigger>
                <StakeDialogContent
                  operator={operator}
                  onStakeFinish={(amount) => {
                    toast({
                      title: 'Stake finished',
                      description: `You have staked ${formatRVRAmount(BigInt(amount))} RVR to ${operator.name}`,
                    })
                    setOpen(null)
                  }}
                />
              </Dialog>
            </>
          )}
          {stakeState === 'staked' && depositId && (
            <>
              <Dialog
                modal
                open={isIncreaseStakeOpen}
                onOpenChange={(open) => setOpen(open ? 'increase-stake' : null)}
              >
                <DialogTrigger asChild>
                  <Button className="w-full">Increase Stake</Button>
                </DialogTrigger>
                <IncreaseStakeDialogContent
                  operator={operator}
                  depositId={depositId}
                  onIncreaseStakeFinish={(amount) => {
                    toast({
                      title: 'Increase stake finished',
                      description: `You have increased your stake to ${formatRVRAmount(BigInt(amount) + deposits.amount)} RVR to ${operator.name}`,
                    })
                    setOpen(null)
                  }}
                />
              </Dialog>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      'inline-flex items-center justify-center rounded-full bg-white p-3',
                      'h-11 w-11 min-w-11',
                    )}
                  >
                    <EllipsisVertical className="h-4 w-4 text-black" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40 space-y-1">
                  <DropdownMenuItem className="gap-2" onClick={() => setOpen('redelegate')} asChild>
                    <div className="flex items-center gap-2">
                      <ArrowRightLeftIcon className="h-4 w-4" />
                      <span>Redelegate</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2" onClick={() => setOpen('withdraw')} asChild>
                    <div className="flex items-center gap-2">
                      <LogOutIcon className="h-4 w-4" />
                      <span>Withdraw</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
          {stakeState === 'locked' && (
            <>
              <Button className="w-full" disabled>
                Withdraw in {withdrawTimer}
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      'inline-flex items-center justify-center rounded-full bg-white p-3',
                      'h-11 w-11 min-w-11',
                    )}
                  >
                    <EllipsisVertical className="h-4 w-4 text-black" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-44 space-y-1">
                  <DropdownMenuItem
                    className="gap-2"
                    onClick={() => setOpen('cancel-withdraw')}
                    asChild
                  >
                    <div className="flex items-center gap-2">
                      <XIcon className="h-4 w-4" />
                      <span>Cancel Withdraw</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
          {stakeState === 'can-withdraw' && depositId && (
            <>
              <Dialog modal>
                <DialogTrigger asChild>
                  <Button className="w-full">Withdraw</Button>
                </DialogTrigger>
                <WithdrawDialogContent
                  operator={operator}
                  depositId={depositId}
                  onWithdrawFinish={(amount) => {
                    setOpen(null)
                    toast({
                      title: 'Withdraw finished.',
                      description: `You have withdrawn ${formatRVRAmount(amount)} RVR.`,
                    })
                  }}
                />
              </Dialog>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      'inline-flex items-center justify-center rounded-full bg-white p-3',
                      'h-11 w-11 min-w-11',
                    )}
                  >
                    <EllipsisVertical className="h-4 w-4 text-black" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-44 space-y-1">
                  <DropdownMenuItem
                    className="gap-2"
                    onClick={() => setOpen('cancel-withdraw')}
                    asChild
                  >
                    <div className="flex items-center gap-2">
                      <XIcon className="h-4 w-4" />
                      <span>Cancel Withdraw</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
      ) : null}

      <RedelegateProvider>
        <RedelegateDialog
          open={isRedelegateOpen}
          onOpenChange={(open) => setOpen(open ? 'redelegate' : null)}
          modal
        >
          <RedelegateDialogContent
            currentOperator={operator}
            availableOperators={allOperators || []}
            depositId={depositId!}
            onRedelegateFinish={(redelegatedOperator) => {
              toast({
                title: 'Redelegation finished',
                description: `You redelegated your stake to ${redelegatedOperator.name}`,
              })
              setOpen(null)
            }}
          />
        </RedelegateDialog>
      </RedelegateProvider>

      {/* Cancel withdraw is pretty much redelegating */}
      <RedelegateProvider>
        <RedelegateDialog
          open={isCancelWithdrawOpen}
          onOpenChange={(open) => setOpen(open ? 'cancel-withdraw' : null)}
          modal
        >
          <RedelegateDialogContent
            currentOperator={operator}
            availableOperators={allOperators || []}
            depositId={depositId!}
            isCancelWithdraw
            onRedelegateFinish={() => {
              toast({
                title: 'Withdraw cancelled',
                description: 'Your withdrawal has been cancelled',
              })
              setOpen(null)
            }}
          />
        </RedelegateDialog>
      </RedelegateProvider>

      <Dialog
        modal
        open={isWithdrawOpen}
        onOpenChange={(open) => setOpen(open ? 'withdraw' : null)}
      >
        <InitiateWithdrawDialogContent
          operator={operator}
          depositId={depositId!}
          onInitiateWithdrawFinish={() => {
            toast({
              title: 'Withdraw initiated',
              description: 'Your withdrawal is being processed',
            })
            setOpen(null)
          }}
        />
      </Dialog>
    </div>
  )
}
