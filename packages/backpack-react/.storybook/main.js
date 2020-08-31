module.exports = {
  stories: ['../src/**/*.story.@(md|ts)x'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-docs',
    },
  ],
};
