# Security

All Lido Liquid Staking smart contracts on Terra have been audited by [Oak Security](https://www.oaksecurity.io). The report is available [here](https://github.com/oak-security/audit-reports/blob/master/Lido%20Finance/2021-11-23%20Audit%20Report%20-%20Lido%20Finance%20stLuna%20v1.2.pdf.).

# Ownership
[Since late 2021](https://research.lido.fi/t/lido-on-terra-protocol-upgrade/1413), all deployed Lido smart contracts on Terra are owned by a 4/7 multisig composed of reputable ecosystem representatives:

| # | From |
| :--- | :--- |
| 1 | Anchor Protocol |
| 2 | Delphi Digital |
| 3 | P2P Validator |
| 4 | Chorus One |
| 5 | DSRV |
| 6 | Staking Fund |
| 7 | Everstake |

| Account | Address |
| :--- | :--- |
| Lido Instantiator | [terra1f0mdzpp5c9yj5tnx2zdrjr68dgstqdyfz4arlz](https://terrasco.pe/mainnet/address/terra1f0mdzpp5c9yj5tnx2zdrjr68dgstqdyfz4arlz) |

Anyone can verify the nature of the multisig account using this [query](https://lcd.terra.dev/cosmos/tx/v1beta1/txs/21A173D5292D3C09F6F24041828572A39C983B70BD7F56534B94CC1B53473BD9). It shows the upgrade transaction of the multisig and contains the seven multisig addresses, their pubkeys and the threshold setting.

Lido is working on a cross-chain solution to connect its Ethereum-based governance to its smart contracts on Terra using Wormhole's arbitrary messaging capabilities. The design draft is available [here](https://hackmd.io/@eY2bTPO8RkmGW0Gm_lg0cw/HyQw4yjCY).
