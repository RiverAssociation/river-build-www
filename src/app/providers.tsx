'use client'

import { TooltipProvider } from '@/components/ui/tooltip'
import { TanstackQueryProvider } from '@/lib/context/tanstack-query-provider'
import { WalletConnectProvider } from '@/lib/context/wallet-connect-provider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TanstackQueryProvider>
      <WalletConnectProvider>
        <TooltipProvider>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </TooltipProvider>
      </WalletConnectProvider>
    </TanstackQueryProvider>
  )
}
