module.exports = {
  extends: ['@showbie/eslint-config'],
  rules: {},
  overrides: [
    {
      files: ['packages/**/*.ts'],
      extends: ['@showbie/eslint-config/react'],
      env: {
        node: true,
      },
    },
    {
      files: ['docs/**/*.vue'],
      extends: ['plugin:vue/vue3-recommended', 'prettier/vue'],
    },
    {
      files: ['docs/**/*.js'],
      env: {
        node: true,
      },
    },
  ],
};
