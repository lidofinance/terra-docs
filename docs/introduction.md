---
slug: /
---

# Liquid Staking for Terra

The Lido Terra Liquid Staking Protocol allows its users to earn staking rewards for their staked Luna without locking Luna or maintaining staking infrastructure.

Users can deposit Luna to the Lido smart contracts and receive stLuna or bLuna tokens in return (see below for the difference between the two tokens). The smart contract then stakes tokens with the DAO-picked node operators. 

Unlike staked Luna, the stLuna and bLuna tokens are free from the limitations associated with a lack of liquidity and can be transferred at any time. Both stLuna and bLuna are constant balance tokens (not rebasable).

## stLuna and bLuna

Both stLuna and bLuna tokens are liquid, tokenized representations of staked (bonded) assets in a PoS blockchain. They allow stakers to gain liquidity over their staked assets, enabling the locked value in staked assets to be utilized in financial applications.

The main difference between the two tokens is how they manage the staking rewards:

* stLuna's rewards are _compounded_: they are sold to Luna and immediately re-staked, thus increasing the underlying amount of staked Luna and growing stLuna holders' exposure to Luna. This makes stLuna a convenient token to use in liquidity pools and various DeFi protocols;
* bLuna's rewards are sold to UST and sent to a separate [bLuna rewards contract](/contracts/reward.md) that users can claim their rewards from. The bLuna token is perfectly compatible with the Anchor protocol.

## Conversion

The stLuna and bLuna tokens can be easily [converted](/contracts/hub.md) into each other with a single transaction. Please note that [peg fees](/fees.md) are also applied to conversions.
