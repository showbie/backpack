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
  ],
};
