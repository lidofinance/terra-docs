# Exchange Rates

## bLuna Exchange Rate
The bLuna exchange rate is the rate of conversion used when bLuna is minted or redeemed. Defined as the amount of bonded Luna per bLuna in existence, the value initially starts with 1, and decreases with slashing events.

$$
    bLunaExchangeRate = \frac{lunaBonded}{bLunaSupply}
$$

Shared Slashing Risk
bLuna tokens equally share all losses from slashing events of whitelisted validators. Slashing events decrease the bLuna exchange rate, lowering the calculated value of a bLuna token.
The protocol applies a fee of 0.5% to bLuna mints and burns whenever the exchange rate is below 1, targeting a gradual recovery to a one-to-one peg.

## stLuna Exchange Rate

stLuna's exchange rate is not pegged in any way. Due to the fact that stLuna's rewards are compounded, the exchange rate is expected to grow with time (unless there is a slashing event).

$$
    stLunaExchangeRate = \frac{lunaBonded}{stLunaSupply}
$$