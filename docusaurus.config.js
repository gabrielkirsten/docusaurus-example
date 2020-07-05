module.exports = {
  title: 'KtMapper',
  tagline: 'A Kotlin "object-to-object" mapper based on naming conventions',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'MovilePay',
  projectName: 'KtMapper', 
  themeConfig: {
    navbar: {
      title: 'KtMapper',
      logo: {
        alt: 'MovilePay',
        src: 'img/mpay_logo.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/MovilePay/kt-mapper',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'MovilePay',
          items: [
            {
              label: 'Jobs',
              href: 'https://boards.greenhouse.io/movilepay',
            },
          ],
        },
      ],
      copyright: `<img class="footer__logo" src="/img/mpay_logo.png" alt="MovilePay"> </br> Copyright © ${new Date().getFullYear()} MovilePay. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
