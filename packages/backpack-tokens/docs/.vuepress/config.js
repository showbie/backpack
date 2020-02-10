module.exports = {
  title: 'Showbie Backpack',
  themeConfig: {
    nav: [
      { text: 'Colours', link: '/colours/showbie/' },
      { text: 'Type', link: '/type/showbie/' },
      { text: 'GitHub', link: 'https://github.com/showbie/backpack-tokens' },
    ],

    sidebar: {
      '/colours/': [
        {
          title: 'Colours',
          collapsable: false,
          children: ['showbie/', 'socrative/', 'brands/'],
        },
        {
          title: 'Exploration',
          collapsable: false,
          children: ['unconfirmed/', 'graveyard/', 'grid/'],
        },
      ],
      '/type/': [
        {
          title: 'Typography',
          collapsable: false,
          children: ['showbie/', 'socrative/'],
        },
      ],
    },
  },
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:500,700,800',
      },
    ],
  ],

  plugins: [
    [
      'register-components',
      {
        componentsDir: 'components',
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
