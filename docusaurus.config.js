// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://vibegov.io/#organization',
    name: 'VibeGov',
    url: 'https://vibegov.io/',
    logo: 'https://vibegov.io/img/vibegov-icon-light.svg',
    description:
      'Repo-local governance framework for AI-assisted software delivery.',
    sameAs: ['https://github.com/governance-foundation/vibegov.io'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://vibegov.io/#website',
    url: 'https://vibegov.io/',
    name: 'VibeGov',
    description:
      'Repo-local governance framework for AI-assisted software delivery.',
    inLanguage: 'en',
    publisher: {
      '@id': 'https://vibegov.io/#organization',
    },
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VibeGov',
  tagline: 'Stop AI coding agents from drifting.',
  favicon: 'img/vibegov-icon-light.svg',

  // Set the production url of your site here
  url: 'https://vibegov.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For custom domain deployment, this should be '/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'governance-foundation',
  projectName: 'vibegov.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  baseUrlIssueBanner: false,

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
          blogTitle: 'VibeGov Blog',
          blogDescription:
            'Governance notes, release updates, and practical patterns for AI-assisted software delivery.',
          editUrl:
            'https://github.com/governance-foundation/vibegov.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  headTags: [
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify(structuredData),
    },
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
      image: 'img/vibegov-social-card.png',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        logo: {
          alt: 'VibeGov Logo',
          src: 'img/vibegov-icon-light.svg',
          srcDark: 'img/vibegov-icon-light.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/docs/bootstrap', label: 'Bootstrap', position: 'left'},
          {to: '/roles', label: 'Roles', position: 'left'},
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
                label: 'Overview',
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
        copyright: `Copyright © ${new Date().getFullYear()} VibeGov.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
