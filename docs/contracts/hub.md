# Hub

The Hub contract acts as the central hub for all minted bLuna. Native Luna tokens received from users are delegated from here, and undelegations from bLuna unbond requests are also handled from this contract. Rewards generated from delegations are withdrawn to the Reward contract, later distributed to bLuna holders.

## Config

| Key | Type | Description |
| :--- | :--- | :--- |
| `creator` | CanonicalAddr | Address of contract creator that is allowed to change config and parameters |
| `rewards_dispatcher_contract`\* | CanonicalAddr | Contract address of [Rewards Dispatcher](rewards_dispatcher) |
| `validators_registry_contract`\* | CanonicalAddr | Contract address of [Validators Registry](validators_registry) |
| `reward_contract`\* | CanonicalAddr | Contract address of [bLuna Reward](reward) |
| `bluna_token_contract`\* | CanonicalAddr | Contract address of bLuna's Cw20 token contract |
| `stluna_token_contract`\* | CanonicalAddr | Contract address of stLuna's Cw20 token contract |
| `airdrop_registry_contract`\* | CanonicalAddr | Contract address of [bLuna Airdrop Registry](airdrop-registry) |

\* = Set as `None` until an address is registered

## Parameters

| Key | Type | Description |
| :--- | :--- | :--- |
| `epoch_period` | u64 | Minimum time delay between undelegation batches **\[seconds\]** |
| `underlying_coin_denom` | String | Underlying asset denomination of bAsset \(Luna\) |
| `unbonding_period` | u64 | Time required for the Hub contract to consider an undelegation batch to be fully undelegated \(past the unbonding period\) **\[seconds\]** |
| `peg_recovery_fee` | Decimal | Fee applied to bLuna generation and redemption |
| `er_threshold` | Decimal | Minimum bLuna exchange rate before peg recovery fee is applied |
| `reward_denom` | String | Native token denomination for distributed bLuna rewards \(Terra USD\) |

## InitMsg

