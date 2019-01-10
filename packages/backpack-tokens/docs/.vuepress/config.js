module.exports = {
  title: 'Backpack Design Tokens',
  themeConfig: {
    nav: [
      { text: 'Colours', link: '/colours/' },
      { text: 'GitHub', link: 'https://github.com/showbie/backpack-tokens' },
    ],
  },
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css',
      },
    ],
  ],

  /**
   * Required for custom components that use both `import`s and
   * `require`s.
   */
  chainWebpack: (config, isServer) => {
    config.resolve.symlinks(false);
  },
};
