const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Lido Terra docs',
  tagline: 'Documentation for the Lido Terra staking protocol',
  url: 'https://lidofinance.github.io',
  baseUrl: '/terra-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lidofinance', // Usually your GitHub org/user name.
  projectName: 'terra-docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Lido Terra Docs',
        logo: {
          alt: 'Lido Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/lidofinance',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust', 'json'],
      },
    }),

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      { indexBlog: false, docsRouteBasePath: '/', indexPages: true },
    ],
  ],
});
