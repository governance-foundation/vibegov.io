// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'vibegov',
  tagline: 'Portable delivery judgement for AI-assisted software.',
  favicon: 'img/vibegov-icon.svg',

  // Set the production url of your site here
  url: 'https://governance-foundation.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/vibegov.io/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'governance-foundation',
  projectName: 'vibegov.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/governance-foundation/vibegov.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          editUrl:
            'https://github.com/governance-foundation/vibegov.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'vibegov Logo',
          src: 'img/vibegov-icon.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/docs/bootstrap', label: 'Bootstrap', position: 'left'},
          {to: '/docs/quickstart', label: 'Quick Start', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/docs/contribute', label: 'Contribute', position: 'left'},
          {
            href: 'https://github.com/governance-foundation/vibegov.io/issues/new/choose',
            label: 'Open Issue',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/governance-foundation/vibegov.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Start Here',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Feedback',
            items: [
              {
                label: 'Open an Issue',
                href: 'https://github.com/governance-foundation/vibegov.io/issues/new/choose',
              },
              {
                label: 'View Issues',
                href: 'https://github.com/governance-foundation/vibegov.io/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Changelog',
                href: 'https://github.com/governance-foundation/vibegov.io/blob/main/CHANGELOG.md',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/governance-foundation/vibegov.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} vibegov. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;



