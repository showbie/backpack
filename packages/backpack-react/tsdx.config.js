const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        modules: {
          // https://github.com/webpack/loader-utils#interpolatename
          generateScopedName: '[folder]__[local]__[hash:base64:5]',
        },
        plugins: [require('autoprefixer')],
        extract: 'styles.css',
      })
    );

    return config;
  },
};
