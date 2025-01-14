const NumberFormat = new Intl.NumberFormat('en-US')

export const formatRVRAmount = (amount: bigint | number) =>
  NumberFormat.format(Number(amount) / 1e18)
