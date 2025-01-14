import { river, riverGamma } from '@/lib/riverChain'
import gamma from '@river-build/generated/deployments/gamma/base/addresses/baseRegistry.json' with { type:
  'json' }
import omega from '@river-build/generated/deployments/omega/base/addresses/baseRegistry.json' with { type:
  'json' }

import { defineConfig, loadEnv } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins'
import { type Address } from 'viem'
import { base, baseSepolia, mainnet, sepolia } from 'viem/chains'

const env = loadEnv({
  mode: process.env.NODE_ENV,
  envDir: process.cwd(),
})

// https://sepolia.basescan.org/address/0x2852B5F72eE5A8867563c55547C1376CbbbBC7B3#code
const rewardDistributionAbi = [
  {
    inputs: [
      { internalType: 'address', name: 'delegator', type: 'address' },
      { internalType: 'address', name: 'operator', type: 'address' },
    ],
    name: 'DelegationAlreadySet',
    type: 'error',
  },
  { inputs: [], name: 'DelegationNotSet', type: 'error' },
  { inputs: [], name: 'Initializable_InInitializingState', type: 'error' },
  { inputs: [], name: 'Initializable_NotInInitializingState', type: 'error' },
  { inputs: [], name: 'Introspection_AlreadySupported', type: 'error' },
  { inputs: [], name: 'Introspection_NotSupported', type: 'error' },
  {
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'uint256', name: 'currentNonce', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'claimer', type: 'address' }],
    name: 'InvalidClaimer',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'delegator', type: 'address' }],
    name: 'InvalidDelegator',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'operator', type: 'address' }],
    name: 'InvalidOperator',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
    name: 'InvalidOwner',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'quantity', type: 'uint256' }],
    name: 'InvalidQuantity',
    type: 'error',
  },
  { inputs: [], name: 'NewImplementationHasNoCode', type: 'error' },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'Ownable__NotOwner',
    type: 'error',
  },
  { inputs: [], name: 'Ownable__ZeroAddress', type: 'error' },
  { inputs: [], name: 'RewardsDistribution__CannotWithdrawFromSelf', type: 'error' },
  { inputs: [], name: 'RewardsDistribution__ExpiredDeadline', type: 'error' },
  { inputs: [], name: 'RewardsDistribution__InvalidSignature', type: 'error' },
  { inputs: [], name: 'RewardsDistribution__NoPendingWithdrawal', type: 'error' },
  { inputs: [], name: 'RewardsDistribution__NotActiveOperator', type: 'error' },
  { inputs: [], name: 'RewardsDistribution__NotBeneficiary', type: 'error' },
  { inputs: [], name: 'RewardsDistribution__NotClaimer', type: 'error' },
  { inputs: [], name: 'RewardsDistribution__NotDepositOwner', type: 'error' },
  { inputs: [], name: 'RewardsDistribution__NotOperatorOrSpace', type: 'error' },
  { inputs: [], name: 'RewardsDistribution__NotRewardNotifier', type: 'error' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'depositId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'newBeneficiary', type: 'address' },
    ],
    name: 'ChangeBeneficiary',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'beneficiary', type: 'address' },
      { indexed: true, internalType: 'address', name: 'recipient', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'reward', type: 'uint256' },
    ],
    name: 'ClaimReward',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'delegator', type: 'address' },
      { indexed: true, internalType: 'address', name: 'claimer', type: 'address' },
    ],
    name: 'ClaimerSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'depositId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'delegatee', type: 'address' },
      { indexed: false, internalType: 'address', name: 'proxy', type: 'address' },
    ],
    name: 'DelegationProxyDeployed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'address', name: 'delegator', type: 'address' }],
    name: 'DelegationRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'delegator', type: 'address' },
      { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'quantity', type: 'uint256' },
    ],
    name: 'DelegationSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'depositId', type: 'uint256' },
      { indexed: false, internalType: 'uint96', name: 'amount', type: 'uint96' },
    ],
    name: 'IncreaseStake',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint32', name: 'version', type: 'uint32' }],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'depositId', type: 'uint256' },
      { indexed: false, internalType: 'uint96', name: 'amount', type: 'uint96' },
    ],
    name: 'InitiateWithdraw',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'InterfaceAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'InterfaceRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'notifier', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'reward', type: 'uint256' },
    ],
    name: 'NotifyRewardAmount',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }],
    name: 'PeriodRewardAmountSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'depositId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'delegatee', type: 'address' },
    ],
    name: 'Redelegate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'notifier', type: 'address' },
      { indexed: false, internalType: 'bool', name: 'enabled', type: 'bool' },
    ],
    name: 'RewardNotifierSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'stakeToken', type: 'address' },
      { indexed: false, internalType: 'address', name: 'rewardToken', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'rewardDuration', type: 'uint256' },
    ],
    name: 'RewardsDistributionInitialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'space', type: 'address' },
      { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'scaledReward', type: 'uint256' },
    ],
    name: 'SpaceRewardsSwept',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'delegatee', type: 'address' },
      { indexed: true, internalType: 'address', name: 'beneficiary', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'depositId', type: 'uint256' },
      { indexed: false, internalType: 'uint96', name: 'amount', type: 'uint96' },
    ],
    name: 'Stake',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'address', name: 'implementation', type: 'address' }],
    name: 'Upgraded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'depositId', type: 'uint256' },
      { indexed: false, internalType: 'uint96', name: 'amount', type: 'uint96' },
    ],
    name: 'Withdraw',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'address', name: 'stakeToken', type: 'address' },
      { internalType: 'address', name: 'rewardToken', type: 'address' },
      { internalType: 'uint256', name: 'rewardDuration', type: 'uint256' },
    ],
    name: '__RewardsDistribution_init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'depositId', type: 'uint256' },
      { internalType: 'address', name: 'newBeneficiary', type: 'address' },
    ],
    name: 'changeBeneficiary',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'beneficiary', type: 'address' },
      { internalType: 'address', name: 'recipient', type: 'address' },
    ],
    name: 'claimReward',
    outputs: [{ internalType: 'uint256', name: 'reward', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'beneficiary', type: 'address' }],
    name: 'currentReward',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'currentRewardPerTokenAccumulated',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'operator', type: 'address' }],
    name: 'currentSpaceDelegationReward',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'depositId', type: 'uint256' }],
    name: 'delegationProxyById',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'depositId', type: 'uint256' }],
    name: 'depositById',
    outputs: [
      {
        components: [
          { internalType: 'uint96', name: 'amount', type: 'uint96' },
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'uint96', name: 'commissionEarningPower', type: 'uint96' },
          { internalType: 'address', name: 'delegatee', type: 'address' },
          { internalType: 'uint96', name: 'pendingWithdrawal', type: 'uint96' },
          { internalType: 'address', name: 'beneficiary', type: 'address' },
        ],
        internalType: 'struct StakingRewards.Deposit',
        name: 'deposit',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'depositor', type: 'address' }],
    name: 'getDepositsByDepositor',
    outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getPeriodRewardAmount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'implementation',
    outputs: [{ internalType: 'address', name: 'result', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'depositId', type: 'uint256' },
      { internalType: 'uint96', name: 'amount', type: 'uint96' },
    ],
    name: 'increaseStake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'depositId', type: 'uint256' }],
    name: 'initiateWithdraw',
    outputs: [{ internalType: 'uint96', name: 'amount', type: 'uint96' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'notifier', type: 'address' }],
    name: 'isRewardNotifier',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastTimeRewardDistributed',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'reward', type: 'uint256' }],
    name: 'notifyRewardAmount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint96', name: 'amount', type: 'uint96' },
      { internalType: 'address', name: 'delegatee', type: 'address' },
      { internalType: 'address', name: 'beneficiary', type: 'address' },
      { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      { internalType: 'uint8', name: 'v', type: 'uint8' },
      { internalType: 'bytes32', name: 'r', type: 'bytes32' },
      { internalType: 'bytes32', name: 's', type: 'bytes32' },
    ],
    name: 'permitAndStake',
    outputs: [{ internalType: 'uint256', name: 'depositId', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'depositId', type: 'uint256' },
      { internalType: 'address', name: 'delegatee', type: 'address' },
    ],
    name: 'redelegate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
    name: 'setPeriodRewardAmount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'notifier', type: 'address' },
      { internalType: 'bool', name: 'enabled', type: 'bool' },
    ],
    name: 'setRewardNotifier',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint96', name: 'amount', type: 'uint96' },
      { internalType: 'address', name: 'delegatee', type: 'address' },
      { internalType: 'address', name: 'beneficiary', type: 'address' },
    ],
    name: 'stake',
    outputs: [{ internalType: 'uint256', name: 'depositId', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint96', name: 'amount', type: 'uint96' },
      { internalType: 'address', name: 'delegatee', type: 'address' },
      { internalType: 'address', name: 'beneficiary', type: 'address' },
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      { internalType: 'bytes', name: 'signature', type: 'bytes' },
    ],
    name: 'stakeOnBehalf',
    outputs: [{ internalType: 'uint256', name: 'depositId', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'depositor', type: 'address' }],
    name: 'stakedByDepositor',
    outputs: [{ internalType: 'uint96', name: 'amount', type: 'uint96' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stakingState',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'riverToken', type: 'address' },
          { internalType: 'uint96', name: 'totalStaked', type: 'uint96' },
          { internalType: 'uint256', name: 'rewardDuration', type: 'uint256' },
          { internalType: 'uint256', name: 'rewardEndTime', type: 'uint256' },
          { internalType: 'uint256', name: 'lastUpdateTime', type: 'uint256' },
          { internalType: 'uint256', name: 'rewardRate', type: 'uint256' },
          { internalType: 'uint256', name: 'rewardPerTokenAccumulated', type: 'uint256' },
          { internalType: 'uint256', name: 'nextDepositId', type: 'uint256' },
        ],
        internalType: 'struct IRewardsDistributionBase.StakingState',
        name: 'state',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'beneficiary', type: 'address' }],
    name: 'treasureByBeneficiary',
    outputs: [
      {
        components: [
          { internalType: 'uint96', name: 'earningPower', type: 'uint96' },
          { internalType: 'uint256', name: 'rewardPerTokenAccumulated', type: 'uint256' },
          { internalType: 'uint256', name: 'unclaimedRewardSnapshot', type: 'uint256' },
        ],
        internalType: 'struct StakingRewards.Treasure',
        name: 'treasure',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newImplementation', type: 'address' }],
    name: 'upgradeDelegationProxy',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'depositId', type: 'uint256' }],
    name: 'withdraw',
    outputs: [{ internalType: 'uint96', name: 'amount', type: 'uint96' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const

// https://sepolia.basescan.org/address/0x4c16c148a9E2e33149e8394fE2A99495500d4923#code
const mainnetDelegationAbi = [
  {
    inputs: [
      { internalType: 'address', name: 'delegator', type: 'address' },
      { internalType: 'address', name: 'operator', type: 'address' },
    ],
    name: 'DelegationAlreadySet',
    type: 'error',
  },
  { inputs: [], name: 'DelegationNotSet', type: 'error' },
  { inputs: [], name: 'Initializable_InInitializingState', type: 'error' },
  { inputs: [], name: 'Initializable_NotInInitializingState', type: 'error' },
  { inputs: [], name: 'Introspection_AlreadySupported', type: 'error' },
  { inputs: [], name: 'Introspection_NotSupported', type: 'error' },
  {
    inputs: [{ internalType: 'address', name: 'claimer', type: 'address' }],
    name: 'InvalidClaimer',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'delegator', type: 'address' }],
    name: 'InvalidDelegator',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'operator', type: 'address' }],
    name: 'InvalidOperator',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
    name: 'InvalidOwner',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'quantity', type: 'uint256' }],
    name: 'InvalidQuantity',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'Ownable__NotOwner',
    type: 'error',
  },
  { inputs: [], name: 'Ownable__ZeroAddress', type: 'error' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'delegator', type: 'address' },
      { indexed: true, internalType: 'address', name: 'claimer', type: 'address' },
    ],
    name: 'ClaimerSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'address', name: 'delegator', type: 'address' }],
    name: 'DelegationRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'delegator', type: 'address' },
      { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'quantity', type: 'uint256' },
    ],
    name: 'DelegationSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint32', name: 'version', type: 'uint32' }],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'InterfaceAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'InterfaceRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [{ internalType: 'address', name: 'messenger', type: 'address' }],
    name: '__MainnetDelegation_init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
    name: 'getAuthorizedClaimer',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'operator', type: 'address' }],
    name: 'getDelegatedStakeByOperator',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'delegator', type: 'address' }],
    name: 'getDelegationByDelegator',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'operator', type: 'address' },
          { internalType: 'uint256', name: 'quantity', type: 'uint256' },
          { internalType: 'address', name: 'delegator', type: 'address' },
          { internalType: 'uint256', name: 'delegationTime', type: 'uint256' },
        ],
        internalType: 'struct IMainnetDelegationBase.Delegation',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'delegator', type: 'address' }],
    name: 'getDepositIdByDelegator',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'operator', type: 'address' }],
    name: 'getMainnetDelegationsByOperator',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'operator', type: 'address' },
          { internalType: 'uint256', name: 'quantity', type: 'uint256' },
          { internalType: 'address', name: 'delegator', type: 'address' },
          { internalType: 'uint256', name: 'delegationTime', type: 'uint256' },
        ],
        internalType: 'struct IMainnetDelegationBase.Delegation[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getMessenger',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getProxyDelegation',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address[]', name: 'delegators', type: 'address[]' }],
    name: 'removeDelegations',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'claimer', type: 'address' },
    ],
    name: 'setAuthorizedClaimer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address[]', name: 'delegators', type: 'address[]' },
      { internalType: 'address[]', name: 'claimers', type: 'address[]' },
    ],
    name: 'setBatchAuthorizedClaimers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address[]', name: 'delegators', type: 'address[]' },
      { internalType: 'address[]', name: 'delegates', type: 'address[]' },
      { internalType: 'address[]', name: 'claimers', type: 'address[]' },
      { internalType: 'uint256[]', name: 'quantities', type: 'uint256[]' },
    ],
    name: 'setBatchDelegation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'delegator', type: 'address' },
      { internalType: 'address', name: 'operator', type: 'address' },
      { internalType: 'uint256', name: 'quantity', type: 'uint256' },
    ],
    name: 'setDelegation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'proxyDelegation', type: 'address' }],
    name: 'setProxyDelegation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const

