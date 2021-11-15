# Slashing

stLuna and bLuna tokens equally share all losses from slashing events of approved validators. Slashing events decrease the bLuna and stLuna exchange rates, lowering the calculated value of the respective tokens. The stLuna token exchange rate is not pegged, while bLuna's exchange is pegged to $1.0$ through applying a peg fee to all bond and unbond requests whenever the exchange rate is below $1$.

Slashing also applies to the [unbond waiting lists](/internals/withdrawals.md). Unbond requests are organized in batches; in case of a slashing, the losses are distributes proportionally to the amount unbonded in a queued batch, no matter whether the unbond request was sent before or after the infraction. That is, the current implementation does not see any difference between the following scenarios:

1. The infraction happens, a user sends an unbond request, slashing happens (Cosmos SDK **does** slash the unbonded funds, Lido **does** slash the unbonded funds);
2. A user sends an unbond request, the infraction happens, slashing happens (Cosmos SDK does **not** slash the unbonded funds, Lido **does** slash the unbonded funds).