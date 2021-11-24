module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/overview',
        'introduction/tokens',
        'introduction/fees',
        'introduction/slashing',
        'introduction/security',
        'introduction/deployed-contracts',
      ],
    },
    {
      type: 'category',
      label: 'Contracts',
      items: [
        'contracts/hub',
        'contracts/reward',
        'contracts/rewards_dispatcher',
        'contracts/validators_registry',
        'contracts/airdrop-registry',
        'contracts/stLuna_and_bLuna'
      ],
    },
    {
      type: 'category',
      label: 'Internals',
      items: [
        'internals/architecture',
        'internals/exchange-rates',
        'internals/withdrawals',
        'internals/rewards',
      ],
    },
  ],
};
