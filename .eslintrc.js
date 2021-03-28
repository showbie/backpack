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
      files: ['docs/**/*.{ts,tsx}'],
      extends: ['@showbie/eslint-config/react'],
    },
    {
      files: ['docs/**/*.js'],
      env: {
        node: true,
      },
    },
  ],
};
