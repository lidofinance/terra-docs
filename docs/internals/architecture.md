# Architecture

![Architecture of stLuna and bLuna](/img/architecture.png)

## General overview

The Lido Liquid Staking for Terra implementation consists of the following contracts:

* **The Hub contract.** [The Hub contract](/contracts/hub.md) acts as the central hub for all minted stLuna and bLuna. Native Luna tokens received from users are delegated from here, and undelegations from bLuna unbond requests are also handled from this contract. Rewards generated from delegations are withdrawn to the [Rewards Dispatcher contract](/contracts/rewards_dispatcher.md);
* **The stLuna Token contract.** A Cw20 constant balance token (not rebasable) that handles balances and transfers. Note that all amounts are handled as `Uint128` (128-bit integers with JSON string representation). Only the Hub contract is authorized to mint new tokens;
* **The bLuna Token contract.** A Cw20 constant balance token (not rebasable) that handles balances and transfers. Note that all amounts are handled as `Uint128` (128-bit integers with JSON string representation). Only the Hub contract is authorized to mint new tokens. The `IncreaseBalance` and `DecreaseBalance` messages trigger user index updates in [the bLuna Rewards contract](/contracts/reward.md);
* **The Rewards Dispatcher contract.** Hub's staking rewards are claimed in various native token denominations \(TerraUSD, TerraSDR, Luna, etc.\) to the Reward Dispatcher's address. The Rewards Dispatcher then distributes the rewards between stLuna and bLuna (see below);
* **The bLuna Reward contract.** The Reward contract contains logic for distributing Luna delegation rewards to holders of bLuna. After the bLuna share of delegation rewards is sent to the bLuna Reward contract in UST, they can then be distributed to bLuna holders. Holders of bLuna can then send a request to this contract to claim their accrued rewards. The Reward contract also stores the balance and reward index values for all bLuna holders, which is used to calculate the amount of bLuna rewards that a specific holder has accrued.

## Rewards Processing

Hub's staking rewards are claimed in various native token denominations \(TerraUSD, TerraSDR, Luna, etc.\) to the Reward Dispatcher's address. After that, the Hub sends the `SwapToRewardDenom` and `DispatchRewards` messages to the Rewards Dispatcher contract. The `SwapToRewardDenom` message contains two fields, `bluna_total_bond_amount` and `stluna_total_bond_amount`. The rewards are distributed between stLuna and bLuna according to the `bluna_total_bond_amount / stluna_total_bond_amount`:

1. All non-Luna and non-UST rewards are swapped to UST;
2. Depending on how the obtained Luna to UST rewards ratio corresponds to the target `bluna_total_bond_amount / stluna_total_bond_amount` ratio, either the required amount of Luna is swapped to UST, or the required amount of UST is swapped to Luna.

After the rewards are swapped to target denominations, the `DispatchRewards` message is processed, where the Lido operating costs fee is applied to both stLuna and bLuna rewards.

## Conversions

At any moment, a user can convert their bLuna to stLuna and vice versa by sending a `Send` message to either contract and specifying the Hub contract as the recipient. The Hub contract will then calculate and mint the required amount of the corresponding token using the current exchange rates.
