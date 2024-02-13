import chroma from 'chroma-js';

/**
 * Colours marked "blessed" are in use and confirmed accurate by the
 * design team. Other colours are found in production but unconfirmed.
 */
export const colors = {
  grey: {
    0: '#FFFFFF', // a11y
    5: '#FBFBFB', // a11y
    50: '#F8F8F8', // a11y
    100: '#F2F2F3', // a11y
    200: '#E9E9EB', // a11y
    300: '#CCCCCF', // a11y
    400: '#c4c4ca', // blessed
    500: '#696B76', // a11y
    600: '', // '#989fa6',
    700: '', // '#7a8184',
    800: '', // '#545454',
    900: '',
    1000: '#000000', // a11y
  },

  slate: {
    50: '',
    100: '',
    200: '',
    300: '',
    400: '',
    500: '', // '#94b2c1',
    // xx5: '#90a8b2',
    600: '#8aa4af', // blessed
    700: '',
    800: '',
    900: '#152024', // blessed
  },

  red: {
    50: '#FFEEEE', // a11y
    100: '#FCE5E5', // a11y
    200: '#F9CCCC', // a11y
    300: '',
    400: '',
    500: '#D5422D', // a11y
    600: '#CF2810', // a11y
    700: '#C11D05', // a11y
    800: '#e10000', // blessed
    900: '',
  },

  // yellow: {
  //   50: '',
  //   100: '', // '#faf0a6',
  //   200: '', // '#f7df68',
  //   300: '',
  //   400: '',
  //   500: '', // '#ddc62a', // aka 'rgb(221, 198, 42)',
  //   600: '',
  //   700: '',
  //   800: '',
  //   900: '',
  // },

  green: {
    50: '#EBF7EB', // a11y
    100: '#DAF0DA', // a11y
    200: '',
    300: '',
    400: '',
    500: '#158809', // ally
    600: '#137C08', // a11y
    700: '#117207', // a11y
    800: '',
    900: '',
  },

  blue: {
    5: '#F2F9FF', // a11y
    50: '#f1faff', // a11y
    100: '#dcf3ff', // a11y
    200: '#cbeeff', // a11y
    300: '#BAE7FE', // a11y
    400: '#29B1F0', // a11y
    500: '#107CC0', // a11y
    600: '#016FB7', // a11y
    700: '#005E9D', // a11y
    800: '#003968', // a11y
    900: '',
  },

  brand: {
    feide: '#068f8d',
    google: '#dc4e41',
    microsoft: '#07a6f0',
    showbie: '#016FB7',
    socrative: '#ff602b',
  },
};

colors.slate = {
  ...colors.slate,
  ...{
    '900-95': chroma(colors.slate['900']).alpha(0.95).css(),
  },
};

export default {
  prefix: 'sbe',
  colors: colors,
};