Instantiates the bLuna Hub contract. Adds a specified validator to whitelist and bonds the creator's initial Luna deposit. The creator's initial Luna deposit ensures the bLuna supply always be a high enough value to prevent rounding errors in the bLuna exchange rate calculation.

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct InstantiateMsg {
    pub epoch_period: u64,
    pub underlying_coin_denom: String,
    pub unbonding_period: u64,
    pub peg_recovery_fee: Decimal,
    pub er_threshold: Decimal,
    pub reward_denom: String,
}
```

```json
{
  "epoch_period": 1000000, 
  "underlying_coin_denom": "uluna", 
  "unbonding_period": 7000000, 
  "peg_recovery_fee": "0.001", 
  "er_threshold": "1.0", 
  "reward_denom": "uusd"
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `epoch_period` | u64 | Minimum time delay between undelegation batches **\[seconds\]** |
| `underlying_coin_denom` | String | Underlying asset denomination of bAsset \(Luna\) |
| `unbonding_period` | u64 | Time required for the Hub contract to consider an undelegation batch to be fully undelegated \(past the unbonding period\) **\[seconds\]** |
| `peg_recovery_fee` | Decimal | Fee applied to bLuna generation and redemption |
| `er_threshold` | Decimal | Minimum bLuna exchange rate before the peg recovery fee is applied |
| `reward_denom` | String | Native token denomination for distributed bLuna rewards |

## ExecuteMsg

### `Receive`

Can be called during a Cw20 token transfer when the Hub contract is the recipient. Allows the token transfer to execute a [Receive Hook](hub#receive-hooks) as a subsequent action within the same transaction.

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    Receive {
        amount: Uint128, 
        sender: HumanAddr, 
        msg: Option<Binary>, 
    }
}
```

```json
{
  "receive": {
    "amount": "10000000",
    "sender": "terra1...",
    "msg": "eyAiZXhlY3V0ZV9tc2ciOiAiYmluYXJ5IiB9"
  }
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `amount` | Uint128 | Amount of tokens received |
| `sender` | HumanAddr | Sender of token transfer |
| `msg`\* | Binary | Base64-encoded string of JSON of [Receive Hook](hub#receive-hooks) |

\* = optional

### `Bond`

Bonds luna by delegating the luna amount equally between validators from the registry and mints bLuna tokens to the message sender. Requires native Luna tokens to be sent to `Hub`.

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    Bond {}
}
```

```json
{
  "bond": {}
}
```

### `BondForStLuna`

Bonds luna by delegating the luna amount equally between validators from the registry and mints stLuna tokens to the message sender. Requires native Luna tokens to be sent to `Hub`.

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    BondForStLuna {}
}
```

```json
{
  "bond_for_stluna": {}
}
```

### `UpdateGlobalIndex`

Distributes Luna delegation rewards to stLuna and bLuna holders. Withdraws all accrued delegation rewards to the `Reward Dispatcher` contract and requests the `Reward` contract to update the global reward index value. Can be issued by anyone without restrictions.

Tokens airdropped to Luna stakers \(i.e. Hub contract\) can be claimed by providing the relevant binary in `airdrop_hooks`.

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    UpdateGlobalIndex {
        airdrop_hooks: Option<Vec<Binary>>, 
    }
}
```

```json
{
  "update_global_index": {
    "airdrop_hooks": [
      "eyAiZXhlY3V0ZV9tc2ciOiAiYmluYXJ5IiB9", 
      "eyAiZXhlY3V0ZV9tc2ciOiAiYmluYXJ5IiB9" 
    ]
  }
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `airdrop_hooks`\* | Vec&lt;Binary&gt; | Base64-encoded string of JSON of `FabricateMIRClaim`\` |

\* = optional

### `WithdrawUnbonded`

Withdraws unbonded Luna. Requires an unbonding entry to have been made before the unbonding period.

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg { 
    WithdrawUnbonded {}
}
```

```json
{
  "withdraw_unbonded": {}
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
|  |  | ~~~~ |

### `CheckSlashing`

Checks whether a slashing event occurred and updates state accordingly.

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    CheckSlashing {}
}
```


```json
{
  "check_slashing": {}
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
|  |  |  |

### `UpdateParams`

Updates parameter values of the Hub contract. Can only be issued by the creator.

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    UpdateParams {
        epoch_period: Option<u64>, 
        unbonding_period: Option<u64>, 
        peg_recovery_fee: Option<Decimal>, 
        er_threshold: Option<Decimal>, 
    }
}
```

```json
{
  "update_params": {
    "epoch_period": 260000, 
    "unbonding_period": 1000000, 
    "peg_recovery_fee": "0.005", 
    "er_threshold": "1.0" 
  }
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `epoch_period`\* | u64 | New minimum time delay between undelegation batches **\[seconds\]** |
| `unbonding_period`\* | u64 | New time period required for the Hub contract to consider an undelegation batch to be fully undelegated \(past the unbonding period\) **\[seconds\]** |
| `peg_recovery_fee`\* | Decimal | New fee applied to bLuna generation and redemption |
| `er_threshold`\* | Decimal | New minimum bLuna exchange rate before the peg recovery fee is applied |

\* = optional

### `UpdateConfig`

Updates the `Hub` contract configuration. Can only be issued by the creator.

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    UpdateConfig {
        owner: Option<String>,
        rewards_dispatcher_contract: Option<String>,
        validators_registry_contract: Option<String>,
        bluna_token_contract: Option<String>,
        stluna_token_contract: Option<String>,
        airdrop_registry_contract: Option<String>,
    },
}
```

```json
{
  "update_config": {
    "owner": "terra1...", 
    "reward_contract": "terra1...", 
    "rewards_dispatcher_contract": "terra2...",
    "bluna_token_contract": "terra1...",
    "stluna_token_contract": "terra1...",
    "airdrop_registry_contract": "terra1...",
    "validators_registry_contract": "terra1..."
  }
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `owner` | CanonicalAddr | Address of the new owner |
| `rewards_dispatcher_contract`\* | CanonicalAddr | Contract address of the new [Rewards Dispatcher](rewards_dispatcher) |
| `validators_registry_contract`\* | CanonicalAddr | Contract address of the new [Validators Registry](validators_registry) |
| `reward_contract`\* | CanonicalAddr | Contract address of the new [bLuna Reward](reward) |
| `bluna_token_contract`\* | CanonicalAddr | Contract address of the new bLuna's Cw20 token contract |
| `stluna_token_contract`\* | CanonicalAddr | Contract address of the new stLuna's Cw20 token contract |
| `airdrop_registry_contract`\* | CanonicalAddr | Contract address of the new [bLuna Airdrop Registry](airdrop-registry) |

\* = optional

### `[Internal] ClaimAirdrop`

Claims tokens airdropped to `Hub`'s Luna delegations and swaps them to UST through [`SwapHook`](hub#swaphook). Can only be issued by [Airdrop Registry](airdrop-registry).

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    ClaimAirdrop {
        airdrop_token_contract: HumanAddr, 
        airdrop_contract: HumanAddr, 
        airdrop_swap_contract: HumanAddr, 
        claim_msg: Binary, 
        swap_msg: Binary, 
    }    
}
```

```json
{
  "claim_airdrop": {
    "airdrop_token_contract": "terra1...", 
    "airdrop_contract": "terra1...", 
    "airdrop_swap_contract": "terra1...", 
    "airdrop_swap_contract": "terra1...", 
    "claim_msg": "eyAiZXhlY3V0ZV9tc2ciOiAiYmluYXJ5IiB9", 
    "swap_msg": "eyAiZXhlY3V0ZV9tc2ciOiAiYmluYXJ5IiB9" 
  }
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `airdrop_token_contract` | HumanAddr | Contract address of airdrop token's Cw20 token contract |
| `airdrop_contract` | HumanAddr | Contract address of airdrop contract |
| `airdrop_swap_contract` | HumanAddr | Contract address of swap contract to convert airdrop token to Terra USD \(e.g. Terraswap Pair\) |
| `claim_msg` | Binary | Base64-encoded string of JSON of airdrop contract's claim message \(claims airdrop\) |
| `swap_msg` | Binary | Base64-encoded string of JSON of swap contract's swap message \(swaps airdrop token to Terra USD\) |

### `[Interal] SwapHook`

Swaps claimed airdrop tokens to the reward denomination. Can only be issued by itself \(Hub\).

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    SwapHook {
        airdrop_token_contract: HumanAddr, 
        airdrop_swap_contract: HumanAddr, 
        swap_msg: Binary, 
    }
}
```

```json
{
  "swap_hook": {
    "airdrop_token_contract": "terra1...", 
    "airdrop_swap_contract": "terra1...", 
    "swap_msg": "eyAiZXhlY3V0ZV9tc2ciOiAiYmluYXJ5IiB9" 
  }
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `airdrop_token_contract` | HumanAddr | Contract address of airdrop token's Cw20 token contract |
| `airdrop_swap_contract` | HumanAddr | Contract address of swap contract to convert airdrop token to Terra USD \(e.g. Terraswap Pair\) |
| `swap_msg` | Binary | Base64-encoded string of JSON of swap contract's swap message \(swaps airdrop token to Terra USD\) |

### `[Internal] RedelegateProxy`

A proxy handler to execute redelegations from Hub address.

Can only be executed by [Validators Registry](validators_registry) or by the owner of the Hub.

```rust
pub enum ExecuteMsg {
    RedelegateProxy {
        src_validator: String,
        redelegations: Vec<(String, Coin)>
    }
}
```

```json
{
  "redelegate_proxy": {
    "src_validator": "terravaloper1...",
    "redelegations": [
      ["terravaloper1...", "100uluna"],
      ["terravaloper1...", "50uluna"]
    ]
  }
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `src_validator` | HumanAddr | Address of source validator in redelegation pair |
| `redelegations` | Vec&lt;\(String, Coin\)&gt; | List of \(destination validator, redelegation amount\) |

### `[Internal] BondRewards`

Bonds luna by delegating the luna amount equally between validators from the registry.

Neither bLuna nor stLuna are minted.

Can only be executed by [Rewards Dispatcher](rewards_dispatcher).

Requires native Luna tokens to be sent to `Hub`.

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    BondRewards {}
}
```

```json
{
  "bond_rewards": {}
}
```

## Receive Hooks

### `Unbond`

Burns received stLuna or bLuna and equally unbonds a corresponding amount of Luna from a validator from the registry.

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum Cw20HookMsg {
    Unbond {}
}
```

```json
{
  "unbond": {}
}
```

### Convert

Converts received stLuna to bLuna or vice versa.

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum Cw20HookMsg {
    Convert {}
}
```

```json
{
  "convert": {}
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
|  |  |  |

## QueryMsg

### `Config`

Gets the `Hub` contract's configuration.

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
    Config {}
}
```

```json
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
    pub owner: String,
    pub reward_dispatcher_contract: Option<String>,
    pub validators_registry_contract: Option<String>,
    pub bluna_token_contract: Option<String>,
    pub stluna_token_contract: Option<String>,
    pub airdrop_registry_contract: Option<String>,
}
```

```json
{
    "owner": "terra1...", 
    "reward_contract": "terra1...", 
    "rewards_dispatcher_contract": "terra2...",
    "bluna_token_contract": "terra1...",
    "stluna_token_contract": "terra1...",
    "airdrop_registry_contract": "terra1...",
    "validators_registry_contract": "terra1..."
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `owner` | CanonicalAddr | Address of the owner |
| `rewards_dispatcher_contract`\* | CanonicalAddr | Contract address of [Rewards Dispatcher](rewards_dispatcher) |
| `validators_registry_contract`\* | CanonicalAddr | Contract address of [Validators Registry](validators_registry) |
| `reward_contract`\* | CanonicalAddr | Contract address of [bLuna Reward](reward) |
| `bluna_token_contract`\* | CanonicalAddr | Contract address of bLuna's Cw20 token contract |
| `stluna_token_contract`\* | CanonicalAddr | Contract address of stLuna's Cw20 token contract |
| `airdrop_registry_contract`\* | CanonicalAddr | Contract address of [bLuna Airdrop Registry](airdrop-registry) |

\* = Not returned if address not registered yet

### `State`

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
    State {}
}
```

```json
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
    pub bluna_exchange_rate: Decimal,
    pub stluna_exchange_rate: Decimal,
    pub total_bond_bluna_amount: Uint128,
    pub total_bond_stluna_amount: Uint128,
    pub last_index_modification: u64,
    pub prev_hub_balance: Uint128,
    pub last_unbonded_time: u64,
    pub last_processed_batch: u64,
}
```

```json
{
  "bluna_exchange_rate": "0.99", 
  "stluna_exchange_rate": "1.99",
  "total_bond_bluna_amount": "100000000",
  "total_bond_stluna_amount": "200000000",
  "last_index_modification": 123456, 
  "prev_hub_balance": "100000000", 
  "actual_unbonded_amount": "10000000", 
  "last_unbonded_time": 123456, 
  "last_processed_batch": 10 
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `bluna_exchange_rate` | Decimal | Current bLuna &lt;&gt; Luna exchange rate |
| `stluna_exchange_rate` | Decimal | Current stLuna &lt;&gt; Luna exchange rate |
| `total_bond_bluna_amount` | Uint128 | Total amount of Luna currently bonded by `Hub` via bLuna logic|
| `total_bond_stluna_amount` | Uint128 | Total amount of Luna currently bonded by `Hub` via stLuna logic|
| `last_index_modification` | u64 | Unix block timestamp when the global reward index was last updated |
| `prev_hub_balance` | Uint128 | `Hub`'s Luna balance when `WithdrawUnbonded` was lasted executed. Used to calculate the actual amount of unbonded Luna |
| `actual_unbonded_amount` | Uint128 | Amount of Luna released from undelegation since last undelegation batch release |
| `last_unbonded_time` | u64 | Unix block timestamp when a batch was last undelegated |
| `last_processed_batch` | u64 | Batch ID of the most recently released batch |

### `CurrentBatch`

Gets information about the current undelegation batch.

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
    CurrentBatch {}
}
```

```json
{
  "current_batch": {}
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
|  |  |  |

### `CurrentBatchResponse`

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct CurrentBatchResponse {
    pub id: u64,
    pub requested_bluna_with_fee: Uint128,
    pub requested_stluna: Uint128,
}
```

```json
{
  "id": 10, 
  "requested_bluna_with_fee": "100000000",
  "requested_stluna_with_fee": "200000000"
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `id` | u64 | Batch ID of the current undelegation batch |
| `requested_bluna_with_fee` | Uint128 | Amount of \(fee-applied\) bLuna requested for undelegation in this batch |
| `requested_stluna_with_fee` | Uint128 | Amount of stLuna requested for undelegation in this batch |

### `WithdrawableUnbonded`

Gets the amount of undelegated Luna that will be available for withdrawal \(unbonding requests past the unbonding period\) for the specified user.

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
    WithdrawableUnbonded {
        address: HumanAddr,
    }
}
```

```json
{
  "withdrawable_unbonded": {
    "address": "terra1..."
  }
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `address` | HumanAddr | Address of user that previously unbonded Luna via redeeming bLuna |

### `WithdrawableUnbondedResponse`

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct WithdrawablUnbondedResponse {
    pub withdrawable: Uint128, 
}
```

```json
{
  "withdrawable": "100000000" 
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `withdrawable` | Uint128 | Amount of undelegated Luna available for withdrawal |

### `Parameters`

Gets parameter information.

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
    Parameters {}
}
```

```json
{
  "parameters": {}
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
|  |  |  |

### `ParametersResponse`

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct Parameters {
    pub epoch_period: u64, 
    pub underlying_coin_denom: String, 
    pub unbonding_period: u64, 
    pub peg_recovery_fee: Decimal, 
    pub er_threshold: Decimal, 
    pub reward_denom: String, 
}
```

```json
{
  "epoch_period": 260000, 
  "underlying_coin_denom": "uluna", 
  "unbonding_period": 1820000, 
  "peg_recovery_fee": "0.001", 
  "er_threshold": "1.0", 
  "reward_denom": "uusd" 
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `epoch_period` | u64 | Minimum time delay between undelegations **\[seconds\]** |
| `underlying_coin_denom` | String | Underlying asset denomination of bAsset \(Luna\) |
| `unbonding_period` | u64 | Time required for the Hub contract to consider an undelegation batch to be fully undelegated **\[seconds\]** |
| `peg_recovery_fee` | Decimal | Fee applied to bLuna generation and redemption |
| `er_threshold` | Decimal | Minimum bLuna exchange rate before the peg recovery fee is applied |
| `reward_denom` | String | Native token denomination for distributed bLuna rewards |

### `UnbondRequests`

Gets the list of Luna unbonding amounts being unbonded for the specified user.

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
    UnbondRequests {
        address: HumanAddr, 
    }
}
```

```json
{
  "unbond_requests": {
    "address": "terra1..." 
  }
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `address` | HumanAddr | Address of user that previously unbonded Luna by redeeming bLuna |

### `UnbondRequestsResponse`

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct UnbondRequestsResponse {
    pub address: HumanAddr, 
    pub requests: UnbondRequest, 
}

pub type UnbondRequest = Vec<(u64, Uint128, Uint128)>;
```

```json
{
  "address": "terra1...", 
  "requests": [
    [7, "1000000", "1000500"], 
    [8, "2000000", "2000000"], 
    [9, "3000000", "1400000"] 
  ]
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `address` | HumanAddr | Address of user that requested to unbond bLuna |
| `requests` | UnbondRequest | List of unbonding requests made by user |

| Key | Type | Description |
| :--- | :--- | :--- |
| `UnbondRequest` | Vec&lt;\(u64, Uint128, Uint128\)&gt; | List of \(batch ID, bLuna unbond amount, stLuna unbond amount\) |

### `AllHistory`

Gets the historical list of undelegation batch entries.

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
    AllHistory {
        start_from: Option<u64>, 
        limit: Option<u32>, 
    }
}
```

```json
{
  "all_history": {
    "start_from": 10, 
    "limit": 10 
  }
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `start_from`\* | u64 | Batch ID to start query |
| `limit`\* | u32 | Maximum number of query entries |

\* = optional

### `AllHistoryResponse`

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct AllHistoryResponse {
    pub history: Vec<UnbondHistory>, 
}

pub struct UnbondHistory {
    pub batch_id: u64,
    pub time: u64,
    pub bluna_amount: Uint128,
    pub bluna_applied_exchange_rate: Decimal,
    pub bluna_withdraw_rate: Decimal,

    pub stluna_amount: Uint128,
    pub stluna_applied_exchange_rate: Decimal,
    pub stluna_withdraw_rate: Decimal,

    pub released: bool,
}
```

```json
{
  "history": [
    {
      "batch_id": 7, 
      "time": 100000, 
      "bluna_amount": "100000000", 
      "bluna_applied_exchange_rate": "0.99", 
      "bluna_withdraw_rate": "0.98",
      "stluna_amount": "100050000",
      "stluna_applied_exchange_rate": "1.99",
      "stluna_withdraw_rate": "1.98", 
      "released": true 
    }, 
    {
      "batch_id": 8, 
      "time": 150000,
      "bluna_amount": "100000000",
      "bluna_applied_exchange_rate": "0.99",
      "bluna_withdraw_rate": "0.98",
      "stluna_amount": "100050000",
      "stluna_applied_exchange_rate": "1.99",
      "stluna_withdraw_rate": "1.98",
      "released": false 
    } 
  ]
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `history` | Vec&lt;UnbondHistory&gt; | List of batch information |

| Key | Type | Description |
| :--- | :--- | :--- |
| `batch_id` | u64 | Batch ID |
| `time` | u64 | Unix block timestamp when this batch was undelegated |
| `bluna_amount` | Uint128 | \(Fee-applied\) amount of bLuna unbonded in this batch |
| `bluna_applied_exchange_rate` | Decimal | bLuna exchange rate at the time of batch undelegation |
| `bluna_withdraw_rate` | Decimal | Conversion rate applied when users later withdraw from this batch |
| `stluna_amount` | Uint128 | \(Fee-applied\) amount of stLuna unbonded in this batch |
| `stluna_applied_exchange_rate` | Decimal | stLuna exchange rate at the time of batch undelegation |
| `stluna_withdraw_rate` | Decimal | Conversion rate applied when users later withdraw from this batch |
| `released` | bool | Indicator on whether is batch is released \(processed as fully undelegated by the contract\) |
