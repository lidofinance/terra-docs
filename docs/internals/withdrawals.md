# Withdrawals

The hub contract processes Luna undelegations in batches, creating them in epochs of **3 days**. Whenever an undelegation is done, an entry storing its information is created:

* `batch_id`: an incrementally-increasing unique identifier of the undelegation batch
* `time`: time of batch undelegation
* `bluna_amount`: a total amount of fee deducted bLuna unbonded in this batch
* `bluna_applied_exchange_rate`: bLuna exchange rate at the time of undelegation
* `bluna_withdraw_rate`: rate applied when later withdrawing undelegated Luna from this batch
* `stluna_amount`: a total amount of stLuna unbonded in this batch
* `stluna_applied_exchange_rate`: stLuna exchange rate at the time of undelegation
* `stluna_withdraw_rate`: rate applied when later withdrawing undelegated Luna from this batch
* `released`: indicator on whether the unbonding period is over for this batch

When a batch is undelegated, `bluna_applied_exchange_rate` and `stluna_applied_exchange_rate` are stored as the bLuna exchange rate and stLuna exchange rate accordingly at the time of undelegation, and `released` is stored as `false`.

Later when users withdraw undelegated Luna, the contract first checks for newly undelegated batches by comparing the current time with the `time` of recent batches. Batches that are older than 21 days are considered undelegated and are marked by updating `released` as `true`.

The `bluna_withdraw_rate` and `stluna_withdraw_rate`, which determine the amount of Luna withdrawable per unbonded bLuna and stLuna accordingly, are also updated to account for slashing events that happened during batch undelegation. The amount of slashed Luna, calculated by comparing the Luna amount initially undelegated and the Luna amount actually received, is deducted pro-rata from the newly undelegated batches by updating the corresponding `withdraw_rate` to the new decreased value.
