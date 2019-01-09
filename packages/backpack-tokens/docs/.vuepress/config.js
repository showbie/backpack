module.exports = {
  title: 'Backpack Design Tokens',
  themeConfig: {
    nav: [{ text: 'Colours', link: '/colours/' }],
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
  chainWebpack: (config, isServer) => {
    config.resolve.symlinks(false);
  },
};
