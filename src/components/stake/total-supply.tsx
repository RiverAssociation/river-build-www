'use client'
import type { StakeableOperatorsResponse } from '@/data/requests'
import { useStake } from '@/lib/hooks/use-stake'
import { useStakeableOperators } from '@/lib/hooks/use-stakeable-operators'
import { formatPrecisionNumber } from '@/lib/utils/formatPrecisionNumber'
import { formatRVRAmount } from '@/lib/utils/formatRVRAmount'
import { useMemo } from 'react'
import { PieChart } from '../pie-chart'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Skeleton } from '../ui/skeleton'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { Typography } from '../ui/typography'

const RIVER_TOKEN_TOTAL_SUPPLY = 10000000000000000000000000000n

export const TotalSupplyCard = ({
  initialData,
}: {
  initialData: StakeableOperatorsResponse | undefined
}) => {
  const { isStakingStatePending, stakingState } = useStake()
  const { networkEstimatedApy } = useStakeableOperators({ initialData, liveQuery: true })
  const stakedPercentage = useMemo(() => {
    if (!stakingState?.totalStaked) return 0
    const totalStaked = Number(stakingState.totalStaked)
    const percentage = (totalStaked / Number(RIVER_TOKEN_TOTAL_SUPPLY)) * 100
    return percentage
  }, [stakingState])

  return (
    <Card className="w-full" disableHover>
      <CardHeader>
        <CardTitle className="text-center">Total Supply</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-around gap-8 md:flex-row">
        <div className="flex h-48 w-48 flex-col items-center gap-1">
          <PieChart percentage={stakedPercentage || 0} gradient="red" className="h-32 w-32" />
          <Typography className="text-gray-20">Staked</Typography>
          <div className="font-bold">
            {isStakingStatePending ? (
              <Skeleton className="h-4 w-16" />
            ) : (
              <span>{formatRVRAmount(stakingState?.totalStaked ?? 0n)} RVR</span>
            )}
          </div>
        </div>

        <Tooltip>
          <TooltipTrigger>
            <div className="text-center">
              <div className="flex items-center justify-center text-4xl font-bold">
                {!networkEstimatedApy ? (
                  <Skeleton className="h-10 w-28" />
                ) : (
                  <span>{formatPrecisionNumber(networkEstimatedApy, 2)}%</span>
                )}
              </div>
              <div className="text-muted-foreground text-sm">Estimated APR*</div>
            </div>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            className="text-foreground max-w-sm text-wrap bg-gray-80 text-center"
          >
            APR may vary and depends on delegation amount or total period reward
          </TooltipContent>
        </Tooltip>
      </CardContent>
    </Card>
  )
}
