# Stake Distribution

Lido tries to distribute the stake evenly across all validators. Given a single delegation, the exact number of validators that will receive delegations and the amount that they will receive depends on the current distribution of stake. We take a sorted (ASC) list of validators, calculate the desired amount that each validator should have `target_stake = (total delegated + delegation_amount) / num_validators` and begin adding stake up to the desired amount, starting from the validator with the least stake. The exact amount of a single delegation is calculated as `target_stake - validator_stake`, and you'll have as many delegations as it takes to "drain" the delegation_amount.

You can check out the implementation of this algorithm [here](https://github.com/lidofinance/lido-terra-contracts/blob/main/contracts/lido_terra_validators_registry/src/common.rs#L19). 

