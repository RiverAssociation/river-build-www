export const RiverEnv = {
  omega: 'omega',
  gamma: 'gamma',
} as const

export type RiverEnv = (typeof RiverEnv)[keyof typeof RiverEnv]
