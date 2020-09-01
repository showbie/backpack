const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        modules: true,
        plugins: [require('tailwindcss'), require('autoprefixer')],
        inject: false,
        extract: 'styles.css',
      })
    );
    return config;
  },
};
