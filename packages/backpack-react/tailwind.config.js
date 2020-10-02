/**
 * TailwindCSS configuration
 *
 * @see https://tailwindcss.com/docs/configuration
 * @see https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const plugin = require('tailwindcss/plugin');

const COLORS = require('@showbie/backpack-tokens').socrative.colors;
const BLEND_MODES = [
  'normal',
  'multiply',
  'screen',
  'overlay',
  'darken',
  'lighten',
  'color-dodge',
  'color-burn',
  'hard-light',
  'soft-light',
  'difference',
  'exclusion',
  'hue',
  'saturation',
  'color',
  'luminosity',
];
const PSEUDO_ELEMENTS = ['before', 'after'];

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./src/**/*.@(js|ts)x'],
  prefix: '',
  separator: ':',
  theme: {
    screens: {
      sm: '480px',
      md: '640px',
      lg: '1024px',
      xl: '1280px',
    },

    colors: {
      inherit: 'inherit',
      transparent: 'transparent',

      black: 'rgb(7, 2, 20)',
      white: '#fff',
      'white-a66': 'rgba(255, 255, 255, 0.66)',
      divider: 'rgba(7, 2, 20, 0.1)',
      disabled: 'rgba(7, 2, 20, 0.2)',

      grey: COLORS.grey,
      red: COLORS.red,
      orange: COLORS.orange,
      amber: COLORS.amber,
      green: COLORS.green,
      cyan: COLORS.cyan,
      blue: COLORS.blue,
      indigo: COLORS.indigo,
      brand: COLORS.brand,
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

    boxShadow: (theme) => ({
      modal: '0 1.5rem 6rem rgba(0, 0, 0, 0.16)',
      focused: '0 0.5rem 2rem rgba(0,0,0,0.16)',
      border: `0 0 0 2px ${theme('colors.grey.200')}`,
      'border-t': `0 -1px 0 0 ${COLORS.grey['200']}`,
      'border-b': `0 1px 0 0 ${COLORS.grey['200']}`,
      'border-y': `0 1px 0 0 ${COLORS.grey['200']},
        0 -1px 0 0 ${COLORS.grey['200']}`,
      'border-grey-200-x-y': `0 1px 0 0 ${COLORS.grey['200']},
        0 -1px 0 0 ${COLORS.grey['200']},
        1px 0 0 0 ${COLORS.grey['200']},
        -1px 0 0 0 ${COLORS.grey['200']}`,
      'border-cyan-500-x-y': `0 1px 0 0 ${COLORS.cyan['500']},
        0 -1px 0 0 ${COLORS.cyan['500']},
        1px 0 0 0 ${COLORS.cyan['500']},
        -1px 0 0 0 ${COLORS.cyan['500']}`,
      focus: `0 0 0 2px ${theme('colors.cyan.600')}`,
      outline: '0 0 0 2px',
      'inner-outline': 'inset 0 0 0 2px',
      'outline-px': '0 0 0 1px',
      'outline-4': `0 0 0 ${theme('spacing.4')}`,
      none: 'none',
    }),

    fontFamily: {
      default: 'inherit',
      sans: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      display: ['Montserrat', 'sans-serif'],
    },

    fontMetrics: {
      sans: {
        capHeight: 2048,
        ascent: 2728,
        descent: -680,
        lineGap: 0,
        unitsPerEm: 2816,
      },
    },

    fontSize: {
      inherit: 'inherit',
      xs: '1.08334rem', //      13px
      sm: '1.25rem', //         15px
      base: '1.33334rem', //    16px Inter ↑
      display: '1.41667rem', // 17px Montserrat ↓
      md: '1.66667rem', //      20px
      lg: '2.5rem', //          30px
      xl: '3.33334rem', //      40px
    },

    fontWeight: {
      inherit: 'inherit',
      '400': '400',
      '500': '500',
      '600': '600',
      '700': '700',
      '800': '800',
    },

    lineHeight: {
      inherit: 'inherit',
      solid: '1',
      base: '20px',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '14': '3.5rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
    },

    maxWidth: (theme) => ({
      ...theme('spacing'),
      '80': '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
      modal: '480px',
      'modal-md': '600px',
      'modal-lg': '912px',
    }),

    minWidth: (theme) => ({
      ...theme('spacing'),
      '80': '20rem',
      '2xl': '42rem',
      full: '100%',
    }),

    maxHeight: (theme) => ({
      ...theme('spacing'),
      '80': '20rem',
      full: '100%',
      screen: '100vh',
    }),

    transitionTimingFunction: {
      linear: 'linear',
      in: 'cubic-bezier(0.2, 0, 1, 0.9)',
      out: 'cubic-bezier(0, 0, 0.38, 0.9)',
      'in-out': 'cubic-bezier(0.2, 0.2, 0.38, 0.9)',
      bounce: 'cubic-bezier(0.5, 1.75, 0.66, 1)',
    },

    extend: {
      spacing: {
        '7': '1.75rem',
        '9': '2.25rem',
        '11': '2.75rem',
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '23': '5.75rem',
        '25': '6.25rem',
        '26': '6.5rem',
        '28': '7rem',
        '32': '8rem',
        '50': '12.5rem',
        '60': '15rem',
        '70': '17.5rem',
        '80': '20rem',
      },

      inset: {
        px: '1px',
        '2': '2px',
        '-px': '-1px',
        '-2': '-2px',
        '1/4': '25%',
        '1/2': '50%',
      },

      opacity: {
        '33': '0.33',
        '66': '0.66',
      },

      fill: (theme) => ({
        ...theme('colors'),
      }),

      minHeight: {
        modal: '31rem',
      },

      stroke: (theme) => ({
        ...theme('colors'),
      }),

      zIndex: {
        '100': 100,
        '101': 100,
      },

      gridTemplateColumns: {
        'question-fields': '3rem 1fr 3rem',
      },

      transitionDuration: {
        '400': '400ms',
      },
    },
  },

  variants: {
    backgroundColor: ['responsive', 'group-hover', 'hover', 'focus'],
    borderColor: ['responsive', 'group-hover', 'hover', 'focus'],
    display: ['responsive', 'before', 'after'],
    fill: ['responsive', 'group-hover'],
    margin: ['responsive', 'before', 'after'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover', 'focus-within'],
    stroke: ['responsive', 'group-hover'],
    zIndex: ['responsive', 'focus', 'focus-within'],
  },

  corePlugins: {
    preflight: false,
  },

  plugins: [
    plugin(function({ addUtilities }) {
      const blendModes = BLEND_MODES.map((value) => {
        return {
          [`.mix-${value}`]: {
            mixBlendMode: value,
          },
        };
      });

      addUtilities(blendModes);
    }),
    plugin(function({ addUtilities, addVariant, e }) {
      addUtilities(
        {
          '.empty-content': {
            content: "''",
          },
        },
        PSEUDO_ELEMENTS
      );
      PSEUDO_ELEMENTS.forEach((pseudo) => {
        addVariant(pseudo, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.${e(`${pseudo}${separator}${className}`)}::${pseudo}`;
          });
        });
      });
    }),
    require('tailwind-capsize').default({ rootSize: 12 }),
  ],
};
