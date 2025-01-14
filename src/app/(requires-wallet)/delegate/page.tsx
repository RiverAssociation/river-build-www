'use client'

import { Loader2 } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useAccount } from 'wagmi'

const Loading = () => {
  return (
    <section className="hero-glow relative flex w-full flex-col justify-center overflow-x-clip bg-gray-90 pb-24 pt-[88px] md:min-h-screen">
      <div className="flex h-full w-full flex-grow items-center justify-center text-white">
        <Loader2 className="h-4 w-4 animate-spin" />
      </div>
    </section>
  )
}

const ConnectWalletSection = dynamic(
  () =>
    import('../../../components/delegate/connect-wallet').then((mod) => mod.ConnectWalletSection),
  {
    loading: Loading,
    ssr: false,
  },
)

const DelegateSection = dynamic(
  () => import('../../../components/delegate/delegate-section').then((mod) => mod.DelegateSection),
  {
    loading: Loading,
    ssr: false,
  },
)

const DelegatePage = () => {
  const { isConnected } = useAccount()
  return isConnected ? <DelegateSection /> : <ConnectWalletSection />
}

export default DelegatePage
