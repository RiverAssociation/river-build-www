import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { base, baseSepolia } from '@reown/appkit/networks'
import { cookieStorage, createStorage } from 'wagmi'

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  throw new Error('WalletConnect Project ID is not defined')
}

export const wagmiAdapter = new WagmiAdapter({
  networks: process.env.VERCEL_ENV === 'production' ? [base] : [base, baseSepolia],
  projectId,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
})
