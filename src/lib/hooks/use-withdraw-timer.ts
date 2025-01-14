'use client'
import { useEffect, useState } from 'react'

export const useWithdrawTimer = (unlockTimestamp: bigint | undefined) => {
  const [timeRemaining, setTimeRemaining] = useState<string | null>(null)

  useEffect(() => {
    if (!unlockTimestamp) return

    const updateTimer = () => {
      const now = new Date()
      const unlockTime = new Date(Number(unlockTimestamp))
      const remaining = unlockTime.getTime() - now.getTime()

      if (remaining <= 0) {
        setTimeRemaining(null)
        return
      }

      const days = Math.floor(remaining / (1000 * 60 * 60 * 24))
      const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60))

      setTimeRemaining(
        days > 0 ? `${days}d ${hours}h` : hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`,
      )
    }

    updateTimer()
    const interval = setInterval(updateTimer, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [unlockTimestamp])

  return timeRemaining
}
