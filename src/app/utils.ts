import { wagmiAdapter } from '@/lib/wagmi'
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'

export const getSsrChainId = () => {
  return cookieToInitialState(wagmiAdapter.wagmiConfig, headers().get('cookie'))?.chainId
}
