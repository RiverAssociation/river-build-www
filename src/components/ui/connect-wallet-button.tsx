'use client'

import { useAppKit } from '@reown/appkit/react'
import { Button } from '../ui/button'

export const ConnectWalletButton = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const { open } = useAppKit()
  return (
    <Button variant="primary" onClick={() => open()} className={className}>
      {children}
    </Button>
  )
}
