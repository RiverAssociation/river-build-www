'use client'
import { projectId, wagmiAdapter } from '@/lib/wagmi'
import { base, baseSepolia } from '@reown/appkit/networks'
import { createAppKit } from '@reown/appkit/react'
import { ReactNode } from 'react'

import { State, WagmiProvider } from 'wagmi'

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'River',
  description: 'River',
  url: 'https://river.build', // origin must match your domain & subdomain
  icons: ['https://www.river.build/favicon/dark/apple-icon.png'],
}

createAppKit({
  adapters: [wagmiAdapter],
  defaultNetwork: process.env.VERCEL_ENV === 'production' ? base : baseSepolia,
  networks: process.env.VERCEL_ENV === 'production' ? [base] : [base, baseSepolia],
  metadata: metadata,
  projectId,
  features: {
    onramp: false,
    socials: false,
    email: false,
    swaps: false,
    analytics: true,
  },
})

export function WalletConnectProvider({
  children,
  initialState,
}: {
  children: ReactNode
  initialState?: State
}) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig} initialState={initialState}>
      {children}
    </WagmiProvider>
  )
}
