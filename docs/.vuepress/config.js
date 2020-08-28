const path = require('path');

module.exports = {
  title: 'Showbie Backpack',
  themeConfig: {
    repo: 'showbie/backpack',
    nav: [
      { text: 'Colour', link: '/colour/showbie/' },
      { text: 'Type', link: '/type/showbie/' },
      { text: 'GitHub', link: 'https://github.com/showbie/backpack' },
    ],

    sidebar: {
      '/colour/': [
        {
          title: 'Colour',
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

  postcss: {
    plugins: [
      require('tailwindcss')('./docs/.vuepress/tailwind.config.js'),
      require('autoprefixer'),
    ],
  },

  /**
   * Required for custom components that use both `import`s and
   * `require`s.
   */
  chainWebpack: (config, isServer) => {
    config.resolve.symlinks(false);
  },

  alias: {
    styles: path.resolve(__dirname, './styles'),
  },
};
