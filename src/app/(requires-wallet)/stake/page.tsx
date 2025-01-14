import { getSsrChainId } from '@/app/utils'
import { AllOperators } from '@/components/stake/all-operators'
import { TotalSupplyCard } from '@/components/stake/total-supply'
import { YourAccountCard } from '@/components/stake/your-account'
import { YourRewardsCard } from '@/components/stake/your-rewards'
import { SwitchToBase } from '@/components/switch-to-base'
import { getStakeableOperators } from '@/data/requests'
import { cn } from '@/lib/utils'
import { baseSepolia } from 'viem/chains'

// TODO: add cache later
// export const revalidate = 60
export const dynamic = 'force-dynamic'

const StakePage = async () => {
  const chainId = getSsrChainId()
  const env = chainId === baseSepolia.id ? 'gamma' : 'omega'
  const initialData = await getStakeableOperators(env).catch(() => undefined)

  return (
    <section
      className={cn(
        'hero-glow relative w-full overflow-x-clip bg-gray-90 text-white',
        'pb-24 pt-[88px]',
      )}
    >
      <div className="container space-y-12 px-4 md:px-8 xl:max-w-screen-xl">
        <SwitchToBase />

        <TotalSupplyCard initialData={initialData} />
        <div className="grid gap-6 md:grid-cols-2">
          <YourAccountCard />
          <YourRewardsCard />
        </div>
        <AllOperators initialData={initialData} />
      </div>
    </section>
  )
}

export default StakePage
