module.exports = {
  extends: ['@showbie/eslint-config'],
  rules: {},
  overrides: [
    {
      files: ['packages/**/*.{ts,tsx}'],
      extends: [
        '@showbie/eslint-config/react',
        'plugin:react-hooks/recommended',
      ],
      env: {
        node: true,
      },
      globals: {
        __DEV__: 'readonly',
      },
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
