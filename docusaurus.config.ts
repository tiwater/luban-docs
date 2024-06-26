import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Fourier Builder',
  tagline: 'Design Your Own Robots, Visually and Effortlessly',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://developer.fftai.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tiwater', // Usually your GitHub org/user name.
  projectName: 'luban-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          exclude: ['**/98-advanced-guides/**'],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Fourier Developer',
      logo: {
        alt: 'Fourier Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo-white.png',
      },
      items: [
        {
          to: '/docs/category/getting-started',
          label: 'Getting Started',
        },
        {
          to: '/docs/category/workflow',
          label: 'Workflow',
        },
        {
          to: '/docs/category/ai',
          label: 'AI',
        },
        {
          to: '/docs/category/guides',
          label: 'Guides',
        },
        {
          to: '/docs/category/reference',
          label: 'Reference',
        },
        {
          to: '/blog/',
          label: 'Blog',
        },
        {
          href: 'https://builder.fftai.dev',
          label: 'Builder',
          position: 'right',
        },        {
          href: 'https://github.com/fftai',
          'aria-label': 'GitHub repository',
          className: 'header-github-link',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  clientModules: [require.resolve('./src/components/favicon-switcher')],
};

export default config;
