# Airdrop Registry

The Airdrop Registry contract manages the fabrication of messages relevant to claiming and swapping tokens airdropped to Luna delegators. Airdropped tokens to the [bLuna Hub](hub) contract is swapped for Terra USD and distributed as bLuna rewards.

The Airdrop Registry is initially configured to support airdrops of [ANC](https://docs.anchorprotocol.com/protocol/anchor-token-anc) and [Mirror Protocol](https://mirror.finance)'s governance token, [MIR](https://docs.mirror.finance/protocol/mirror-token-mir). When a new airdrop is distributed to Luna stakers, a new Airdrop Registry contract that includes the message interface for claiming and swapping the airdrop token can be deployed and its address newly registered to the bLuna Hub contract.

## Config

| Key | Type | Description |
| :--- | :--- | :--- |
| `owner` | CanonicalAddr | Address of contract owner |
| `hub_contract` | HumanAddr | Contract address of [bLuna Hub](hub) |
| `reward_contract` | HumanAddr | Contract address of [bLuna Reward](reward) |
| `airdrop_tokens` | Vec&lt;String&gt; | List of supported airdrop token tickers |

## InitMsg



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct InitMsg {
    pub hub_contract: HumanAddr,
    pub reward_contract: HumanAddr,
}
```



```json
{
  "hub_contract": "terra1...", 
  "reward_contract": "terra1..." 
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `hub_contract` | HumanAddr | Contract address of [bLuna Hub](hub) |
| `reward_contract` | HumanAddr | Contract address of [bLuna Reward](reward) |

## ExecuteMsg

### `UpdateConfig`

Updates the Airdrop Registry contract configuration. Can only be issued by contract owner.



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    UpdateConfig {
        owner: Option<HumanAddr>, 
        hub_contract: Option<HumanAddr>, 
        reward_contract: Option<HumanAddr>, 
    }
}
```



```json
{
  "update_config": {
    "owner": "terra1...", 
    "hub_contract": "terra1...", 
    "reward_contract": "terra1..." 
  }
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `owner`\* | HumanAddr | Address of new owner |
| `hub_contract`\* | HumanAddr | New contract address of [bLuna Hub](hub) |
| `reward_contract`\* | HumanAddr | New contract address of [bLuna Reward](reward) |

\* = optional

### `AddAirdropInfo`

Adds support for a new airdrop to Luna stakers. Can only be issued by contract owner.



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    AddAirdropInfo {
        airdrop_token: String, 
        airdrop_info: AirdropInfo, 
    }
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct AirdropInfo {
    pub airdrop_token_contract: HumanAddr, 
    pub airdrop_contract: HumanAddr, 
    pub airdrop_swap_contract: HumanAddr, 
    pub swap_belief_price: Option<Decimal>, 
    pub swap_max_spread: Option<Decimal>, 
}
```



```json
{
  "add_airdrop_info": {
    "airdrop_token": "MIR", 
    "airdrop_info": {
      "airdrop_token_contract": "terra1...", 
      "airdrop_contract": "terra1...", 
      "airdrop_swap_contract": "terra1...", 
      "swap_belief_price": null, 
      "swap_max_spread": null 
    }
  }
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `airdrop_token` | String | Ticker of airdrop token |
| `airdrop_info` | AirdropInfo | Airdrop token information |

| Key | Type | Description |
| :--- | :--- | :--- |
| `airdrop_token_contract` | HumanAddr | Contract address of airdrop token's Cw20 token contract |
| `airdrop_contract` | HumanAddr | Contract address of airdrop contract to claim airdrop token |
| `airdrop_swap_contract` | HumanAddr | Contract address of swap contract to convert airdrop token to TerraUSD \(e.g. Terraswap Pair\) |
| `swap_belief_price`\* | Decimal | Expected conversion rate when swapping airdropped token to TerraUSD. |
| `swap_max_spread`\* | Decimal | Maximum allowed spread when swapping airdropped token to TerraUSD. |

\* = optional

### `UpdateAirdropInfo`

Updates information for an already supported airdrop token. Can only be issued by contract owner.



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    UpdateAirdropInfo {
        airdrop_token: String, 
        airdrop_info: AirdropInfo, 
    }
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct AirdropInfo {
    pub airdrop_token_contract: HumanAddr, 
    pub airdrop_contract: HumanAddr, 
    pub airdrop_swap_contract: HumanAddr, 
    pub swap_belief_price: Option<Decimal>, 
    pub swap_max_spread: Option<Decimal>, 
}
```



```json
{
  "update_airdrop_info": {
    "airdrop_token": "MIR", 
    "airdrop_info": {
      "airdrop_token_contract": "terra1...", 
      "airdrop_contract": "terra1...", 
      "airdrop_swap_contract": "terra1...", 
      "swap_belief_price": null, 
      "swap_max_spread": null 
    }
  }
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `airdrop_token` | String | Ticker of airdrop token |
| `airdrop_info` | AirdropInfo | New airdrop token information |

| Key | Type | Description |
| :--- | :--- | :--- |
| `airdrop_token_contract` | HumanAddr | New contract address of airdrop token's Cw20 token contract |
| `airdrop_contract` | HumanAddr | New contract address of airdrop contract to claim airdrop token |
| `airdrop_swap_contract` | HumanAddr | New contract address of swap contract to convert airdrop token to TerraUSD |
| `swap_belief_price`\* | Decimal | New expected conversion rate when swapping airdropped token to TerraUSD |
| `swap_max_spread`\* | Decimal | New maximum allowed spread when swapping airdropped token to TerraUSD |

\* = optional

### `RemoveAirdropInfo`

Removes support for a currently supported airdrop. Can only be issued by contract owner.



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    RemoveAirdropInfo {
        airdrop_token: String, 
    }
}
```



```json
{
  "remove_airdrop_info": {
    "airdrop_token": "MIR" 
  }
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `airdrop_token` | String | Ticker of airdrop token |

### `FabricateMIRClaim`

Fabricates a message to claim MIR airdrop. Can only be issued by [Hub](hub).



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    FabricateMIRClaim {
        stage: u8, 
        amount: Uint128, 
        proof: Vec<String>, 
    }
}
```



```json
{
  "fabricate_mir_claim": {
    "stage": 5, 
    "amount": "100000000", 
    "proof": [
      "7132d2bab1c85ecda6aa6b417e7b2d085675c1139c5cf5b5556d1c10502ddd53", 
      "21ca861414821082c98620ba1eef9c91f41309a79c043d5615d51d26cc796b61", 
      "03cd093fcf64825e33a18eaf86bc828049b1ee1a7348ce60d90ee07b3858bb83", 
      "b55feb67c2a3540502ea11349ff75bc83ebab03626a2c7b1d4333a7776fd2178", 
      "6f96345d8d8e8eeea738f51c5f31ce01122ce9e93f7f1a978860263ffc29462e", 
      "878ec313d28ef91384b426f0c81c2bce00c817added7bdb1e075250df46b0a0d" 
    ]
  }
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `stage` | u8 | MIR airdrop stage |
| `amount` | Uint128 | Amount of MIR airdrop claimable by bLuna at this stage |
| `proof` | Vec&lt;String&gt; | Merkle proof to prove airdrop eligibility |

### `FabricateANCClaim`



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    FabricateANCClaim {
        stage: u8, 
        amount: Uint128, 
        proof: Vec<String>, 
    }
}
```



```json
{
  "fabricate_anc_claim": {
    "stage": 5, 
    "amount": "100000000", 
    "proof": [
      "7132d2bab1c85ecda6aa6b417e7b2d085675c1139c5cf5b5556d1c10502ddd53", 
      "21ca861414821082c98620ba1eef9c91f41309a79c043d5615d51d26cc796b61", 
      "03cd093fcf64825e33a18eaf86bc828049b1ee1a7348ce60d90ee07b3858bb83", 
      "b55feb67c2a3540502ea11349ff75bc83ebab03626a2c7b1d4333a7776fd2178", 
      "6f96345d8d8e8eeea738f51c5f31ce01122ce9e93f7f1a978860263ffc29462e", 
      "878ec313d28ef91384b426f0c81c2bce00c817added7bdb1e075250df46b0a0d" 
    ]
  }
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `stage` | u8 | MIR airdrop stage |
| `amount` | Uint128 | Amount of MIR airdrop claimable by bLuna at this stage |
| `proof` | Vec&lt;String&gt; | Merkle proof to prove airdrop eligibility |

## QueryMsg

### `Config`

Gets the Airdrop Registry contract configuration.



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
    pub owner: HumanAddr, 
    pub hub_contract: HumanAddr, 
    pub reward_contract: HumanAddr, 
    pub airdrop_tokens: Vec<String>, 
}
```



```json
{
  "owner": "terra1...", 
  "hub_contract": "terra1...", 
  "reward_contract": "terra1...", 
  "airdrop_tokens": [
    "MIR"
  ]
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `owner` | HumanAddr | Address of contract owner |
| `hub_contract` | HumanAddr | Contract address of [bLuna Hub](hub) |
| `reward_contract` | HumanAddr | Contract address of [bLuna Reward](reward) |
| `airdrop_tokens` | Vec&lt;String&gt; | List of supported airdrop token tickers |

### `AirdropInfo`

Gets information for the specified airdrop token if the `airdrop_token` field is filled. Gets information for all airdrop tokens if the `airdrop_token` field is not filled.



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
    AirdropInfo {
        airdrop_token: Option<String>, 
        start_after: Option<String>, 
        limit: Option<u32>, 
    }
}
```



```json
{
  "airdrop_info": {
    "airdrop_token": "MIR", 
    "start_after": null, 
    "limit": null 
  }
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `airdrop_token`\* | String | Ticker of airdrop token to query information |
| `start_after`\* | String | Airdrop token ticker to start query |
| `limit`\* | u32 | Maximum number of query entries |

\* = optional

### `AirdropInfoResponse`



```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct AirdropInfoResponse {
    pub airdrop_info: Vec<AirdropInfoElem>, 
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct AirdropInfoElem {
    pub airdrop_token: String, 
    pub info: AirdropInfo, 
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct AirdropInfo {
    pub airdrop_token_contract: HumanAddr, 
    pub airdrop_contract: HumanAddr, 
    pub airdrop_swap_contract: HumanAddr, 
    pub swap_belief_price: Option<Decimal>, 
    pub swap_max_spread: Option<Decimal>, 
}
```



```json
{
  "airdrop_info": [
    {
      "airdrop_token": "MIR", 
      "info": {
        "airdrop_token_contract": "terra1...", 
        "airdrop_contract": "terra1...", 
        "airdrop_swap_contract": "terra1...", 
        "swap_belief_price": null, 
        "swap_max_spread": null 
      }
    }
  ]
}
```



| Key | Type | Description |
| :--- | :--- | :--- |
| `airdrop_info` | Vec&lt;AirdropInfoElem&gt; | Information of the specified airdrop token |

| Key | Type | Description |
| :--- | :--- | :--- |
| `airdrop_token` | String | Airdrop token's ticker |
| `info` | AirdropInfo | Airdrop token information |

| Key | Type | Description |
| :--- | :--- | :--- |
| `airdrop_token_contract` | HumanAddr | Contract address of airdrop token's Cw20 token contract |
| `airdrop_contract` | HumanAddr | Contract address of airdrop contract to claim airdrop token |
| `airdrop_swap_contract` | HumanAddr | Contract address of swap contract to convert airdrop token to TerraUSD |
| `swap_belief_price`\* | Decimal | Expected conversion rate when swapping airdropped token to TerraUSD |
| `swap_max_spread`\* | Decimal | Maximum allowed spread when swapping airdropped token to TerraUSD |

\* = optional
