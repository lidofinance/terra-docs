# Reward

The Reward contract contains logic for distributing Luna delegation rewards to holders of bLuna. After the Hub contract withdraws Luna delegation rewards to the Reward contract, the Hub contract can request all rewards to be swapped to TerraUSD, which is then distributed to bLuna holders. Holders of bLuna can then send a request to this contract to claim their accrued rewards.

The Reward contract also stores the balance and reward index values for all bLuna holders, which is used to calculate the amount of bLuna rewards that a specific holder has accrued.

## Config

| Key | Type | Description |
| :--- | :--- | :--- |
| `hub_contract` | CanonicalAddr | Contract address of [bLuna Hub](hub.md) |
| `reward_denom` | String | Native token denomination for distributed bLuna rewards |

## InitMsg



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct InitMsg {
    pub hub_contract: HumanAddr,
    pub reward_denom: String, 
}
```



```javascript
{
  "hub_contract": "terra1...", 
  "reward_denom": "uusd" 
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `hub_contract` | HumanAddr | Contract address of bLuna Hub |
| `reward_denom` | String | Native token denomination for distributed bLuna rewards |

## HandleMsg

### `ClaimRewards`

Claims bLuna holder's accrued rewards to the specified address. Sends rewards to message sender if the `recipient` is not specified.



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum HandleMsg {
    ClaimRewards {
        recipient: Option<HumanAddr>, 
    }
}
```



```javascript
{
  "claim_rewards": {
    "recipient": "terra1..." 
  }
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `recipient`\* | HumanAddr | Recipient address of claimed bLuna rewards |

\* = optional

### `[Internal] SwapToRewardDenom`

Swaps all withdrawn delegation rewards to `reward_denom`. Can only be issued by `Hub`.



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum HandleMsg {
    SwapToRewardDenom {}
}
```



```javascript
{
  "swap_to_reward_denom": {}
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
|  |  |  |

### `[Internal] UpdateGlobalIndex`

Updates the global reward index based on the newly withdrawn rewards. Can only be issued by `Hub`.



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum HandleMsg {
    UpdateGlobalIndex {}
}
```



```javascript
{
  "update_global_index": {}
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
|  |  |  |

### ~~`[Internal] IncreaseBalance`~~

Increases stored user's bLuna balance. Stores user's accrued rewards to pending rewards and updates user's reward index to the current global reward index . Can only be issued by `Token`.



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum HandleMsg {
    IncreaseBalance {
        address: HumanAddr, 
        amount: Uint128,  
    }
}
```



```javascript
{
  "increase_balance": {
    "address": "terra1...", 
    "amount": "100000000" 
  }
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `address` | HumanAddr | Address of user whose balance has increased |
| `amount` | Uint128 | Amount of bLuna balance increased |

### `[Internal] DecreaseBalance`

Decreases stored user's bLuna balance. Stores user's accrued rewards to pending rewards and updates user's reward index to the current global reward index. Can only be issued by`Token`.



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum HandleMsg {
    DecreaseBalance {
        address: HumanAddr, 
        amount: Uint128, 
    }
}
```



```javascript
{
  "decrease_balance": {
    "address": "terra1...", 
    "amount": "100000000" 
  }
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `address` | HumanAddr | Address of user whose balance has decreased |
| `amount` | Uint128 | Amount of bLuna balance decreased |

## QueryMsg

### `Config`

Gets the contract configuration of bLuna `Reward`.



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
    Config {}
}
```



```javascript
{
  "config": {}
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
|  |  |  |

### `ConfigResponse`



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct ConfigResponse {
    pub hub_contract: HumanAddr, 
    pub reward_denom: String, 
}
```



```javascript
{
  "hub_contract": "terra1...", 
  "reward_denom": "uusd" 
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `hub_contract` | HumanAddr | Contract address of [bLuna Hub](hub.md) |
| `reward_denom` | String | Native token denomination for distributed bLuna rewards |

### `State`

Gets information about the contract's current state.



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
    State {}
}
```



```javascript
{
  "state": {}
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
|  |  |  |

### `StateResponse`



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct StateResponse {
    pub global_index: Decimal, 
    pub total_balance: Uint128, 
    pub prev_reward_balance: Uint128, 
}
```



```javascript
{
  "global_index": "1000.0", 
  "total_balance": "100000000", 
  "prev_reward_balance": "100000000" 
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `global_index` | Decimal | Current global reward index of bLuna |
| `total_balance` | Uint128 | Total bLuna balance of all holders |
| `prev_reward_balance` | Uint128 | TerraUSD balance of Reward contract at the end of last [`UpdateGlobalIndex`](reward#internal-updateglobalindex)\`\` |

### `AccruedRewards`

Gets the amount of rewards accrued to the specified bLuna holder.



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
    AccruedRewards {
        address: HumanAddr, 
    }
}
```



```javascript
{
  "accrued_rewards": {
    "address": "terra1..." 
  }
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `address` | HumanAddr | Address of bLuna holder |

### `AccruedRewardsResponse`



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct AccruedRewardsResponse {
    pub rewards: Uint128, 
}
```



```javascript
{
  "rewards": "100000000" 
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `rewards` | Uint128 | Amount of `reward_denom` rewards accrued |

### `Holder`

Gets information about the specified bLuna holder.



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
    Holder {
        address: HumanAddr, 
    }
}
```



```javascript
{
  "holder": {
    "address": "terra1..." 
  }
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `address` | HumanAddr | Address of bLuna holder |

### `HolderResponse`



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct HolderResponse {
    pub address: HumanAddr, 
    pub balance: Uint128, 
    pub index: Decimal, 
    pub pending_rewards: Decimal, 
}
```



```javascript
{
  "address": "terra1...", 
  "balance": "100000000", 
  "index": "100.0", 
  "pending_rewards": "1000000.123" 
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `address` | HumanAddr | Address of bLuna holder |
| `balance` | Uint128 | bLuna balance of holder |
| `index` | Decimal | Holder's reward index value |
| `pending_rewards` | Decimal | Amount of holder's pending rewards |

### `Holders`

Gets information about all bLuna holders.



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
    Holders {
        start_after: Option<HumanAddr>, 
        limit: Option<u32>, 
    }
}
```



```javascript
{
  "holders": {
    "start_after": "terra1...", 
    "limit": 10 
  }
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `start_after` | HumanAddr | Address of bLuna holder to start query |
| `limit`\* | u32 | Maximum number of query entries |

\* = optional

### `HoldersResponse`



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct HoldersResponse {
    pub holders: Vec<HolderResponse>, 
}

pub struct HolderResponse {
    pub address: HumanAddr, 
    pub balance: Uint128, 
    pub index: Decimal, 
    pub pending_rewards: Decimal, 
}
```



```javascript
{
  "holders": [
    {
      "address": "terra1...", 
      "balance": "100000000", 
      "index": "100.00", 
      "pending_rewards": "1000000.123" 
    }, 
    {
      "address": "terra1...", 
      "balance": "100000000", 
      "index": "100.00", 
      "pending_rewards": "1000000.123" 
    }
  ]
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `holders` | Vec&lt;HolderResponse&gt; | Vector of holder informations |

| Key | Type | Description |
| :--- | :--- | :--- |
| `address` | HumanAddr | Address of bLuna holder |
| `balance` | Uint128 | bLuna balance of holder |
| `index` | Decimal | Holder's reward index value |
| `pending_rewards` | Decimal | Amount of holder's pending rewards |
