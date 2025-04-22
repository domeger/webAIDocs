// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'webAI Developer: Documentation',
  tagline: 'Private AI for Everyone',
  favicon: 'icon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'thewebAI', // GitHub org/user name
  projectName: 'webAIDev',      // GitHub repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',            // Start in dark mode
        disableSwitch: true,            // Hide light/dark toggle
        respectPrefersColorScheme: false, // Ignore OS theme preference
      },
      image: 'fake.png',
      navbar: {
        title: 'webAI',
        logo: {
          alt: 'webAI',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Getting Started with webAI',
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
                label: 'webAI Howto Use Cases',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/RfA3RstBrc?utm_campaign=Early%20Access&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-_8UnvlCRdVjQ_imu8WS5VoAea_yYMK4kupKrEYU1jXbcXr9s0wS8gkwtHEMnmQY7WnnYUi',
              },
              {
                label: 'X',
                href: 'https://x.com/thewebAI',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} webAI. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;