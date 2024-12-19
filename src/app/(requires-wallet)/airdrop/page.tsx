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

const ConnectWallet = dynamic(
  () => import('../../../components/airdrop/connect-wallet').then((mod) => mod.ConnectWallet),
  {
    loading: Loading,
    ssr: false,
  },
)

const ClaimPage = dynamic(
  () => import('../../../components/airdrop/airdrop-page').then((mod) => mod.AirdropPage),
  {
    loading: Loading,
    ssr: false,
  },
)

const Page = () => {
  const { isConnected } = useAccount()
  return isConnected ? <ClaimPage /> : <ConnectWallet />
}

export default Page
