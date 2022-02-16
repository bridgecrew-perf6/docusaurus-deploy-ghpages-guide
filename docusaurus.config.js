// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Guía',
  tagline: 'Despliegue a Github Pages',
  url: 'https://eduardoviscencio.github.io',
  baseUrl: '/docusaurus-deploy-ghpages-guide/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'eduardoviscencio', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          routeBasePath: '/',
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Docusaurus - Github Pages',
        logo: {
          alt: 'Docusaurus - Github Pages',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
        ],
      },
      footer: {
        copyright: `Eduardo Viscencio 👋`,
      },
      prism: {
        additionalLanguages: ['yaml'],
      },
    }),
};

module.exports = config;
