# Fees

## Direct fees

The following direct fees are collected:

* **Peg recovery fee.** bLuna tokens equally share all losses from slashing events of whitelisted validators. Slashing events decrease the bLuna exchange rate, lowering the calculated value of a bLuna token. The protocol applies a fee of 0.5% (configurable) to bLuna mints and burns whenever the exchange rate is below 1, targeting a gradual recovery to a one-to-one peg. Note: no peg fee is applied to stLuna bonds and unbonds (stLuna is not pegged).
* **Lido operating costs fee.** All accrued rewards are taxed at a configurable rate (at the launch of stLuna the fee will be equal to 0.0%).

## Shared slashing risks

bLuna tokens equally share all losses from slashing events of whitelisted validators. Slashing events decrease the bLuna exchange rate, lowering the calculated value of a bLuna token.

This also applies to the unbond waiting lists. Unbond requests are organized in batches; in case of a slashing, the losses are distributes proportionally to the amount unbonded in queued batches, no matter whether the unbond request was sent before or after the infraction. That is, the current implementation does not see any difference between the following scenarios:

1. The infraction happens, a user sends an unbond request, slashing happens (Cosmos SDK **does** slash the unbonded funds, Lido **does** slash the unbonded funds);
2. A user sends an unbond request, the infraction happens, slashing happens (Cosmos SDK does **not** slash the unbonded funds, Lido **does** slash the unbonded funds).
