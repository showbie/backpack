module.exports = {
  darkMode: 'class',
  purge: {
    content: ['./src/**/*.(md|ts)x'],
    options: {
      safelist: ['dark'],
    },
  },
  theme: {
    // eslint-disable-next-line no-unused-vars
    typography: (theme) => ({}),
    extend: {
      colors: {},
      // eslint-disable-next-line no-unused-vars
      typography: (theme) => ({
        dark: {
          css: {
            color: 'white',
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
};