const riverTokenAbi = [
  {
    inputs: [
      { internalType: 'address', name: '_bridge', type: 'address' },
      { internalType: 'address', name: '_remoteToken', type: 'address' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  { inputs: [], name: 'CheckpointUnorderedInsertion', type: 'error' },
  { inputs: [], name: 'ECDSAInvalidSignature', type: 'error' },
  {
    inputs: [{ internalType: 'uint256', name: 'length', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'bytes32', name: 's', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
    type: 'error',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'increasedSupply', type: 'uint256' },
      { internalType: 'uint256', name: 'cap', type: 'uint256' },
    ],
    name: 'ERC20ExceededSafeSupply',
    type: 'error',
  },
  {
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'allowance', type: 'uint256' },
      { internalType: 'uint256', name: 'needed', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
    type: 'error',
  },
  {
    inputs: [
      { internalType: 'address', name: 'sender', type: 'address' },
      { internalType: 'uint256', name: 'balance', type: 'uint256' },
      { internalType: 'uint256', name: 'needed', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'approver', type: 'address' }],
    name: 'ERC20InvalidApprover',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'receiver', type: 'address' }],
    name: 'ERC20InvalidReceiver',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'sender', type: 'address' }],
    name: 'ERC20InvalidSender',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'spender', type: 'address' }],
    name: 'ERC20InvalidSpender',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'deadline', type: 'uint256' }],
    name: 'ERC2612ExpiredSignature',
    type: 'error',
  },
  {
    inputs: [
      { internalType: 'address', name: 'signer', type: 'address' },
      { internalType: 'address', name: 'owner', type: 'address' },
    ],
    name: 'ERC2612InvalidSigner',
    type: 'error',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'timepoint', type: 'uint256' },
      { internalType: 'uint48', name: 'clock', type: 'uint48' },
    ],
    name: 'ERC5805FutureLookup',
    type: 'error',
  },
  { inputs: [], name: 'ERC6372InconsistentClock', type: 'error' },
  { inputs: [], name: 'Initializable_InInitializingState', type: 'error' },
  { inputs: [], name: 'Initializable_NotInInitializingState', type: 'error' },
  { inputs: [], name: 'Introspection_AlreadySupported', type: 'error' },
  { inputs: [], name: 'Introspection_NotSupported', type: 'error' },
  {
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'uint256', name: 'currentNonce', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
    type: 'error',
  },
  { inputs: [], name: 'InvalidShortString', type: 'error' },
  { inputs: [], name: 'LockNotAuthorized', type: 'error' },
  {
    inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
    name: 'OwnableInvalidOwner',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
    type: 'error',
  },
  { inputs: [], name: 'River__DelegateeSameAsCurrent', type: 'error' },
  { inputs: [], name: 'River__TransferLockEnabled', type: 'error' },
  {
    inputs: [
      { internalType: 'uint8', name: 'bits', type: 'uint8' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'string', name: 'str', type: 'string' }],
    name: 'StringTooLong',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'expiry', type: 'uint256' }],
    name: 'VotesExpiredSignature',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'spender', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'delegator', type: 'address' },
      { indexed: true, internalType: 'address', name: 'fromDelegate', type: 'address' },
      { indexed: true, internalType: 'address', name: 'toDelegate', type: 'address' },
    ],
    name: 'DelegateChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'delegate', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'previousVotes', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'newVotes', type: 'uint256' },
    ],
    name: 'DelegateVotesChanged',
    type: 'event',
  },
  { anonymous: false, inputs: [], name: 'EIP712DomainChanged', type: 'event' },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint32', name: 'version', type: 'uint32' }],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'InterfaceAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'InterfaceRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'caller', type: 'address' },
      { indexed: true, internalType: 'bool', name: 'enabled', type: 'bool' },
      { indexed: false, internalType: 'uint256', name: 'cooldown', type: 'uint256' },
    ],
    name: 'LockUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint256', name: 'threshold', type: 'uint256' }],
    name: 'TokenThresholdSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
  },
  // {
  //   inputs: [],
  //   name: 'BRIDGE',
  //   outputs: [{ internalType: 'address', name: '', type: 'address' }],
  //   stateMutability: 'view',
  //   type: 'function',
  // },
  {
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  // {
  //   inputs: [],
  //   name: 'REMOTE_TOKEN',
  //   outputs: [{ internalType: 'address', name: '', type: 'address' }],
  //   stateMutability: 'view',
  //   type: 'function',
  // },
  {
    inputs: [],
    name: '__Introspection_init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'cooldown', type: 'uint256' }],
    name: '__LockFacet_init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bridge',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'uint32', name: 'pos', type: 'uint32' },
    ],
    name: 'checkpoints',
    outputs: [
      {
        components: [
          { internalType: 'uint48', name: '_key', type: 'uint48' },
          { internalType: 'uint208', name: '_value', type: 'uint208' },
        ],
        internalType: 'struct Checkpoints.Checkpoint208',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'clock',
    outputs: [{ internalType: 'uint48', name: '', type: 'uint48' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'delegatee', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'delegatee', type: 'address' },
      { internalType: 'uint256', name: 'nonce', type: 'uint256' },
      { internalType: 'uint256', name: 'expiry', type: 'uint256' },
      { internalType: 'uint8', name: 'v', type: 'uint8' },
      { internalType: 'bytes32', name: 'r', type: 'bytes32' },
      { internalType: 'bytes32', name: 's', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'delegates',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'disableLock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { internalType: 'bytes1', name: 'fields', type: 'bytes1' },
      { internalType: 'string', name: 'name', type: 'string' },
      { internalType: 'string', name: 'version', type: 'string' },
      { internalType: 'uint256', name: 'chainId', type: 'uint256' },
      { internalType: 'address', name: 'verifyingContract', type: 'address' },
      { internalType: 'bytes32', name: 'salt', type: 'bytes32' },
      { internalType: 'uint256[]', name: 'extensions', type: 'uint256[]' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'enableLock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'getDelegationTimeForDelegator',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getDelegators',
    outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'getDelegatorsByDelegatee',
    outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'timepoint', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'uint256', name: 'timepoint', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'getVotes',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'isLockEnabled',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l1Token',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2Bridge',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'lockCooldown',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
    name: 'nonces',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'numCheckpoints',
    outputs: [{ internalType: 'uint32', name: '', type: 'uint32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
      { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      { internalType: 'uint8', name: 'v', type: 'uint8' },
      { internalType: 'bytes32', name: 'r', type: 'bytes32' },
      { internalType: 'bytes32', name: 's', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'remoteToken',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'cooldown', type: 'uint256' }],
    name: 'setLockCooldown',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'version',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const

const nodeOperatorAbi = [
  { inputs: [], name: 'ApprovalCallerNotOwnerNorApproved', type: 'error' },
  { inputs: [], name: 'ApprovalQueryForNonexistentToken', type: 'error' },
  { inputs: [], name: 'BalanceQueryForZeroAddress', type: 'error' },
  { inputs: [], name: 'Initializable_InInitializingState', type: 'error' },
  { inputs: [], name: 'Initializable_NotInInitializingState', type: 'error' },
  { inputs: [], name: 'Introspection_AlreadySupported', type: 'error' },
  { inputs: [], name: 'Introspection_NotSupported', type: 'error' },
  { inputs: [], name: 'MintERC2309QuantityExceedsLimit', type: 'error' },
  { inputs: [], name: 'MintToZeroAddress', type: 'error' },
  { inputs: [], name: 'MintZeroQuantity', type: 'error' },
  {
    inputs: [{ internalType: 'address', name: 'operator', type: 'address' }],
    name: 'NodeOperator__AlreadyDelegated',
    type: 'error',
  },
  { inputs: [], name: 'NodeOperator__AlreadyRegistered', type: 'error' },
  { inputs: [], name: 'NodeOperator__ClaimAddressNotChanged', type: 'error' },
  { inputs: [], name: 'NodeOperator__InvalidAddress', type: 'error' },
  { inputs: [], name: 'NodeOperator__InvalidCommissionRate', type: 'error' },
  { inputs: [], name: 'NodeOperator__InvalidOperator', type: 'error' },
  { inputs: [], name: 'NodeOperator__InvalidSpace', type: 'error' },
  { inputs: [], name: 'NodeOperator__InvalidStakeRequirement', type: 'error' },
  { inputs: [], name: 'NodeOperator__InvalidStatusTransition', type: 'error' },
  { inputs: [], name: 'NodeOperator__NotClaimer', type: 'error' },
  { inputs: [], name: 'NodeOperator__NotEnoughStake', type: 'error' },
  { inputs: [], name: 'NodeOperator__NotRegistered', type: 'error' },
  { inputs: [], name: 'NodeOperator__NotTransferable', type: 'error' },
  { inputs: [], name: 'NodeOperator__StatusNotChanged', type: 'error' },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'Ownable__NotOwner',
    type: 'error',
  },
  { inputs: [], name: 'Ownable__ZeroAddress', type: 'error' },
  { inputs: [], name: 'OwnerQueryForNonexistentToken', type: 'error' },
  { inputs: [], name: 'OwnershipNotInitializedForExtraData', type: 'error' },
  { inputs: [], name: 'TransferCallerNotOwnerNorApproved', type: 'error' },
  { inputs: [], name: 'TransferFromIncorrectOwner', type: 'error' },
  { inputs: [], name: 'TransferToNonERC721ReceiverImplementer', type: 'error' },
  { inputs: [], name: 'TransferToZeroAddress', type: 'error' },
  { inputs: [], name: 'URIQueryForNonexistentToken', type: 'error' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'approved', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
      { indexed: false, internalType: 'bool', name: 'approved', type: 'bool' },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'fromTokenId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'toTokenId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
    ],
    name: 'ConsecutiveTransfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint32', name: 'version', type: 'uint32' }],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'InterfaceAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'InterfaceRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
      { indexed: true, internalType: 'address', name: 'claimAddress', type: 'address' },
    ],
    name: 'OperatorClaimAddressChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'commission', type: 'uint256' },
    ],
    name: 'OperatorCommissionChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'address', name: 'operator', type: 'address' }],
    name: 'OperatorRegistered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
      { indexed: true, internalType: 'enum NodeOperatorStatus', name: 'newStatus', type: 'uint8' },
    ],
    name: 'OperatorStatusChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: '__NodeOperator_init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'operator', type: 'address' }],
    name: 'getClaimAddressForOperator',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'operator', type: 'address' }],
    name: 'getCommissionRate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'operator', type: 'address' }],
    name: 'getOperatorStatus',
    outputs: [{ internalType: 'enum NodeOperatorStatus', name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getOperators',
    outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'operator', type: 'address' }],
    name: 'isOperator',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'claimer', type: 'address' }],
    name: 'registerOperator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'claimer', type: 'address' },
      { internalType: 'address', name: 'operator', type: 'address' },
    ],
    name: 'setClaimAddressForOperator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'rateBps', type: 'uint256' }],
    name: 'setCommissionRate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'operator', type: 'address' },
      { internalType: 'enum NodeOperatorStatus', name: 'newStatus', type: 'uint8' },
    ],
    name: 'setOperatorStatus',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const

