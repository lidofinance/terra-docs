# Rewards

## stLuna

#### stLuna Rewards

stLuna tokens accrue **Luna** rewards, generated from delegation rewards of underlying Luna delegations. Delegation rewards, collected in various native token denominations \(TerraUSD, TerraSDR, Luna, etc.\), are swapped for **Luna**. Swapped **Luna** is then re-staked to the [Hub contract](/contracts/hub#internal-bondrewards), thereby increasing the stLuna exchange rate.

#### stLuna Unbonding

When a user decides to withdraw their staked Luna, the unbond amount is calculated as follows:

$$
unbonded = \frac{stLunaTokens}{stLunaExchangeRate}
$$

This means that if you staked your $1$ Luna for stLuna at $stLunaExchangeRate=1.0$ and decided to withdraw later at $stLunaExchangeRate=1.23$, you will receive $1.23$ Luna (the exchange rate grows due to rewards compounding).

## bLuna

#### bLuna Rewards

bLuna tokens accrue **TerraUSD** rewards, generated from delegation rewards of underlying Luna delegations. Delegation rewards, collected in various native token denominations \(UST, TerraSDR, Luna, etc.\), are swapped for UST. Swapped UST is then distributed pro-rata to bLuna holders.

#### Claiming bLuna Rewards

Holders can send a request to the [bLuna rewards contract](/contracts/reward), which prompts the transfer of accrued rewards to their account. As rewards accrue during the user's period of ownership, transferring bLuna to a different user automatically credits accrued rewards to the previous holder.

#### bLuna Unbonding

When a user decides to withdraw their staked Luna, the unbond amount is calculated as follows.

If bLuna exchange rate $= 1$:

$$
unbonded = \frac{bLunaTokensAmount}{bLunaExchangeRate}
$$

If bLuna exchange rate $<1$:

$$
unbonded =  \frac{bLunaTokensAmount \cdot (1 - bLunaPegRecoveryFee)}{bLunaExchangeRate}
$$