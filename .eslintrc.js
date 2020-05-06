module.exports = {
  extends: ['@showbie/eslint-config'],
  rules: {},
  overrides: [
    {
      files: ['packages/**/*.ts'],
      extends: [
        '@showbie/eslint-config/react',
        'plugin:react-hooks/recommended',
      ],
      env: {
        node: true,
      },
    },
  ],
};
