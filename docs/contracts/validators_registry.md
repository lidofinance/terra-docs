# Validators Registry

Approved validators whitelist.

## Config

| Key | Type | Description |
| :--- | :--- | :--- |
| `owner` | CanonicalAddr | Owner of the contract |
| `hub_contract` | CanonicalAddr | Contract address of [Hub](hub) |

```json
{
  "owner": "terra1...",
  "hub_contract": "terra1..."
}
```

## Validator

| Key | Type | Description |
| :--- | :--- | :--- |
| `total_delegated` | Uint128 | Total amount of tokens delegated to this validator from the Hub address |
| `address` | String | Operator address |

```json
{
  "total_delegated": "10000",
  "address": "terravaloper1..."
}
```

## InitMsg

```rust
pub struct InstantiateMsg {
    pub registry: Vec<Validator>,
    pub hub_contract: String,
}
```

```json
{
  "registry": [
    {
      "address": "terravaloper1..."
    },
    {
      "address": "terravaloper1..."
    }
  ],
  "hub_contract": "terra1..."
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `hub_contract` | CanonicalAddr | Contract address of [Hub](hub) |
| `registry` | Vec<Validator\> | List of whitelisted validators

## ExecuteMsg

### `AddValidator`

Adds a validator to the registry.

Can only be executed by the owner.

```rust
pub enum ExecuteMsg {
    AddValidator {
        validator: Validator
    },
}
```

```json
{
  "add_validator": {
    "validator": {
      "address": "terravaloper1..."
    }
  }
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `validator` | Validator | Validator to add to the registry

### `RemoveValidator`

Removes a validator from the registry.

Can only be executed by the owner.

```rust
pub enum ExecuteMsg { 
    RemoveValidator {
        address: String
    },
}
```

```json
{
  "remove_validator": {
    "address": "terravaloper1..."
  }
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `address` | Validator | Address of a to remove from the registry

### `UpdateConfig`

Updates a registry's configuration.

Can only be issued by the owner.

```rust
pub enum ExecuteMsg {
    UpdateConfig {
        owner: Option<String>,
        hub_contract: Option<String>,
    },
}
```

```json
{
  "owner": "terra1...",
  "hub_contract": "terra1..."
}
```

| Key | Type | Description |
| :--- | :--- | :--- |
| `owner`\* | CanonicalAddr | New owner of the contract |
| `hub_contract`\* | CanonicalAddr | New contract address of [Hub](hub) |

\* = optional

## QueryMsg

### `GetValidatorsForDelegation`

Returns validators sorted by total_delegated amount.

```rust
pub enum QueryMsg {
    GetValidatorsForDelegation {},
}
```

```json
{
  "get_validators_for_delegation": {}
}
```

| Key | Type | Description |
| :--- | :--- | :--- |

Returns a list of [`Validator`](validators_registry#validator):

```json
[
  {
    "total_delegated": "30000",
    "address": "terravaloper1..."
  },
  {
    "total_delegated": "20000",
    "address": "terravaloper1..."
  },
  {
    "total_delegated": "10000",
    "address": "terravaloper1..."
  }
]
```

### `Config`

Returns the current configuration of the registry.

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

| Key | Type | Description |
| :--- | :--- | :--- |

Returns a [`Config`](validators_registry#config) struct.