import { Button } from '@/components/ui/button'
import { useReadRewardsDistributionDepositById } from '@/contracts'
import type { StackableOperator } from '@/data/requests'
import { cn } from '@/lib/utils'
import { formatRVRAmount } from '@/lib/utils/formatRVRAmount'
import { Dialog, type DialogContentProps, type DialogProps } from '@radix-ui/react-dialog'
import { ArrowLeft } from 'lucide-react'
import { createContext, useContext, useState } from 'react'
import { RedelegateButton } from '../delegate/redelegate-button'
import { DialogContent, DialogHeader, DialogTitle, closeStyle } from '../ui/dialog'
import { Skeleton } from '../ui/skeleton'
import { Typography } from '../ui/typography'
import { OperatorCard } from './operator-card'

type RedelegateFormProps = {
  currentOperator: StackableOperator
  availableOperators: StackableOperator[]
  depositId: bigint
  isCancelWithdraw?: boolean
  onRedelegateFinish?: (operator: StackableOperator) => void
}

export const RedelegateDialogContent = ({
  currentOperator,
  availableOperators,
  depositId,
  onRedelegateFinish,
  isCancelWithdraw,
  ...rest
}: RedelegateFormProps & DialogContentProps) => {
  const {
    onOpenChange,
    selectedOperator,
    showOperatorSelect,
    setSelectedOperator,
    setShowOperatorSelect,
  } = useContext(RedelegateContext)
  const { data: deposit, isPending: isPendingDeposit } = useReadRewardsDistributionDepositById({
    args: [depositId],
  })

  // TODO: animate height x.x
  return (
    <DialogContent disableInteractOutside {...rest}>
      {showOperatorSelect && (
        <button
          onClick={() => setShowOperatorSelect(false)}
          className={cn(closeStyle, 'absolute left-4 top-4')}
        >
          <ArrowLeft className="h-4 w-4 text-white" />
          <span className="sr-only">Back</span>
        </button>
      )}
      <DialogHeader>
        <DialogTitle className="text-center">
          {showOperatorSelect
            ? 'Select a new operator'
            : isCancelWithdraw
              ? 'Cancel Withdraw and Redelegate'
              : 'Redelegate'}
        </DialogTitle>
        {showOperatorSelect && (
          <Typography className="text-center text-sm">
            To distribute power on the network, please delegate to top performing operators.
          </Typography>
        )}
      </DialogHeader>

      {!showOperatorSelect && (
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Typography className="text-sm font-medium">Currently delegated to:</Typography>
            <OperatorCard operator={currentOperator} />
          </div>
          <div className="space-y-2">
            <Typography className="text-sm font-medium">Redelegate to:</Typography>
            <Button
              className="w-full justify-start text-left"
              variant={selectedOperator ? 'secondary' : 'primary'}
              onClick={() => setShowOperatorSelect(true)}
            >
              {selectedOperator ? <span>{selectedOperator.name}</span> : 'Select Operator'}
            </Button>
          </div>
          <div className="space-y-2">
            <Typography className="text-sm font-medium">Currently Staked:</Typography>
            {isPendingDeposit ? (
              <Skeleton className="h-6 w-16" />
            ) : (
              <Typography as="p" size="lg" className="font-medium">
                {formatRVRAmount(deposit?.amount ?? 0n)} RVR
              </Typography>
            )}
          </div>
          <RedelegateButton
            depositId={depositId}
            delegatedAddress={selectedOperator?.address}
            className="w-full"
            onRedelegateFinish={(redelegatedOperator) => {
              if (!selectedOperator) return
              setSelectedOperator(undefined)
              onOpenChange(false)
              onRedelegateFinish?.(redelegatedOperator)
            }}
          />
        </div>
      )}
      {showOperatorSelect && (
        <div className="relative max-h-[60vh] overflow-y-auto px-4 py-2">
          <div className="grid grid-cols-1 gap-4">
            {availableOperators
              .filter((op) => op.address !== currentOperator.address)
              .map((operator) => (
                <OperatorCard
                  key={operator.address}
                  operator={operator}
                  allOperators={availableOperators}
                  className={cn(
                    'cursor-pointer transition-all hover:opacity-85',
                    selectedOperator?.address === operator.address ? 'ring-2 ring-white' : '',
                  )}
                  ringColor={
                    selectedOperator?.address === operator.address ? '#F5D90A' : 'transparent'
                  }
                  button={
                    <Button
                      onClick={() => {
                        setSelectedOperator(operator)
                        setShowOperatorSelect(false)
                      }}
                      className="w-full"
                    >
                      Select
                    </Button>
                  }
                />
              ))}
          </div>
        </div>
      )}
    </DialogContent>
  )
}

const RedelegateContext = createContext<{
  onOpenChange: (open: boolean) => void
  selectedOperator: StackableOperator | undefined
  setSelectedOperator: (operator: StackableOperator | undefined) => void
  showOperatorSelect: boolean
  setShowOperatorSelect: (show: boolean) => void
  open: boolean
}>({
  onOpenChange: () => {},
  selectedOperator: undefined,
  setSelectedOperator: () => {},
  showOperatorSelect: false,
  setShowOperatorSelect: () => {},
  open: false,
})

export const RedelegateProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)
  const [showOperatorSelect, setShowOperatorSelect] = useState(false)
  const [selectedOperator, setSelectedOperator] = useState<StackableOperator>()

  return (
    <RedelegateContext.Provider
      value={{
        onOpenChange: (open: boolean) => {
          setShowOperatorSelect((state) => (open ? false : state))
          setOpen(open)
          setSelectedOperator(undefined)
        },
        selectedOperator,
        showOperatorSelect,
        setSelectedOperator,
        setShowOperatorSelect,
        open,
      }}
    >
      {children}
    </RedelegateContext.Provider>
  )
}

export const RedelegateDialog = ({
  children,
  open,
  onOpenChange,
  defaultOpen,
  ...rest
}: { children: React.ReactNode } & DialogProps) => {
  const { onOpenChange: redelegateOnOpenChange } = useContext(RedelegateContext)

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        redelegateOnOpenChange(open)
        onOpenChange?.(open)
      }}
      {...rest}
    >
      {children}
    </Dialog>
  )
}
