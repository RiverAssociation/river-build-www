export const formatPrecisionNumber = (value: number, decimals: number) => {
  const formatted = value.toPrecision(decimals + 1)
  return formatted.replace(/\e[+-]?\d+/, '')
}
