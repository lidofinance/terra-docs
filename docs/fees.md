# Fees

The following direct fees are collected:

* **Peg recovery fee.** Only applies to bLuna token. Slashing events decrease the bLuna exchange rate, lowering the calculated value of a bLuna token. The protocol applies a fee of $0.5\%$ (configurable) to bLuna mints and burns whenever the exchange rate is below $1$, targeting a gradual recovery to a one-to-one peg. 
* **Lido operating costs fee.** All accrued rewards are taxed at a configurable rate (at the launch of stLuna the fee will be equal to $0.0\%$, but later it will be increased up to $5\%$).

**Note 1: no peg fee is applied to stLuna bonds and unbonds (stLuna is not pegged).**

**Note 2: the peg recovery fee is applied to conversions between stLuna and bLuna.**