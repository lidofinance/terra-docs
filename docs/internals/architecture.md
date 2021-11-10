# Architecture

![Architecture of stLuna and bLuna](/img/architecture.png)

## General overview

The Lido Liquid Staking for Terra implementation consists of the following contracts:

* **The Hub contract.** The Hub contract acts as the central hub for all minted stLuna and bLuna. Native Luna tokens received from users are delegated from here, and undelegations from bLuna unbond requests are also handled from this contract. Rewards generated from delegations are withdrawn to the Rewards Dispatcher contract. 