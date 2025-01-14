import { defineChain } from 'viem'

export const riverGamma = defineChain({
  id: 6524490,
  name: 'River Gamma',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://devnet.rpc.river.build'],
    },
  },
  testnet: true,
})

export const river = defineChain({
  id: 550,
  name: 'River',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://mainnet.rpc.river.build'],
    },
  },
})
