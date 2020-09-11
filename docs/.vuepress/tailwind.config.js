const extensions = '@(js|md|vue|html)';

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },

  purge: [
    `../../**/*.${extensions}`,
    `../../../node_modules/**/*vuepress*/!(node_modules)/**/*.${extensions}`,
  ],

  theme: {
    fontWeight: {
      '400': '400',
      '500': '500',
      '600': '600',
      '700': '700',
      '800': '800',
    },

    borderRadius: {
      none: '0',
      px: '1px',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
      full: '9999px',
    },

    typography: (theme) => ({
      default: {
        css: {
          a: {
            color: theme('colors.primary.500'),
          },
          h2: {
            paddingBottom: theme('padding.2'),
            borderBottomWidth: '1px',
            borderBottomColor: theme('colors.gray.200'),
          },
          h3: {
            paddingBottom: theme('padding.2'),
            borderBottomWidth: '1px',
            borderBottomColor: theme('colors.gray.200'),
          },
          blockquote: {
            fontWeight: '400',
            color: theme('colors.gray.600'),
            fontStyle: 'normal',
            quotes: '"\\201C""\\201D""\\2018""\\2019"',
          },
          'blockquote p:first-of-type::before': {
            content: '',
          },
          'blockquote p:last-of-type::after': {
            content: '',
          },
          code: {
            fontWeight: '400',
            backgroundColor: theme('colors.gray.100'),
            padding: theme('padding.1'),
            borderWidth: 1,
            borderColor: theme('colors.gray.200'),
            borderRadius: theme('borderRadius.default'),
          },
          'code::before': {
            content: '',
          },
          'code::after': {
            content: '',
          },
          'h3 code': {
            fontWeight: '600',
          },
          'pre code': {
            fontFamily: 'DM Mono',
          },
        },
      },
      dark: {
        css: {
          color: theme('colors.gray.300'),
          '[class~="lead"]': {
            color: theme('colors.gray.300'),
          },
          a: {
            color: theme('colors.primary.500'),
          },
          strong: {
            color: theme('colors.gray.100'),
          },
          'ol > li::before': {
            color: theme('colors.gray.400'),
          },
          'ul > li::before': {
            backgroundColor: theme('colors.gray.600'),
          },
          hr: {
            borderColor: theme('colors.gray.700'),
          },
          blockquote: {
            color: theme('colors.gray.400'),
            borderLeftColor: theme('colors.gray.700'),
          },
          h1: {
            color: theme('colors.gray.100'),
          },
          h2: {
            color: theme('colors.gray.100'),
            borderBottomColor: theme('colors.gray.800'),
          },
          h3: {
            color: theme('colors.gray.100'),
            borderBottomColor: theme('colors.gray.800'),
          },
          h4: {
            color: theme('colors.gray.100'),
          },
          'figure figcaption': {
            color: theme('colors.gray.400'),
          },
          code: {
            color: theme('colors.gray.100'),
            backgroundColor: theme('colors.gray.800'),
            borderWidth: 0,
          },
          thead: {
            color: theme('colors.gray.100'),
            borderBottomColor: theme('colors.gray.600'),
          },
          'tbody tr': {
            borderBottomColor: theme('colors.gray.700'),
          },
        },
      },
    }),

    extend: {
      colors: {
        divider: 'rgba(7, 2, 20, 0.1)',
      },
    },
  },

  plugins: [require('@tailwindcss/typography'), require('tailwind-capsize')],
};
