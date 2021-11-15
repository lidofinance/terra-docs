module.exports = {
  docs: [
    'introduction',
    'fees',
    'slashing',
    'security',
    'deployed-contracts',
    {
      type: 'category',
      label: 'API',
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
