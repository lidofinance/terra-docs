module.exports = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Contracts',
      items: [
        'contracts/hub',
        'contracts/reward',
        'contracts/rewards_dispatcher',
        'contracts/validators_registry',
        'contracts/airdrop-registry',
      ],
    },
    'fees',
    {
      type: 'category',
      label: 'Internals',
      items: [
        'internals/exchange-rate',
        'internals/withdrawals',
        'internals/rewards',
      ],
    },
    'security',
    'deployed-contracts',
  ],
};