export const riverRegistryAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: 'approvedOperators',
        type: 'address[]',
        internalType: 'address[]',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: '__OperatorRegistry_init',
    inputs: [
      {
        name: 'initialOperators',
        type: 'address[]',
        internalType: 'address[]',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: '__RiverConfig_init',
    inputs: [
      {
        name: 'configManagers',
        type: 'address[]',
        internalType: 'address[]',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'allocateStream',
    inputs: [
      {
        name: 'streamId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'nodes',
        type: 'address[]',
        internalType: 'address[]',
      },
      {
        name: 'genesisMiniblockHash',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'genesisMiniblock',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'approveConfigurationManager',
    inputs: [
      {
        name: 'manager',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'approveOperator',
    inputs: [
      {
        name: 'operator',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'configurationExists',
    inputs: [
      {
        name: 'key',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'deleteConfiguration',
    inputs: [
      {
        name: 'key',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'deleteConfigurationOnBlock',
    inputs: [
      {
        name: 'key',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'blockNumber',
        type: 'uint64',
        internalType: 'uint64',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'getAllConfiguration',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'tuple[]',
        internalType: 'struct Setting[]',
        components: [
          {
            name: 'key',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'blockNumber',
            type: 'uint64',
            internalType: 'uint64',
          },
          {
            name: 'value',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getAllNodeAddresses',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address[]',
        internalType: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getAllNodes',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'tuple[]',
        internalType: 'struct Node[]',
        components: [
          {
            name: 'status',
            type: 'uint8',
            internalType: 'enum NodeStatus',
          },
          {
            name: 'url',
            type: 'string',
            internalType: 'string',
          },
          {
            name: 'nodeAddress',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'operator',
            type: 'address',
            internalType: 'address',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getAllOperators',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address[]',
        internalType: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getAllStreamIds',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bytes32[]',
        internalType: 'bytes32[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getAllStreams',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'tuple[]',
        internalType: 'struct StreamWithId[]',
        components: [
          {
            name: 'id',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'stream',
            type: 'tuple',
            internalType: 'struct Stream',
            components: [
              {
                name: 'lastMiniblockHash',
                type: 'bytes32',
                internalType: 'bytes32',
              },
              {
                name: 'lastMiniblockNum',
                type: 'uint64',
                internalType: 'uint64',
              },
              {
                name: 'reserved0',
                type: 'uint64',
                internalType: 'uint64',
              },
              {
                name: 'flags',
                type: 'uint64',
                internalType: 'uint64',
              },
              {
                name: 'nodes',
                type: 'address[]',
                internalType: 'address[]',
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getConfiguration',
    inputs: [
      {
        name: 'key',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple[]',
        internalType: 'struct Setting[]',
        components: [
          {
            name: 'key',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'blockNumber',
            type: 'uint64',
            internalType: 'uint64',
          },
          {
            name: 'value',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getNode',
    inputs: [
      {
        name: 'nodeAddress',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct Node',
        components: [
          {
            name: 'status',
            type: 'uint8',
            internalType: 'enum NodeStatus',
          },
          {
            name: 'url',
            type: 'string',
            internalType: 'string',
          },
          {
            name: 'nodeAddress',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'operator',
            type: 'address',
            internalType: 'address',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getNodeCount',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getPaginatedStreams',
    inputs: [
      {
        name: 'start',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'stop',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple[]',
        internalType: 'struct StreamWithId[]',
        components: [
          {
            name: 'id',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'stream',
            type: 'tuple',
            internalType: 'struct Stream',
            components: [
              {
                name: 'lastMiniblockHash',
                type: 'bytes32',
                internalType: 'bytes32',
              },
              {
                name: 'lastMiniblockNum',
                type: 'uint64',
                internalType: 'uint64',
              },
              {
                name: 'reserved0',
                type: 'uint64',
                internalType: 'uint64',
              },
              {
                name: 'flags',
                type: 'uint64',
                internalType: 'uint64',
              },
              {
                name: 'nodes',
                type: 'address[]',
                internalType: 'address[]',
              },
            ],
          },
        ],
      },
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getStream',
    inputs: [
      {
        name: 'streamId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct Stream',
        components: [
          {
            name: 'lastMiniblockHash',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'lastMiniblockNum',
            type: 'uint64',
            internalType: 'uint64',
          },
          {
            name: 'reserved0',
            type: 'uint64',
            internalType: 'uint64',
          },
          {
            name: 'flags',
            type: 'uint64',
            internalType: 'uint64',
          },
          {
            name: 'nodes',
            type: 'address[]',
            internalType: 'address[]',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getStreamByIndex',
    inputs: [
      {
        name: 'i',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct StreamWithId',
        components: [
          {
            name: 'id',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'stream',
            type: 'tuple',
            internalType: 'struct Stream',
            components: [
              {
                name: 'lastMiniblockHash',
                type: 'bytes32',
                internalType: 'bytes32',
              },
              {
                name: 'lastMiniblockNum',
                type: 'uint64',
                internalType: 'uint64',
              },
              {
                name: 'reserved0',
                type: 'uint64',
                internalType: 'uint64',
              },
              {
                name: 'flags',
                type: 'uint64',
                internalType: 'uint64',
              },
              {
                name: 'nodes',
                type: 'address[]',
                internalType: 'address[]',
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getStreamCount',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getStreamCountOnNode',
    inputs: [
      {
        name: 'nodeAddress',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getStreamWithGenesis',
    inputs: [
      {
        name: 'streamId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct Stream',
        components: [
          {
            name: 'lastMiniblockHash',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'lastMiniblockNum',
            type: 'uint64',
            internalType: 'uint64',
          },
          {
            name: 'reserved0',
            type: 'uint64',
            internalType: 'uint64',
          },
          {
            name: 'flags',
            type: 'uint64',
            internalType: 'uint64',
          },
          {
            name: 'nodes',
            type: 'address[]',
            internalType: 'address[]',
          },
        ],
      },
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: '',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getStreams',
    inputs: [
      {
        name: 'streamIds',
        type: 'bytes32[]',
        internalType: 'bytes32[]',
      },
    ],
    outputs: [
      {
        name: 'foundCount',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '',
        type: 'tuple[]',
        internalType: 'struct StreamWithId[]',
        components: [
          {
            name: 'id',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'stream',
            type: 'tuple',
            internalType: 'struct Stream',
            components: [
              {
                name: 'lastMiniblockHash',
                type: 'bytes32',
                internalType: 'bytes32',
              },
              {
                name: 'lastMiniblockNum',
                type: 'uint64',
                internalType: 'uint64',
              },
              {
                name: 'reserved0',
                type: 'uint64',
                internalType: 'uint64',
              },
              {
                name: 'flags',
                type: 'uint64',
                internalType: 'uint64',
              },
              {
                name: 'nodes',
                type: 'address[]',
                internalType: 'address[]',
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getStreamsOnNode',
    inputs: [
      {
        name: 'nodeAddress',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple[]',
        internalType: 'struct StreamWithId[]',
        components: [
          {
            name: 'id',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'stream',
            type: 'tuple',
            internalType: 'struct Stream',
            components: [
              {
                name: 'lastMiniblockHash',
                type: 'bytes32',
                internalType: 'bytes32',
              },
              {
                name: 'lastMiniblockNum',
                type: 'uint64',
                internalType: 'uint64',
              },
              {
                name: 'reserved0',
                type: 'uint64',
                internalType: 'uint64',
              },
              {
                name: 'flags',
                type: 'uint64',
                internalType: 'uint64',
              },
              {
                name: 'nodes',
                type: 'address[]',
                internalType: 'address[]',
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'isConfigurationManager',
    inputs: [
      {
        name: 'manager',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'isOperator',
    inputs: [
      {
        name: 'operator',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'placeStreamOnNode',
    inputs: [
      {
        name: 'streamId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'nodeAddress',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'registerNode',
    inputs: [
      {
        name: 'nodeAddress',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'url',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'status',
        type: 'uint8',
        internalType: 'enum NodeStatus',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'removeConfigurationManager',
    inputs: [
      {
        name: 'manager',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'removeNode',
    inputs: [
      {
        name: 'nodeAddress',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'removeOperator',
    inputs: [
      {
        name: 'operator',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'removeStreamFromNode',
    inputs: [
      {
        name: 'streamId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'nodeAddress',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setConfiguration',
    inputs: [
      {
        name: 'key',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'blockNumber',
        type: 'uint64',
        internalType: 'uint64',
      },
      {
        name: 'value',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setStreamLastMiniblock',
    inputs: [
      {
        name: 'streamId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'prevMiniBlockHash',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'lastMiniblockHash',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'lastMiniblockNum',
        type: 'uint64',
        internalType: 'uint64',
      },
      {
        name: 'isSealed',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setStreamLastMiniblockBatch',
    inputs: [
      {
        name: 'miniblocks',
        type: 'tuple[]',
        internalType: 'struct SetMiniblock[]',
        components: [
          {
            name: 'streamId',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'prevMiniBlockHash',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'lastMiniblockHash',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'lastMiniblockNum',
            type: 'uint64',
            internalType: 'uint64',
          },
          {
            name: 'isSealed',
            type: 'bool',
            internalType: 'bool',
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'updateNodeStatus',
    inputs: [
      {
        name: 'nodeAddress',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'status',
        type: 'uint8',
        internalType: 'enum NodeStatus',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'updateNodeUrl',
    inputs: [
      {
        name: 'nodeAddress',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'url',
        type: 'string',
        internalType: 'string',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'ConfigurationChanged',
    inputs: [
      {
        name: 'key',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32',
      },
      {
        name: 'block',
        type: 'uint64',
        indexed: false,
        internalType: 'uint64',
      },
      {
        name: 'value',
        type: 'bytes',
        indexed: false,
        internalType: 'bytes',
      },
      {
        name: 'deleted',
        type: 'bool',
        indexed: false,
        internalType: 'bool',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ConfigurationManagerAdded',
    inputs: [
      {
        name: 'manager',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ConfigurationManagerRemoved',
    inputs: [
      {
        name: 'manager',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Initialized',
    inputs: [
      {
        name: 'version',
        type: 'uint32',
        indexed: false,
        internalType: 'uint32',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'InterfaceAdded',
    inputs: [
      {
        name: 'interfaceId',
        type: 'bytes4',
        indexed: true,
        internalType: 'bytes4',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'InterfaceRemoved',
    inputs: [
      {
        name: 'interfaceId',
        type: 'bytes4',
        indexed: true,
        internalType: 'bytes4',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'NodeAdded',
    inputs: [
      {
        name: 'nodeAddress',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'operator',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'url',
        type: 'string',
        indexed: false,
        internalType: 'string',
      },
      {
        name: 'status',
        type: 'uint8',
        indexed: false,
        internalType: 'enum NodeStatus',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'NodeRemoved',
    inputs: [
      {
        name: 'nodeAddress',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'NodeStatusUpdated',
    inputs: [
      {
        name: 'nodeAddress',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'status',
        type: 'uint8',
        indexed: false,
        internalType: 'enum NodeStatus',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'NodeUrlUpdated',
    inputs: [
      {
        name: 'nodeAddress',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'url',
        type: 'string',
        indexed: false,
        internalType: 'string',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'OperatorAdded',
    inputs: [
      {
        name: 'operatorAddress',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'OperatorRemoved',
    inputs: [
      {
        name: 'operatorAddress',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'OwnershipTransferred',
    inputs: [
      {
        name: 'previousOwner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'newOwner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'StreamAllocated',
    inputs: [
      {
        name: 'streamId',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32',
      },
      {
        name: 'nodes',
        type: 'address[]',
        indexed: false,
        internalType: 'address[]',
      },
      {
        name: 'genesisMiniblockHash',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32',
      },
      {
        name: 'genesisMiniblock',
        type: 'bytes',
        indexed: false,
        internalType: 'bytes',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'StreamLastMiniblockUpdateFailed',
    inputs: [
      {
        name: 'streamId',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32',
      },
      {
        name: 'lastMiniblockHash',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32',
      },
      {
        name: 'lastMiniblockNum',
        type: 'uint64',
        indexed: false,
        internalType: 'uint64',
      },
      {
        name: 'reason',
        type: 'string',
        indexed: false,
        internalType: 'string',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'StreamLastMiniblockUpdated',
    inputs: [
      {
        name: 'streamId',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32',
      },
      {
        name: 'lastMiniblockHash',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32',
      },
      {
        name: 'lastMiniblockNum',
        type: 'uint64',
        indexed: false,
        internalType: 'uint64',
      },
      {
        name: 'isSealed',
        type: 'bool',
        indexed: false,
        internalType: 'bool',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'StreamPlacementUpdated',
    inputs: [
      {
        name: 'streamId',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32',
      },
      {
        name: 'nodeAddress',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
      {
        name: 'isAdded',
        type: 'bool',
        indexed: false,
        internalType: 'bool',
      },
    ],
    anonymous: false,
  },
  {
    type: 'error',
    name: 'Initializable_InInitializingState',
    inputs: [],
  },
  {
    type: 'error',
    name: 'Initializable_NotInInitializingState',
    inputs: [],
  },
  {
    type: 'error',
    name: 'Introspection_AlreadySupported',
    inputs: [],
  },
  {
    type: 'error',
    name: 'Introspection_NotSupported',
    inputs: [],
  },
  {
    type: 'error',
    name: 'Ownable__NotOwner',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'error',
    name: 'Ownable__ZeroAddress',
    inputs: [],
  },
] as const

const baseRiverTokenAddress = '0x91930fd11ABAa5241241d3B07c02A8d0B5ac1920' satisfies Address
const baseGammaSepoliaTokenAddress = '0x24e3123E1b30E041E2df26Da9d6140c5B07Fe4F0' satisfies Address

export default defineConfig({
  out: 'src/contracts.ts',
  contracts: [
    {
      name: 'RiverToken',
      address: {
        [base.id]: baseRiverTokenAddress,
        [baseSepolia.id]: baseGammaSepoliaTokenAddress,
      },
      abi: riverTokenAbi,
    },
    {
      name: 'RewardsDistribution',
      address: {
        [base.id]: omega.address as Address,
        [baseSepolia.id]: gamma.address as Address,
      },
      abi: rewardDistributionAbi,
    },
    {
      name: 'NodeOperator',
      address: {
        [base.id]: omega.address as Address,
        [baseSepolia.id]: gamma.address as Address,
      },
      abi: nodeOperatorAbi,
    },
    {
      name: 'RiverRegistry',
      address: {
        [river.id]: '0x1298c03Fde548dc433a452573E36A713b38A0404',
        [riverGamma.id]: '0xf18E98D36A6bd1aDb52F776aCc191E69B491c070',
      },
      abi: riverRegistryAbi,
    },
  ],
  plugins: [
    etherscan({
      apiKey: env.ETHERSCAN_API_KEY,
      chainId: mainnet.id,
      contracts: [
        {
          name: 'Authorizer',
          address: {
            [mainnet.id]: '0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05',
            [sepolia.id]: '0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B',
          },
        },
      ],
    }),
    react(),
  ],
})
