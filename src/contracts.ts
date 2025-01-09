import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BaseRiverToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const baseRiverTokenAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_bridge', internalType: 'address', type: 'address' },
      { name: '_remoteToken', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'CheckpointUnorderedInsertion' },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'increasedSupply', internalType: 'uint256', type: 'uint256' },
      { name: 'cap', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20ExceededSafeSupply',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC2612ExpiredSignature',
  },
  {
    type: 'error',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC2612InvalidSigner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'clock', internalType: 'uint48', type: 'uint48' },
    ],
    name: 'ERC5805FutureLookup',
  },
  { type: 'error', inputs: [], name: 'ERC6372InconsistentClock' },
  { type: 'error', inputs: [], name: 'Introspection_AlreadySupported' },
  { type: 'error', inputs: [], name: 'Introspection_NotSupported' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'LockAlreadyDisabled' },
  { type: 'error', inputs: [], name: 'LockAlreadyEnabled' },
  { type: 'error', inputs: [], name: 'LockNotAuthorized' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'River__DelegateeSameAsCurrent' },
  { type: 'error', inputs: [], name: 'River__InvalidTokenAmount' },
  { type: 'error', inputs: [], name: 'River__TransferLockEnabled' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'interfaceId',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: true,
      },
    ],
    name: 'InterfaceAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'interfaceId',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: true,
      },
    ],
    name: 'InterfaceRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'caller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'enabled', internalType: 'bool', type: 'bool', indexed: true },
      {
        name: 'cooldown',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LockUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'threshold',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokenThresholdSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MIN_TOKEN_THRESHOLD',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'REMOTE_TOKEN',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'bridge',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'pos', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'checkpoints',
    outputs: [
      {
        name: '',
        internalType: 'struct Checkpoints.Checkpoint208',
        type: 'tuple',
        components: [
          { name: '_key', internalType: 'uint48', type: 'uint48' },
          { name: '_value', internalType: 'uint208', type: 'uint208' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'disableLock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'enableLock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getDelegationTimeForDelegator',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getDelegators',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getDelegatorsByDelegatee',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isLockEnabled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'l1Token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'l2Bridge',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'lockCooldown',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'numCheckpoints',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'cooldown', internalType: 'uint256', type: 'uint256' }],
    name: 'setLockCooldown',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'threshold', internalType: 'uint256', type: 'uint256' }],
    name: 'setTokenThreshold',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
] as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const baseRiverTokenAddress = {
  8453: '0x9172852305F32819469bf38A3772f29361d7b768',
  84532: '0x49442708a16Bf7917764F14A2D103f40Eb27BdD8',
} as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const baseRiverTokenConfig = {
  address: baseRiverTokenAddress,
  abi: baseRiverTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RiverAuthorizer
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const riverAuthorizerAbi = [
  {
    type: 'error',
    inputs: [],
    name: 'AuthorizedClaimers_ClaimerAlreadyAuthorized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'authorizer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'claimer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AuthorizedClaimerChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'authorizer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AuthorizedClaimerRemoved',
  },
  {
    type: 'function',
    inputs: [{ name: 'claimer', internalType: 'address', type: 'address' }],
    name: 'authorizeClaimer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'authorizer', internalType: 'address', type: 'address' }],
    name: 'getAuthorizedClaimer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'removeAuthorizedClaimer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const riverAuthorizerAddress = {
  1: '0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05',
  11155111: '0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const riverAuthorizerConfig = {
  address: riverAuthorizerAddress,
  abi: riverAuthorizerAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RiverClaimer
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const riverClaimerAbi = [
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'ApprovalCallerNotOwnerNorApproved' },
  { type: 'error', inputs: [], name: 'ApprovalQueryForNonexistentToken' },
  { type: 'error', inputs: [], name: 'BalanceQueryForZeroAddress' },
  {
    type: 'error',
    inputs: [
      { name: 'delegator', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'DelegationAlreadySet',
  },
  { type: 'error', inputs: [], name: 'DelegationNotSet' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'Initializable_InInitializingState' },
  { type: 'error', inputs: [], name: 'Initializable_NotInInitializingState' },
  { type: 'error', inputs: [], name: 'Introspection_AlreadySupported' },
  { type: 'error', inputs: [], name: 'Introspection_NotSupported' },
  {
    type: 'error',
    inputs: [{ name: 'claimer', internalType: 'address', type: 'address' }],
    name: 'InvalidClaimer',
  },
  {
    type: 'error',
    inputs: [{ name: 'delegator', internalType: 'address', type: 'address' }],
    name: 'InvalidDelegator',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'quantity', internalType: 'uint256', type: 'uint256' }],
    name: 'InvalidQuantity',
  },
  { type: 'error', inputs: [], name: 'MintERC2309QuantityExceedsLimit' },
  { type: 'error', inputs: [], name: 'MintToZeroAddress' },
  { type: 'error', inputs: [], name: 'MintZeroQuantity' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'Ownable__NotOwner',
  },
  { type: 'error', inputs: [], name: 'Ownable__ZeroAddress' },
  { type: 'error', inputs: [], name: 'OwnerQueryForNonexistentToken' },
  { type: 'error', inputs: [], name: 'OwnershipNotInitializedForExtraData' },
  {
    type: 'error',
    inputs: [],
    name: 'RewardsDistribution_InsufficientRewardBalance',
  },
  { type: 'error', inputs: [], name: 'RewardsDistribution_InvalidOperator' },
  { type: 'error', inputs: [], name: 'RewardsDistribution_NoActiveOperators' },
  { type: 'error', inputs: [], name: 'RewardsDistribution_NoRewardsToClaim' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  { type: 'error', inputs: [], name: 'TransferCallerNotOwnerNorApproved' },
  { type: 'error', inputs: [], name: 'TransferFromIncorrectOwner' },
  { type: 'error', inputs: [], name: 'TransferToNonERC721ReceiverImplementer' },
  { type: 'error', inputs: [], name: 'TransferToZeroAddress' },
  { type: 'error', inputs: [], name: 'URIQueryForNonexistentToken' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'ConsecutiveTransfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegationRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'quantity',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegationSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'interfaceId',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: true,
      },
    ],
    name: 'InterfaceAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'interfaceId',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: true,
      },
    ],
    name: 'InterfaceRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RewardsDistributed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: '__RewardsDistribution_init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'delegatorClaim',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'distributeRewards',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getActiveOperators',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getActivePeriodLength',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'claimer', internalType: 'address', type: 'address' }],
    name: 'getClaimableAmountForAuthorizedClaimer',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegator', internalType: 'address', type: 'address' }],
    name: 'getClaimableAmountForDelegator',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'getClaimableAmountForOperator',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getPeriodDistributionAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'mainnetClaim',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'operatorClaim',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'setActivePeriodLength',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'setPeriodDistributionAmount',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const riverClaimerAddress = {
  8453: '0x7c0422b31401C936172C897802CF0373B35B7698',
  84532: '0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F',
} as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const riverClaimerConfig = {
  address: riverClaimerAddress,
  abi: riverClaimerAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RiverRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**

*/
export const riverRegistryAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: 'approvedOperators',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'initialOperators',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    name: '__OperatorRegistry_init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'configManagers', internalType: 'address[]', type: 'address[]' },
    ],
    name: '__RiverConfig_init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'streamId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'nodes', internalType: 'address[]', type: 'address[]' },
      {
        name: 'genesisMiniblockHash',
        internalType: 'bytes32',
        type: 'bytes32',
      },
      { name: 'genesisMiniblock', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'allocateStream',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'manager', internalType: 'address', type: 'address' }],
    name: 'approveConfigurationManager',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'approveOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'key', internalType: 'bytes32', type: 'bytes32' }],
    name: 'configurationExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'key', internalType: 'bytes32', type: 'bytes32' }],
    name: 'deleteConfiguration',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'key', internalType: 'bytes32', type: 'bytes32' },
      { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'deleteConfigurationOnBlock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllConfiguration',
    outputs: [
      {
        name: '',
        internalType: 'struct Setting[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'value', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllNodeAddresses',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllNodes',
    outputs: [
      {
        name: '',
        internalType: 'struct Node[]',
        type: 'tuple[]',
        components: [
          { name: 'status', internalType: 'enum NodeStatus', type: 'uint8' },
          { name: 'url', internalType: 'string', type: 'string' },
          { name: 'nodeAddress', internalType: 'address', type: 'address' },
          { name: 'operator', internalType: 'address', type: 'address' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllOperators',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllStreamIds',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllStreams',
    outputs: [
      {
        name: '',
        internalType: 'struct StreamWithId[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'stream',
            internalType: 'struct Stream',
            type: 'tuple',
            components: [
              {
                name: 'lastMiniblockHash',
                internalType: 'bytes32',
                type: 'bytes32',
              },
              {
                name: 'lastMiniblockNum',
                internalType: 'uint64',
                type: 'uint64',
              },
              { name: 'reserved0', internalType: 'uint64', type: 'uint64' },
              { name: 'flags', internalType: 'uint64', type: 'uint64' },
              { name: 'nodes', internalType: 'address[]', type: 'address[]' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'key', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getConfiguration',
    outputs: [
      {
        name: '',
        internalType: 'struct Setting[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'value', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'nodeAddress', internalType: 'address', type: 'address' }],
    name: 'getNode',
    outputs: [
      {
        name: '',
        internalType: 'struct Node',
        type: 'tuple',
        components: [
          { name: 'status', internalType: 'enum NodeStatus', type: 'uint8' },
          { name: 'url', internalType: 'string', type: 'string' },
          { name: 'nodeAddress', internalType: 'address', type: 'address' },
          { name: 'operator', internalType: 'address', type: 'address' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getNodeCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'start', internalType: 'uint256', type: 'uint256' },
      { name: 'stop', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPaginatedStreams',
    outputs: [
      {
        name: '',
        internalType: 'struct StreamWithId[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'stream',
            internalType: 'struct Stream',
            type: 'tuple',
            components: [
              {
                name: 'lastMiniblockHash',
                internalType: 'bytes32',
                type: 'bytes32',
              },
              {
                name: 'lastMiniblockNum',
                internalType: 'uint64',
                type: 'uint64',
              },
              { name: 'reserved0', internalType: 'uint64', type: 'uint64' },
              { name: 'flags', internalType: 'uint64', type: 'uint64' },
              { name: 'nodes', internalType: 'address[]', type: 'address[]' },
            ],
          },
        ],
      },
      { name: '', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'streamId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getStream',
    outputs: [
      {
        name: '',
        internalType: 'struct Stream',
        type: 'tuple',
        components: [
          {
            name: 'lastMiniblockHash',
            internalType: 'bytes32',
            type: 'bytes32',
          },
          { name: 'lastMiniblockNum', internalType: 'uint64', type: 'uint64' },
          { name: 'reserved0', internalType: 'uint64', type: 'uint64' },
          { name: 'flags', internalType: 'uint64', type: 'uint64' },
          { name: 'nodes', internalType: 'address[]', type: 'address[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
    name: 'getStreamByIndex',
    outputs: [
      {
        name: '',
        internalType: 'struct StreamWithId',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'stream',
            internalType: 'struct Stream',
            type: 'tuple',
            components: [
              {
                name: 'lastMiniblockHash',
                internalType: 'bytes32',
                type: 'bytes32',
              },
              {
                name: 'lastMiniblockNum',
                internalType: 'uint64',
                type: 'uint64',
              },
              { name: 'reserved0', internalType: 'uint64', type: 'uint64' },
              { name: 'flags', internalType: 'uint64', type: 'uint64' },
              { name: 'nodes', internalType: 'address[]', type: 'address[]' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getStreamCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'nodeAddress', internalType: 'address', type: 'address' }],
    name: 'getStreamCountOnNode',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'streamId', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getStreamWithGenesis',
    outputs: [
      {
        name: '',
        internalType: 'struct Stream',
        type: 'tuple',
        components: [
          {
            name: 'lastMiniblockHash',
            internalType: 'bytes32',
            type: 'bytes32',
          },
          { name: 'lastMiniblockNum', internalType: 'uint64', type: 'uint64' },
          { name: 'reserved0', internalType: 'uint64', type: 'uint64' },
          { name: 'flags', internalType: 'uint64', type: 'uint64' },
          { name: 'nodes', internalType: 'address[]', type: 'address[]' },
        ],
      },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'streamIds', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'getStreams',
    outputs: [
      { name: 'foundCount', internalType: 'uint256', type: 'uint256' },
      {
        name: '',
        internalType: 'struct StreamWithId[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'stream',
            internalType: 'struct Stream',
            type: 'tuple',
            components: [
              {
                name: 'lastMiniblockHash',
                internalType: 'bytes32',
                type: 'bytes32',
              },
              {
                name: 'lastMiniblockNum',
                internalType: 'uint64',
                type: 'uint64',
              },
              { name: 'reserved0', internalType: 'uint64', type: 'uint64' },
              { name: 'flags', internalType: 'uint64', type: 'uint64' },
              { name: 'nodes', internalType: 'address[]', type: 'address[]' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'nodeAddress', internalType: 'address', type: 'address' }],
    name: 'getStreamsOnNode',
    outputs: [
      {
        name: '',
        internalType: 'struct StreamWithId[]',
        type: 'tuple[]',
        components: [
          { name: 'id', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'stream',
            internalType: 'struct Stream',
            type: 'tuple',
            components: [
              {
                name: 'lastMiniblockHash',
                internalType: 'bytes32',
                type: 'bytes32',
              },
              {
                name: 'lastMiniblockNum',
                internalType: 'uint64',
                type: 'uint64',
              },
              { name: 'reserved0', internalType: 'uint64', type: 'uint64' },
              { name: 'flags', internalType: 'uint64', type: 'uint64' },
              { name: 'nodes', internalType: 'address[]', type: 'address[]' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'manager', internalType: 'address', type: 'address' }],
    name: 'isConfigurationManager',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'isOperator',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'streamId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'nodeAddress', internalType: 'address', type: 'address' },
    ],
    name: 'placeStreamOnNode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'nodeAddress', internalType: 'address', type: 'address' },
      { name: 'url', internalType: 'string', type: 'string' },
      { name: 'status', internalType: 'enum NodeStatus', type: 'uint8' },
    ],
    name: 'registerNode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'manager', internalType: 'address', type: 'address' }],
    name: 'removeConfigurationManager',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'nodeAddress', internalType: 'address', type: 'address' }],
    name: 'removeNode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'removeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'streamId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'nodeAddress', internalType: 'address', type: 'address' },
    ],
    name: 'removeStreamFromNode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'key', internalType: 'bytes32', type: 'bytes32' },
      { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
      { name: 'value', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setConfiguration',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'streamId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'prevMiniBlockHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'lastMiniblockHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'lastMiniblockNum', internalType: 'uint64', type: 'uint64' },
      { name: 'isSealed', internalType: 'bool', type: 'bool' },
    ],
    name: 'setStreamLastMiniblock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'miniblocks',
        internalType: 'struct SetMiniblock[]',
        type: 'tuple[]',
        components: [
          { name: 'streamId', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'prevMiniBlockHash',
            internalType: 'bytes32',
            type: 'bytes32',
          },
          {
            name: 'lastMiniblockHash',
            internalType: 'bytes32',
            type: 'bytes32',
          },
          { name: 'lastMiniblockNum', internalType: 'uint64', type: 'uint64' },
          { name: 'isSealed', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    name: 'setStreamLastMiniblockBatch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'nodeAddress', internalType: 'address', type: 'address' },
      { name: 'status', internalType: 'enum NodeStatus', type: 'uint8' },
    ],
    name: 'updateNodeStatus',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'nodeAddress', internalType: 'address', type: 'address' },
      { name: 'url', internalType: 'string', type: 'string' },
    ],
    name: 'updateNodeUrl',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'bytes32', type: 'bytes32', indexed: false },
      { name: 'block', internalType: 'uint64', type: 'uint64', indexed: false },
      { name: 'value', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'deleted', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ConfigurationChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'manager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ConfigurationManagerAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'manager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ConfigurationManagerRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'interfaceId',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: true,
      },
    ],
    name: 'InterfaceAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'interfaceId',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: true,
      },
    ],
    name: 'InterfaceRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'nodeAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'url', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'status',
        internalType: 'enum NodeStatus',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'NodeAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'nodeAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'NodeRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'nodeAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'status',
        internalType: 'enum NodeStatus',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'NodeStatusUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'nodeAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'url', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'NodeUrlUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operatorAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OperatorAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operatorAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OperatorRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'streamId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'nodes',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
      {
        name: 'genesisMiniblockHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'genesisMiniblock',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'StreamAllocated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'streamId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'lastMiniblockHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'lastMiniblockNum',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      {
        name: 'reason',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'StreamLastMiniblockUpdateFailed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'streamId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'lastMiniblockHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'lastMiniblockNum',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
      { name: 'isSealed', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'StreamLastMiniblockUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'streamId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'nodeAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'isAdded', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'StreamPlacementUpdated',
  },
  { type: 'error', inputs: [], name: 'Initializable_InInitializingState' },
  { type: 'error', inputs: [], name: 'Initializable_NotInInitializingState' },
  { type: 'error', inputs: [], name: 'Introspection_AlreadySupported' },
  { type: 'error', inputs: [], name: 'Introspection_NotSupported' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'Ownable__NotOwner',
  },
  { type: 'error', inputs: [], name: 'Ownable__ZeroAddress' },
] as const

/**

*/
export const riverRegistryAddress = {
  550: '0x1298c03Fde548dc433a452573E36A713b38A0404',
  6524490: '0xf18E98D36A6bd1aDb52F776aCc191E69B491c070',
} as const

/**

*/
export const riverRegistryConfig = {
  address: riverRegistryAddress,
  abi: riverRegistryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RiverToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const riverTokenAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: 'config',
        internalType: 'struct IRiverBase.RiverConfig',
        type: 'tuple',
        components: [
          { name: 'vault', internalType: 'address', type: 'address' },
          { name: 'owner', internalType: 'address', type: 'address' },
          {
            name: 'inflationConfig',
            internalType: 'struct IRiverBase.InflationConfig',
            type: 'tuple',
            components: [
              {
                name: 'initialInflationRate',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'finalInflationRate',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'inflationDecreaseRate',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'inflationDecreaseInterval',
                internalType: 'uint256',
                type: 'uint256',
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'CheckpointUnorderedInsertion' },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'increasedSupply', internalType: 'uint256', type: 'uint256' },
      { name: 'cap', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20ExceededSafeSupply',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC2612ExpiredSignature',
  },
  {
    type: 'error',
    inputs: [
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC2612InvalidSigner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'clock', internalType: 'uint48', type: 'uint48' },
    ],
    name: 'ERC5805FutureLookup',
  },
  { type: 'error', inputs: [], name: 'ERC6372InconsistentClock' },
  { type: 'error', inputs: [], name: 'Initializable_InInitializingState' },
  { type: 'error', inputs: [], name: 'Initializable_NotInInitializingState' },
  { type: 'error', inputs: [], name: 'Introspection_AlreadySupported' },
  { type: 'error', inputs: [], name: 'Introspection_NotSupported' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'LockAlreadyDisabled' },
  { type: 'error', inputs: [], name: 'LockAlreadyEnabled' },
  { type: 'error', inputs: [], name: 'LockNotAuthorized' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'River__CannotMint' },
  { type: 'error', inputs: [], name: 'River__CannotMintZero' },
  { type: 'error', inputs: [], name: 'River__DelegateeSameAsCurrent' },
  { type: 'error', inputs: [], name: 'River__InvalidAddress' },
  { type: 'error', inputs: [], name: 'River__InvalidDelegatee' },
  { type: 'error', inputs: [], name: 'River__InvalidInflationRate' },
  { type: 'error', inputs: [], name: 'River__MintingTooSoon' },
  { type: 'error', inputs: [], name: 'River__TransferLockEnabled' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'interfaceId',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: true,
      },
    ],
    name: 'InterfaceAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'interfaceId',
        internalType: 'bytes4',
        type: 'bytes4',
        indexed: true,
      },
    ],
    name: 'InterfaceRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'caller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'enabled', internalType: 'bool', type: 'bool', indexed: true },
      {
        name: 'cooldown',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LockUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: '__Introspection_init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'cooldown', internalType: 'uint256', type: 'uint256' }],
    name: '__LockFacet_init',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'pos', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'checkpoints',
    outputs: [
      {
        name: '',
        internalType: 'struct Checkpoints.Checkpoint208',
        type: 'tuple',
        components: [
          { name: '_key', internalType: 'uint48', type: 'uint48' },
          { name: '_value', internalType: 'uint208', type: 'uint208' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'createInflation',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'deployedAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'disableLock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'enableLock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'finalInflationRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getDelegators',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'inflationDecreaseInterval',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'inflationDecreaseRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'initialInflationRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isLockEnabled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastMintTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'lockCooldown',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'numCheckpoints',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'overrideInflation',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'overrideInflationRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'cooldown', internalType: 'uint256', type: 'uint256' }],
    name: 'setLockCooldown',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_overrideInflation', internalType: 'bool', type: 'bool' },
      {
        name: '_overrideInflationRate',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'setOverrideInflation',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const riverTokenAddress = {
  1: '0x53319181e003E7f86fB79f794649a2aB680Db244',
  11155111: '0x40eF1bb984503bb5Adef041A88a4F9180e8586f9',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const riverTokenConfig = {
  address: riverTokenAddress,
  abi: riverTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverToken = /*#__PURE__*/ createUseReadContract({
  abi: baseRiverTokenAbi,
  address: baseRiverTokenAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"CLOCK_MODE"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenClockMode =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'CLOCK_MODE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"MIN_TOKEN_THRESHOLD"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenMinTokenThreshold =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'MIN_TOKEN_THRESHOLD',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"REMOTE_TOKEN"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenRemoteToken =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'REMOTE_TOKEN',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"bridge"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenBridge = /*#__PURE__*/ createUseReadContract({
  abi: baseRiverTokenAbi,
  address: baseRiverTokenAddress,
  functionName: 'bridge',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"checkpoints"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenCheckpoints =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'checkpoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"clock"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenClock = /*#__PURE__*/ createUseReadContract({
  abi: baseRiverTokenAbi,
  address: baseRiverTokenAddress,
  functionName: 'clock',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"delegates"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenDelegates =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'delegates',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"eip712Domain"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenEip712Domain =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"getDelegationTimeForDelegator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenGetDelegationTimeForDelegator =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'getDelegationTimeForDelegator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"getDelegators"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenGetDelegators =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'getDelegators',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"getDelegatorsByDelegatee"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenGetDelegatorsByDelegatee =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'getDelegatorsByDelegatee',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"getPastTotalSupply"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenGetPastTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'getPastTotalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"getPastVotes"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenGetPastVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'getPastVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"getVotes"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenGetVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'getVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"isLockEnabled"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenIsLockEnabled =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'isLockEnabled',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"l1Token"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenL1Token = /*#__PURE__*/ createUseReadContract(
  {
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'l1Token',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"l2Bridge"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenL2Bridge =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'l2Bridge',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"lockCooldown"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenLockCooldown =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'lockCooldown',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenName = /*#__PURE__*/ createUseReadContract({
  abi: baseRiverTokenAbi,
  address: baseRiverTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"nonces"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenNonces = /*#__PURE__*/ createUseReadContract({
  abi: baseRiverTokenAbi,
  address: baseRiverTokenAddress,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"numCheckpoints"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenNumCheckpoints =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'numCheckpoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenOwner = /*#__PURE__*/ createUseReadContract({
  abi: baseRiverTokenAbi,
  address: baseRiverTokenAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: baseRiverTokenAbi,
  address: baseRiverTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"version"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useReadBaseRiverTokenVersion = /*#__PURE__*/ createUseReadContract(
  {
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'version',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link baseRiverTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWriteBaseRiverToken = /*#__PURE__*/ createUseWriteContract({
  abi: baseRiverTokenAbi,
  address: baseRiverTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWriteBaseRiverTokenApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWriteBaseRiverTokenBurn = /*#__PURE__*/ createUseWriteContract({
  abi: baseRiverTokenAbi,
  address: baseRiverTokenAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWriteBaseRiverTokenDelegate =
  /*#__PURE__*/ createUseWriteContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'delegate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWriteBaseRiverTokenDelegateBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"disableLock"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWriteBaseRiverTokenDisableLock =
  /*#__PURE__*/ createUseWriteContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'disableLock',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"enableLock"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWriteBaseRiverTokenEnableLock =
  /*#__PURE__*/ createUseWriteContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'enableLock',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWriteBaseRiverTokenMint = /*#__PURE__*/ createUseWriteContract({
  abi: baseRiverTokenAbi,
  address: baseRiverTokenAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWriteBaseRiverTokenPermit =
  /*#__PURE__*/ createUseWriteContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWriteBaseRiverTokenRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"setLockCooldown"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWriteBaseRiverTokenSetLockCooldown =
  /*#__PURE__*/ createUseWriteContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'setLockCooldown',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"setTokenThreshold"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWriteBaseRiverTokenSetTokenThreshold =
  /*#__PURE__*/ createUseWriteContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'setTokenThreshold',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWriteBaseRiverTokenTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWriteBaseRiverTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWriteBaseRiverTokenTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link baseRiverTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useSimulateBaseRiverToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useSimulateBaseRiverTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useSimulateBaseRiverTokenBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useSimulateBaseRiverTokenDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'delegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useSimulateBaseRiverTokenDelegateBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"disableLock"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useSimulateBaseRiverTokenDisableLock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'disableLock',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"enableLock"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useSimulateBaseRiverTokenEnableLock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'enableLock',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useSimulateBaseRiverTokenMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useSimulateBaseRiverTokenPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useSimulateBaseRiverTokenRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"setLockCooldown"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useSimulateBaseRiverTokenSetLockCooldown =
  /*#__PURE__*/ createUseSimulateContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'setLockCooldown',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"setTokenThreshold"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useSimulateBaseRiverTokenSetTokenThreshold =
  /*#__PURE__*/ createUseSimulateContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'setTokenThreshold',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useSimulateBaseRiverTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useSimulateBaseRiverTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useSimulateBaseRiverTokenTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseRiverTokenAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWatchBaseRiverTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWatchBaseRiverTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `eventName` set to `"DelegateChanged"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWatchBaseRiverTokenDelegateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWatchBaseRiverTokenDelegateVotesChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWatchBaseRiverTokenEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `eventName` set to `"InterfaceAdded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWatchBaseRiverTokenInterfaceAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    eventName: 'InterfaceAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `eventName` set to `"InterfaceRemoved"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWatchBaseRiverTokenInterfaceRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    eventName: 'InterfaceRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `eventName` set to `"LockUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWatchBaseRiverTokenLockUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    eventName: 'LockUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWatchBaseRiverTokenOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `eventName` set to `"TokenThresholdSet"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWatchBaseRiverTokenTokenThresholdSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    eventName: 'TokenThresholdSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link baseRiverTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9172852305F32819469bf38A3772f29361d7b768)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x49442708a16Bf7917764F14A2D103f40Eb27BdD8)
 */
export const useWatchBaseRiverTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: baseRiverTokenAbi,
    address: baseRiverTokenAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverAuthorizerAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useReadRiverAuthorizer = /*#__PURE__*/ createUseReadContract({
  abi: riverAuthorizerAbi,
  address: riverAuthorizerAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverAuthorizerAbi}__ and `functionName` set to `"getAuthorizedClaimer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useReadRiverAuthorizerGetAuthorizedClaimer =
  /*#__PURE__*/ createUseReadContract({
    abi: riverAuthorizerAbi,
    address: riverAuthorizerAddress,
    functionName: 'getAuthorizedClaimer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverAuthorizerAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useWriteRiverAuthorizer = /*#__PURE__*/ createUseWriteContract({
  abi: riverAuthorizerAbi,
  address: riverAuthorizerAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverAuthorizerAbi}__ and `functionName` set to `"authorizeClaimer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useWriteRiverAuthorizerAuthorizeClaimer =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverAuthorizerAbi,
    address: riverAuthorizerAddress,
    functionName: 'authorizeClaimer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverAuthorizerAbi}__ and `functionName` set to `"removeAuthorizedClaimer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useWriteRiverAuthorizerRemoveAuthorizedClaimer =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverAuthorizerAbi,
    address: riverAuthorizerAddress,
    functionName: 'removeAuthorizedClaimer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverAuthorizerAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useSimulateRiverAuthorizer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverAuthorizerAbi,
    address: riverAuthorizerAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverAuthorizerAbi}__ and `functionName` set to `"authorizeClaimer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useSimulateRiverAuthorizerAuthorizeClaimer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverAuthorizerAbi,
    address: riverAuthorizerAddress,
    functionName: 'authorizeClaimer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverAuthorizerAbi}__ and `functionName` set to `"removeAuthorizedClaimer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useSimulateRiverAuthorizerRemoveAuthorizedClaimer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverAuthorizerAbi,
    address: riverAuthorizerAddress,
    functionName: 'removeAuthorizedClaimer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverAuthorizerAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useWatchRiverAuthorizerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverAuthorizerAbi,
    address: riverAuthorizerAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverAuthorizerAbi}__ and `eventName` set to `"AuthorizedClaimerChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useWatchRiverAuthorizerAuthorizedClaimerChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverAuthorizerAbi,
    address: riverAuthorizerAddress,
    eventName: 'AuthorizedClaimerChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverAuthorizerAbi}__ and `eventName` set to `"AuthorizedClaimerRemoved"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x0bEe55b52d01C4D5d4D0cfcE1d6e0baE6722db05)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x2f5E8F6Fb7EcF63d13C13B698d1e0B3EA4Ef604B)
 */
export const useWatchRiverAuthorizerAuthorizedClaimerRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverAuthorizerAbi,
    address: riverAuthorizerAddress,
    eventName: 'AuthorizedClaimerRemoved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverClaimerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadRiverClaimer = /*#__PURE__*/ createUseReadContract({
  abi: riverClaimerAbi,
  address: riverClaimerAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverClaimerAbi}__ and `functionName` set to `"getActiveOperators"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadRiverClaimerGetActiveOperators =
  /*#__PURE__*/ createUseReadContract({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    functionName: 'getActiveOperators',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverClaimerAbi}__ and `functionName` set to `"getActivePeriodLength"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadRiverClaimerGetActivePeriodLength =
  /*#__PURE__*/ createUseReadContract({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    functionName: 'getActivePeriodLength',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverClaimerAbi}__ and `functionName` set to `"getClaimableAmountForAuthorizedClaimer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadRiverClaimerGetClaimableAmountForAuthorizedClaimer =
  /*#__PURE__*/ createUseReadContract({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    functionName: 'getClaimableAmountForAuthorizedClaimer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverClaimerAbi}__ and `functionName` set to `"getClaimableAmountForDelegator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadRiverClaimerGetClaimableAmountForDelegator =
  /*#__PURE__*/ createUseReadContract({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    functionName: 'getClaimableAmountForDelegator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverClaimerAbi}__ and `functionName` set to `"getClaimableAmountForOperator"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadRiverClaimerGetClaimableAmountForOperator =
  /*#__PURE__*/ createUseReadContract({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    functionName: 'getClaimableAmountForOperator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverClaimerAbi}__ and `functionName` set to `"getPeriodDistributionAmount"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useReadRiverClaimerGetPeriodDistributionAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    functionName: 'getPeriodDistributionAmount',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverClaimerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRiverClaimer = /*#__PURE__*/ createUseWriteContract({
  abi: riverClaimerAbi,
  address: riverClaimerAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverClaimerAbi}__ and `functionName` set to `"__RewardsDistribution_init"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRiverClaimerRewardsDistributionInit =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    functionName: '__RewardsDistribution_init',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverClaimerAbi}__ and `functionName` set to `"delegatorClaim"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRiverClaimerDelegatorClaim =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    functionName: 'delegatorClaim',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverClaimerAbi}__ and `functionName` set to `"distributeRewards"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRiverClaimerDistributeRewards =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    functionName: 'distributeRewards',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverClaimerAbi}__ and `functionName` set to `"mainnetClaim"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRiverClaimerMainnetClaim =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    functionName: 'mainnetClaim',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverClaimerAbi}__ and `functionName` set to `"operatorClaim"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRiverClaimerOperatorClaim =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    functionName: 'operatorClaim',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverClaimerAbi}__ and `functionName` set to `"setActivePeriodLength"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRiverClaimerSetActivePeriodLength =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    functionName: 'setActivePeriodLength',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverClaimerAbi}__ and `functionName` set to `"setPeriodDistributionAmount"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWriteRiverClaimerSetPeriodDistributionAmount =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    functionName: 'setPeriodDistributionAmount',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverClaimerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRiverClaimer = /*#__PURE__*/ createUseSimulateContract({
  abi: riverClaimerAbi,
  address: riverClaimerAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverClaimerAbi}__ and `functionName` set to `"__RewardsDistribution_init"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRiverClaimerRewardsDistributionInit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    functionName: '__RewardsDistribution_init',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverClaimerAbi}__ and `functionName` set to `"delegatorClaim"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRiverClaimerDelegatorClaim =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    functionName: 'delegatorClaim',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverClaimerAbi}__ and `functionName` set to `"distributeRewards"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRiverClaimerDistributeRewards =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    functionName: 'distributeRewards',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverClaimerAbi}__ and `functionName` set to `"mainnetClaim"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRiverClaimerMainnetClaim =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    functionName: 'mainnetClaim',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverClaimerAbi}__ and `functionName` set to `"operatorClaim"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRiverClaimerOperatorClaim =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    functionName: 'operatorClaim',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverClaimerAbi}__ and `functionName` set to `"setActivePeriodLength"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRiverClaimerSetActivePeriodLength =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    functionName: 'setActivePeriodLength',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverClaimerAbi}__ and `functionName` set to `"setPeriodDistributionAmount"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useSimulateRiverClaimerSetPeriodDistributionAmount =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    functionName: 'setPeriodDistributionAmount',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverClaimerAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRiverClaimerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverClaimerAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRiverClaimerApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverClaimerAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRiverClaimerApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverClaimerAbi}__ and `eventName` set to `"ConsecutiveTransfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRiverClaimerConsecutiveTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    eventName: 'ConsecutiveTransfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverClaimerAbi}__ and `eventName` set to `"DelegationRemoved"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRiverClaimerDelegationRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    eventName: 'DelegationRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverClaimerAbi}__ and `eventName` set to `"DelegationSet"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRiverClaimerDelegationSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    eventName: 'DelegationSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverClaimerAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRiverClaimerInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverClaimerAbi}__ and `eventName` set to `"InterfaceAdded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRiverClaimerInterfaceAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    eventName: 'InterfaceAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverClaimerAbi}__ and `eventName` set to `"InterfaceRemoved"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRiverClaimerInterfaceRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    eventName: 'InterfaceRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverClaimerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRiverClaimerOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverClaimerAbi}__ and `eventName` set to `"RewardsDistributed"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRiverClaimerRewardsDistributedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    eventName: 'RewardsDistributed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverClaimerAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x7c0422b31401C936172C897802CF0373B35B7698)
 * - [__View Contract on Base Sepolia Basescan__](https://sepolia.basescan.org/address/0x08cC41b782F27d62995056a4EF2fCBAe0d3c266F)
 */
export const useWatchRiverClaimerTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverClaimerAbi,
    address: riverClaimerAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__
 */
export const useReadRiverRegistry = /*#__PURE__*/ createUseReadContract({
  abi: riverRegistryAbi,
  address: riverRegistryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"configurationExists"`
 */
export const useReadRiverRegistryConfigurationExists =
  /*#__PURE__*/ createUseReadContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'configurationExists',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"getAllConfiguration"`
 */
export const useReadRiverRegistryGetAllConfiguration =
  /*#__PURE__*/ createUseReadContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'getAllConfiguration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"getAllNodeAddresses"`
 */
export const useReadRiverRegistryGetAllNodeAddresses =
  /*#__PURE__*/ createUseReadContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'getAllNodeAddresses',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"getAllNodes"`
 */
export const useReadRiverRegistryGetAllNodes =
  /*#__PURE__*/ createUseReadContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'getAllNodes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"getAllOperators"`
 */
export const useReadRiverRegistryGetAllOperators =
  /*#__PURE__*/ createUseReadContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'getAllOperators',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"getAllStreamIds"`
 */
export const useReadRiverRegistryGetAllStreamIds =
  /*#__PURE__*/ createUseReadContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'getAllStreamIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"getAllStreams"`
 */
export const useReadRiverRegistryGetAllStreams =
  /*#__PURE__*/ createUseReadContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'getAllStreams',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"getConfiguration"`
 */
export const useReadRiverRegistryGetConfiguration =
  /*#__PURE__*/ createUseReadContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'getConfiguration',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"getNode"`
 */
export const useReadRiverRegistryGetNode = /*#__PURE__*/ createUseReadContract({
  abi: riverRegistryAbi,
  address: riverRegistryAddress,
  functionName: 'getNode',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"getNodeCount"`
 */
export const useReadRiverRegistryGetNodeCount =
  /*#__PURE__*/ createUseReadContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'getNodeCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"getPaginatedStreams"`
 */
export const useReadRiverRegistryGetPaginatedStreams =
  /*#__PURE__*/ createUseReadContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'getPaginatedStreams',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"getStream"`
 */
export const useReadRiverRegistryGetStream =
  /*#__PURE__*/ createUseReadContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'getStream',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"getStreamByIndex"`
 */
export const useReadRiverRegistryGetStreamByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'getStreamByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"getStreamCount"`
 */
export const useReadRiverRegistryGetStreamCount =
  /*#__PURE__*/ createUseReadContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'getStreamCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"getStreamCountOnNode"`
 */
export const useReadRiverRegistryGetStreamCountOnNode =
  /*#__PURE__*/ createUseReadContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'getStreamCountOnNode',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"getStreamWithGenesis"`
 */
export const useReadRiverRegistryGetStreamWithGenesis =
  /*#__PURE__*/ createUseReadContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'getStreamWithGenesis',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"getStreams"`
 */
export const useReadRiverRegistryGetStreams =
  /*#__PURE__*/ createUseReadContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'getStreams',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"getStreamsOnNode"`
 */
export const useReadRiverRegistryGetStreamsOnNode =
  /*#__PURE__*/ createUseReadContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'getStreamsOnNode',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"isConfigurationManager"`
 */
export const useReadRiverRegistryIsConfigurationManager =
  /*#__PURE__*/ createUseReadContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'isConfigurationManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"isOperator"`
 */
export const useReadRiverRegistryIsOperator =
  /*#__PURE__*/ createUseReadContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'isOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverRegistryAbi}__
 */
export const useWriteRiverRegistry = /*#__PURE__*/ createUseWriteContract({
  abi: riverRegistryAbi,
  address: riverRegistryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"__OperatorRegistry_init"`
 */
export const useWriteRiverRegistryOperatorRegistryInit =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: '__OperatorRegistry_init',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"__RiverConfig_init"`
 */
export const useWriteRiverRegistryRiverConfigInit =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: '__RiverConfig_init',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"allocateStream"`
 */
export const useWriteRiverRegistryAllocateStream =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'allocateStream',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"approveConfigurationManager"`
 */
export const useWriteRiverRegistryApproveConfigurationManager =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'approveConfigurationManager',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"approveOperator"`
 */
export const useWriteRiverRegistryApproveOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'approveOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"deleteConfiguration"`
 */
export const useWriteRiverRegistryDeleteConfiguration =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'deleteConfiguration',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"deleteConfigurationOnBlock"`
 */
export const useWriteRiverRegistryDeleteConfigurationOnBlock =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'deleteConfigurationOnBlock',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"placeStreamOnNode"`
 */
export const useWriteRiverRegistryPlaceStreamOnNode =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'placeStreamOnNode',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"registerNode"`
 */
export const useWriteRiverRegistryRegisterNode =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'registerNode',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"removeConfigurationManager"`
 */
export const useWriteRiverRegistryRemoveConfigurationManager =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'removeConfigurationManager',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"removeNode"`
 */
export const useWriteRiverRegistryRemoveNode =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'removeNode',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"removeOperator"`
 */
export const useWriteRiverRegistryRemoveOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'removeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"removeStreamFromNode"`
 */
export const useWriteRiverRegistryRemoveStreamFromNode =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'removeStreamFromNode',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"setConfiguration"`
 */
export const useWriteRiverRegistrySetConfiguration =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'setConfiguration',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"setStreamLastMiniblock"`
 */
export const useWriteRiverRegistrySetStreamLastMiniblock =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'setStreamLastMiniblock',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"setStreamLastMiniblockBatch"`
 */
export const useWriteRiverRegistrySetStreamLastMiniblockBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'setStreamLastMiniblockBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"updateNodeStatus"`
 */
export const useWriteRiverRegistryUpdateNodeStatus =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'updateNodeStatus',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"updateNodeUrl"`
 */
export const useWriteRiverRegistryUpdateNodeUrl =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'updateNodeUrl',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverRegistryAbi}__
 */
export const useSimulateRiverRegistry = /*#__PURE__*/ createUseSimulateContract(
  { abi: riverRegistryAbi, address: riverRegistryAddress },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"__OperatorRegistry_init"`
 */
export const useSimulateRiverRegistryOperatorRegistryInit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: '__OperatorRegistry_init',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"__RiverConfig_init"`
 */
export const useSimulateRiverRegistryRiverConfigInit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: '__RiverConfig_init',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"allocateStream"`
 */
export const useSimulateRiverRegistryAllocateStream =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'allocateStream',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"approveConfigurationManager"`
 */
export const useSimulateRiverRegistryApproveConfigurationManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'approveConfigurationManager',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"approveOperator"`
 */
export const useSimulateRiverRegistryApproveOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'approveOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"deleteConfiguration"`
 */
export const useSimulateRiverRegistryDeleteConfiguration =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'deleteConfiguration',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"deleteConfigurationOnBlock"`
 */
export const useSimulateRiverRegistryDeleteConfigurationOnBlock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'deleteConfigurationOnBlock',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"placeStreamOnNode"`
 */
export const useSimulateRiverRegistryPlaceStreamOnNode =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'placeStreamOnNode',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"registerNode"`
 */
export const useSimulateRiverRegistryRegisterNode =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'registerNode',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"removeConfigurationManager"`
 */
export const useSimulateRiverRegistryRemoveConfigurationManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'removeConfigurationManager',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"removeNode"`
 */
export const useSimulateRiverRegistryRemoveNode =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'removeNode',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"removeOperator"`
 */
export const useSimulateRiverRegistryRemoveOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'removeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"removeStreamFromNode"`
 */
export const useSimulateRiverRegistryRemoveStreamFromNode =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'removeStreamFromNode',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"setConfiguration"`
 */
export const useSimulateRiverRegistrySetConfiguration =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'setConfiguration',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"setStreamLastMiniblock"`
 */
export const useSimulateRiverRegistrySetStreamLastMiniblock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'setStreamLastMiniblock',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"setStreamLastMiniblockBatch"`
 */
export const useSimulateRiverRegistrySetStreamLastMiniblockBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'setStreamLastMiniblockBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"updateNodeStatus"`
 */
export const useSimulateRiverRegistryUpdateNodeStatus =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'updateNodeStatus',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverRegistryAbi}__ and `functionName` set to `"updateNodeUrl"`
 */
export const useSimulateRiverRegistryUpdateNodeUrl =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    functionName: 'updateNodeUrl',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverRegistryAbi}__
 */
export const useWatchRiverRegistryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverRegistryAbi}__ and `eventName` set to `"ConfigurationChanged"`
 */
export const useWatchRiverRegistryConfigurationChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    eventName: 'ConfigurationChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverRegistryAbi}__ and `eventName` set to `"ConfigurationManagerAdded"`
 */
export const useWatchRiverRegistryConfigurationManagerAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    eventName: 'ConfigurationManagerAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverRegistryAbi}__ and `eventName` set to `"ConfigurationManagerRemoved"`
 */
export const useWatchRiverRegistryConfigurationManagerRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    eventName: 'ConfigurationManagerRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverRegistryAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchRiverRegistryInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverRegistryAbi}__ and `eventName` set to `"InterfaceAdded"`
 */
export const useWatchRiverRegistryInterfaceAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    eventName: 'InterfaceAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverRegistryAbi}__ and `eventName` set to `"InterfaceRemoved"`
 */
export const useWatchRiverRegistryInterfaceRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    eventName: 'InterfaceRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverRegistryAbi}__ and `eventName` set to `"NodeAdded"`
 */
export const useWatchRiverRegistryNodeAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    eventName: 'NodeAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverRegistryAbi}__ and `eventName` set to `"NodeRemoved"`
 */
export const useWatchRiverRegistryNodeRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    eventName: 'NodeRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverRegistryAbi}__ and `eventName` set to `"NodeStatusUpdated"`
 */
export const useWatchRiverRegistryNodeStatusUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    eventName: 'NodeStatusUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverRegistryAbi}__ and `eventName` set to `"NodeUrlUpdated"`
 */
export const useWatchRiverRegistryNodeUrlUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    eventName: 'NodeUrlUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverRegistryAbi}__ and `eventName` set to `"OperatorAdded"`
 */
export const useWatchRiverRegistryOperatorAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    eventName: 'OperatorAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverRegistryAbi}__ and `eventName` set to `"OperatorRemoved"`
 */
export const useWatchRiverRegistryOperatorRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    eventName: 'OperatorRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverRegistryAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchRiverRegistryOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverRegistryAbi}__ and `eventName` set to `"StreamAllocated"`
 */
export const useWatchRiverRegistryStreamAllocatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    eventName: 'StreamAllocated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverRegistryAbi}__ and `eventName` set to `"StreamLastMiniblockUpdateFailed"`
 */
export const useWatchRiverRegistryStreamLastMiniblockUpdateFailedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    eventName: 'StreamLastMiniblockUpdateFailed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverRegistryAbi}__ and `eventName` set to `"StreamLastMiniblockUpdated"`
 */
export const useWatchRiverRegistryStreamLastMiniblockUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    eventName: 'StreamLastMiniblockUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverRegistryAbi}__ and `eventName` set to `"StreamPlacementUpdated"`
 */
export const useWatchRiverRegistryStreamPlacementUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverRegistryAbi,
    address: riverRegistryAddress,
    eventName: 'StreamPlacementUpdated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverToken = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"CLOCK_MODE"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenClockMode = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'CLOCK_MODE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"checkpoints"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenCheckpoints = /*#__PURE__*/ createUseReadContract(
  {
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'checkpoints',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"clock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenClock = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'clock',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"delegates"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenDelegates = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'delegates',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"deployedAt"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenDeployedAt = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'deployedAt',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"eip712Domain"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenEip712Domain =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'eip712Domain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"finalInflationRate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenFinalInflationRate =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'finalInflationRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"getDelegators"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenGetDelegators =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'getDelegators',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"getPastTotalSupply"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenGetPastTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'getPastTotalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"getPastVotes"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenGetPastVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'getPastVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"getVotes"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenGetVotes = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'getVotes',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"inflationDecreaseInterval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenInflationDecreaseInterval =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'inflationDecreaseInterval',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"inflationDecreaseRate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenInflationDecreaseRate =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'inflationDecreaseRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"initialInflationRate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenInitialInflationRate =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'initialInflationRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"isLockEnabled"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenIsLockEnabled =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'isLockEnabled',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"lastMintTime"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenLastMintTime =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'lastMintTime',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"lockCooldown"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenLockCooldown =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'lockCooldown',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenName = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"nonces"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenNonces = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"numCheckpoints"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenNumCheckpoints =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'numCheckpoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"overrideInflation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenOverrideInflation =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'overrideInflation',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"overrideInflationRate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenOverrideInflationRate =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'overrideInflationRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenOwner = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useReadRiverTokenTotalSupply = /*#__PURE__*/ createUseReadContract(
  {
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'totalSupply',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverToken = /*#__PURE__*/ createUseWriteContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"__Introspection_init"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenIntrospectionInit =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: '__Introspection_init',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"__LockFacet_init"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenLockFacetInit =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: '__LockFacet_init',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"createInflation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenCreateInflation =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'createInflation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenDelegate = /*#__PURE__*/ createUseWriteContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'delegate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenDelegateBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"disableLock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenDisableLock =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'disableLock',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"enableLock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenEnableLock =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'enableLock',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenPermit = /*#__PURE__*/ createUseWriteContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"setLockCooldown"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenSetLockCooldown =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'setLockCooldown',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"setOverrideInflation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenSetOverrideInflation =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'setOverrideInflation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWriteRiverTokenTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverToken = /*#__PURE__*/ createUseSimulateContract({
  abi: riverTokenAbi,
  address: riverTokenAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"__Introspection_init"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverTokenIntrospectionInit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: '__Introspection_init',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"__LockFacet_init"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverTokenLockFacetInit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: '__LockFacet_init',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"createInflation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverTokenCreateInflation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'createInflation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"delegate"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverTokenDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'delegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"delegateBySig"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverTokenDelegateBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"disableLock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverTokenDisableLock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'disableLock',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"enableLock"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverTokenEnableLock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'enableLock',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"permit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverTokenPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverTokenRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"setLockCooldown"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverTokenSetLockCooldown =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'setLockCooldown',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"setOverrideInflation"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverTokenSetOverrideInflation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'setOverrideInflation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link riverTokenAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useSimulateRiverTokenTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWatchRiverTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWatchRiverTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"DelegateChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWatchRiverTokenDelegateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWatchRiverTokenDelegateVotesChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"EIP712DomainChanged"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWatchRiverTokenEip712DomainChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'EIP712DomainChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWatchRiverTokenInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"InterfaceAdded"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWatchRiverTokenInterfaceAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'InterfaceAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"InterfaceRemoved"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWatchRiverTokenInterfaceRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'InterfaceRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"LockUpdated"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWatchRiverTokenLockUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'LockUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWatchRiverTokenOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link riverTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x53319181e003e7f86fb79f794649a2ab680db244)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x40ef1bb984503bb5adef041a88a4f9180e8586f9)
 */
export const useWatchRiverTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: riverTokenAbi,
    address: riverTokenAddress,
    eventName: 'Transfer',
  })
