'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as React from 'react'

import { cn } from '@/lib/utils'

const TooltipProvider = TooltipPrimitive.Provider

type TooltipTriggerContextType = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function useHasHover() {
  try {
    return matchMedia('(hover: hover)').matches
  } catch {
    // Assume that if browser too old to support matchMedia it's likely not a touch device
    return true
  }
}

export const TooltipTriggerContext = React.createContext<TooltipTriggerContextType>({
  open: false,
  setOpen: () => {}, // eslint-disable-line
})

const Tooltip: React.FC<TooltipPrimitive.TooltipProps> = ({ children, ...props }) => {
  const [open, setOpen] = React.useState<boolean>(props.defaultOpen ?? false)
  // we only want to enable the "click to open" functionality on mobile
  const isDesktop = useHasHover()

  return (
    <TooltipPrimitive.Root
      delayDuration={isDesktop ? props.delayDuration : 0}
      onOpenChange={(e) => {
        setOpen(e)
      }}
      open={open}
    >
      <TooltipTriggerContext.Provider value={{ open, setOpen }}>
        {children}
      </TooltipTriggerContext.Provider>
    </TooltipPrimitive.Root>
  )
}

const TooltipTrigger = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>(({ children, ...props }, ref) => {
  // we only want to enable the "click to open" functionality on mobile
  const isDesktop = useHasHover()
  const { setOpen } = React.useContext(TooltipTriggerContext)

  return (
    <TooltipPrimitive.Trigger
      ref={ref}
      {...props}
      onClick={(e) => {
        if (!isDesktop) {
          e.preventDefault()
          setOpen(true)
        }
      }}
    >
      {children}
    </TooltipPrimitive.Trigger>
  )
})

TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'z-50 overflow-hidden rounded-md border border-gray-30 bg-[#222026] px-3 py-1.5 text-sm text-[#CECBD8] shadow-md',
      'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
