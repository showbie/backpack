/**
 * Colours marked "blessed" are in use and confirmed accurate by the
 * design team. Other colours are found in production but unconfirmed.
 */
export const colors = {
  grey: {
    50: '#f8f8f8', // blessed
    // 100: '#ecedee',
    // xx1: '#e9e9eb', // replace with 100?
    200: '',
    300: '',
    400: '#c4c4ca', // blessed
    500: '#b9bbbd', // blessed
    // 600: '#989fa6',
    // 700: '#7a8184',
    // 800: '#545454',
    900: '',
  },

  slate: {
    50: '',
    200: '',
    // 500: '#94b2c1',
    // xx5: '#90a8b2',
    600: '#8aa4af', // blessed
    800: '',
  },

  blue: {
    50: '#f1faff', // blessed
    100: '#dcf3ff', // blessed
    200: '#cbeeff', // blessed
    // 300: '#bae8ff',
    // 400: '#8ad8ff',
    500: '#29b1f0', // blessed
    600: '#009fe8', // blessed
    700: '#0084c2',
    800: '',
    900: '',
  },

  green: {
    100: '#def2e1', // blessed
    200: '',
    500: '#5dbe6e', // blessed
    600: '#49af5b', // blessed
    800: '',
  },

  yellow: {
    // 100: '#faf0a6',
    // 200: '#f7df68',
    // 500: '#ddc62a', // aka 'rgb(221, 198, 42)',
    600: '',
    800: '',
  },

  red: {
    100: '#fce5e5', // blessed
    200: '',
    500: '#f07f7f', // blessed
    600: '#eb5f5f', // blessed
    800: '#e10000', // blessed
  },

  brand: {
    feide: '#068f8d',
    google: '#dc4e41',
    microsoft: '#07a6f0',
    showbie: '#009fe8',
    socrative: '#ff602b',
  },
};

export default {
  prefix: 'sbe',
  colors: colors,
};
