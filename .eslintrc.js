module.exports = {
  extends: ['@showbie/eslint-config'],
  rules: {},
  overrides: [
    {
      files: ['packages/generator-backpack/**/*.ts'],
      extends: ['@showbie/eslint-config/react'],
      env: {
        node: true,
      },
    },
  ],
};
