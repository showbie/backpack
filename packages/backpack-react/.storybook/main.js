module.exports = {
  stories: ['../src/**/*.story.(md|ts)x'],
  // addons: [
  //   '@storybook/addon-a11y',
  //   '@storybook/addon-knobs',
  //   '@storybook/addon-viewport',
  //   {
  //     name: '@storybook/addon-docs',
  //   },
  // ],
  // webpackFinal: async (config) => {
  //   config.module.rules = [
  //     ...config.module.rules,
  //     {
  //       test: /\.(ts|tsx)?$/,
  //       use: [
  //         {
  //           loader: 'awesome-typescript-loader',
  //           options: {
  //             transpileOnly: true,
  //           },
  //         },
  //         {
  //           loader: 'react-docgen-typescript-loader',
  //           options: {},
  //         },
  //       ],
  //     },
  //   ];
  //   config.plugins = [
  //     ...config.plugins,
  //     new webpack.DefinePlugin({
  //       __DEV__: process.env.NODE_ENV === 'development',
  //     }),
  //   ];
  //   return config;
  // },
};
