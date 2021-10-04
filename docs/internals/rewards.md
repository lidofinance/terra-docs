# Rewards

## bLuna Rewards

bLuna tokens accrue **TerraUSD** rewards, generated from delegation rewards of underlying Luna delegations. Delegation rewards, collected in various native token denominations \(TerraUSD, TerraSDR, Luna, etc.\), are swapped for TerraUSD. Swapped TerraUSD is then distributed pro-rata to bLuna holders.

### Claiming Rewards

Holders can send a request to the [bLuna rewards contract](/contracts/reward), which prompts the transfer of accrued rewards to their account. As rewards accrue during the user's period of ownership, transferring bLuna to a different user automatically credits accrued rewards to the previous holder.

## stLuna rewards

stLuna tokens accrue **Luna** rewards, generated from delegations rewards of underlying Luna delegations. Delegation rewards, collected in various native token denominations \(TerraUSD, TerraSDR, Luna, etc.\), are swapped for **Luna**. Swapped **Luna** is then restaked to the [Hub contract](/contracts/hub#internal-bondrewards), thereby increasing stLuna exchange rate.
So when a user wants to withdraw his Luna, he will get all his bonded Luna + restaked stLuna rewards.