# Rewards Dispatcher

The Rewards Dispatcher contract accumulates the rewards from Hub's delegations and manages the rewards.

All rewards from *stLuna* tokens (the share of all rewards proportional to the amount of *stLuna* tokens minted) are converted to Luna and are re-delegated back to the validators pool.

All rewards from *bLuna* (the share of all rewards proportional to the amount of *bLuna* tokens minted) are sent to the Reward Contract and handled the old way.

## Config

| Key | Type | Description |
| :--- | :--- | :--- |
| `owner` | CanonicalAddr | Owner of the contract |
| `hub_contract` | CanonicalAddr | Contract address of [Hub](hub) |
| `bluna_reward_contract` | CanonicalAddr | Contract address of [bLuna Reward](reward) |
| `stluna_reward_denom` | String | Native token denomination for distributed stLuna rewards |
| `bluna_reward_denom` | String | Native token denomination for distributed bLuna rewards |
| `lido_fee_address` | CanonicalAddr | Address for fee distribution |
| `lido_fee_rate` | Decimal | Amount of fees which goes to Lido Fee Address |

```json
{
  "owner": "terra1...",
  "hub_contract": "terra1...",
  "bluna_reward_contract": "terra1...",
  "stluna_reward_denom": "uluna",
  "bluna_reward_denom": "uusd",
  "lido_fee_address": "terra1...",
  "lido_fee_rate": "0.005"
}
```

## InitMsg

```rust
pub struct InstantiateMsg {
    pub hub_contract: String,
    pub bluna_reward_contract: String,
    pub stluna_reward_denom: String,
    pub bluna_reward_denom: String,
    pub lido_fee_address: String,
    pub lido_fee_rate: Decimal,
}
```

```json
{
  "hub_contract": "terra1...",
  "bluna_reward_contract": "terra1...",
  "stluna_reward_denom": "uluna",
  "bluna_reward_denom": "uusd",
  "lido_fee_address": "terra1...",
  "lido_fee_rate": "0.005" 
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `hub_contract` | CanonicalAddr | Contract address of [Hub](hub) |
| `bluna_reward_contract` | CanonicalAddr | Contract address of [bLuna Reward](reward) |
| `stluna_reward_denom` | String | Native token denomination for distributed stLuna rewards |
| `bluna_reward_denom` | String | Native token denomination for distributed bLuna rewards |
| `lido_fee_address` | CanonicalAddr | Address for fee distribution |
| `lido_fee_rate` | Decimal | Amount of fees which goes to Lido Fee Address |

## ExecuteMsg

### ```UpdateConfig```

Updates the dispatcher's configuration. Can only be executed by the owner.

```rust
pub enum ExecuteMsg{
    UpdateConfig {
        owner: Option<String>,
        hub_contract: Option<String>,
        bluna_reward_contract: Option<String>,
        stluna_reward_denom: Option<String>,
        bluna_reward_denom: Option<String>,
        lido_fee_address: Option<String>,
        lido_fee_rate: Option<Decimal>,
    },
}
```

```json
{
  "owner": "terra1...",
  "hub_contract": "terra1...",
  "bluna_reward_contract": "terra1...",
  "stluna_reward_denom": "uluna",
  "bluna_reward_denom": "uusd",
  "lido_fee_address": "terra1...",
  "lido_fee_rate": "0.005" 
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `owner`\* | CanonicalAddr | New owner of the contract |
| `hub_contract`\* | CanonicalAddr | New contract address of [Hub](hub) |
| `bluna_reward_contract`\* | CanonicalAddr | New contract address of [bLuna Reward](reward) |
| `stluna_reward_denom`\* | String | New native token denomination for distributed stLuna rewards |
| `bluna_reward_denom`\* | String | New native token denomination for distributed bLuna rewards |
| `lido_fee_address`\* | CanonicalAddr | New address for fee distribution |
| `lido_fee_rate`\* | Decimal | New amount of fees which goes to Lido Fee Address |

\* = optional

### ```[Internal] SwapToRewardDenom```

Swaps all native tokens on his balance to Luna and Terra USD proportional to the minted stLuna and bLuna amount.

Can only be executed by the [Hub](hub).

```rust
pub enum ExecuteMsg {
    SwapToRewardDenom {
        bluna_total_mint_amount: Uint128,
        stluna_total_mint_amount: Uint128,
    }
}
```

```json
{
  "bluna_total_mint_amount": "100000",
  "stluna_total_mint_amount": "2000000"
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `bluna_total_mint_amount` | Uint128 | Total amount of minted bLuna |
| `stluna_total_mint_amount` | Uint128 | Total amount of minted stLuna |

### ```[Internal] DispatchRewards```

Re-stakes the stLuna rewards (with subtracted Lido Fee) and sends the bLuna rewards to the old bLuna Rewards contract (with subtracted Lido Fee).

Can only be executed by the [Hub](hub).

```rust
pub enum ExecuteMsg {
    DispatchRewards {}
}
```

```json
{
  "dispatch_rewards": {}
}
```

## QueryMsg

### ```Config```

Returns the current configuration of the contract.

```rust
pub enum QueryMsg {
    Config {},
}
```

```json
{
  "config": {}
}
```

Returns [`Config`](rewards_dispatcher#config) struct.