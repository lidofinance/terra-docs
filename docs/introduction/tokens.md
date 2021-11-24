# Tokens

Lido Liquid Staking for Terra comes in two flavours: **stLuna** and **bLuna**.

Both stLuna and bLuna tokens are liquid, tokenized representations of staked (bonded) assets on Terra blockchain. They allow stakers to gain liquidity over their staked assets, enabling the locked value in staked assets to be utilized in financial applications.

The main difference between the two tokens is how they manage the staking rewards:

* stLuna's rewards are _compounded_: they are sold to Luna and immediately re-staked, thus increasing the underlying amount of staked Luna and growing stLuna holders' exposure to Luna. This makes stLuna a convenient token to use in liquidity pools and various DeFi protocols;
* bLuna's rewards are sold to UST and sent to a separate [bLuna rewards contract](/contracts/reward.md) that users can claim their rewards from. The bLuna token is perfectly compatible with the Anchor protocol.

## Conversion

The stLuna and bLuna tokens can be easily [converted](/contracts/hub.md) into each other with a single transaction. Please note that [peg fees](/fees.md) are also applied to conversions.
