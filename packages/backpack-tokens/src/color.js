const colors = {
  'alice-blue': '#f1faff',

  'pattens-blue': '#dcf3ff',

  iceberg: '#cbeeff',

  'french-pass': '#bae8ff',
  anakiwa: '#8ad8ff',
  'picton-blue': '#29b1f0',

  cerulean: '#009fe8',

  lochmara: '#0084c2',

  /**
   * Used for indicating primary action.
   */
  fern: '#64bc74',

  cinderella: '#fce5e5',

  froly: '#f07f7f',

  /**
   * A hover/focus state for $color-apricot.
   */
  'red-orange': '#fc3d39',

  'regent-gray': '#8c97a1',

  mercury: '#e9e9eb',

  porcelain: '#ecedee',

  'silver-sand': '#b9bbbd',

  'silver-sand-light': '#cac9cd',

  /**
   * One-off colour definition for the background of a selected text box when the text colour
   * is set to white. This is consistent with iOS and should be kept as is, but IMO should be
   * defined in some feature-specific module. Also it's only ever used as a transparent colour,
   * so perhaps the transparency should be included in the main definition.
   */
  'fuscous-gray': '#545454',

  'rolling-stone': '#7a8184',

  /**
   * - Meant to be used for grouped list items in the master panel: lighter than the master panel
   *   grey background, but darker than the white background of the detail panel.
   *   Alternately, a 0.5 opaque white background would have the same appearance.
   *   .sbe-cell and .panelitem are two correct examples.
   * - incorrectly used as border colour for currently selected text box text color.
   *   That border colour should simply be white.
   */
  'alabaster-light': '#fcfcfc',

  alabaster: '#f8f8f8',

  /**
   * - This is another TOP text box background colour that should be defined specific
   *   to that feature. It's always used with transparency so the transparency could be
   *   included in the original definition.
   * - it's also referenced in a saving state for the voice note recorder, but this reference
   *   should probably be factored out and replaced with a more generic colour definition.
   */
  'wild-sand': '#f2f5f5',

  /**
   * In general, this one could be replaced with #b9bbbd. Would be even better if we replaced both
   * with a dark-and-transparent equivalent for more consistent contrast on both white and grey backgrounds.
   * - unnecessary: disabled + button on new post UI when comment bubble contains text. On iOS
   *   this uses the standard #b9bbbd text colour.
   * - grey text in grey banner, e.g. paused class discussion banner (sbe-channel-detal__banner)
   *   this one is a little darker than #b9bbbd, which is good on a grey background, but we could
   *   achieve the same effect with a single colour by substituting a dark-but-transparent colour instead.
   * - unnecessary: disabled header text in drop zone modal (sbe-dropzone): this grey doesn't match the mockup anyway, in the mockup
   *   it's #90a8b2 (similar to the grey secondary labels used inside the document previewer)
   * - unnecessary: some labels in the join school flow. These should be #b9bbbd or transparent equivelant.
   * - unnecessary: text on page footer text should be #b9bbbd or transparent equivalent.
   * - unnecessary: text in sbe-quick-switcher should be #b9bbbd
   *   also, the hover state for that text is defined in the component, that should probably be defined more universally.
   * - unnecessary: x-label component should use #b9bbbd or transparent equivalent.
   * - unnecessary: sbe-post-form__action. should use #b9bbbd transparent equivalent.
   */
  bombay: '#b5b7ba',

  seashell: '#f0f0f0',

  'gull-gray': '#90a8b2',

  /**
   * Blue hover state for colourful menus like the post list item
   * actions menu.
   */
  'lily-white': '#e5f8ff',

  'gray-chateau': '#989fa6',

  'oslo-gray': '#898f95',
  bunker: '#070b12',
  'pale-slate': '#c4c4c4',
  nepal: '#94b2c1',
};

const colorScale = {
  blue: {
    100: colors['alice-blue'],
    200: colors['pattens-blue'],
    300: colors.iceberg,
    400: colors['french-pass'],
    500: colors.anakiwa,
    600: colors['picton-blue'],
    700: colors.cerulean,
    800: colors.lochmara,
  },
  grey: {
    100: colors.alabaster,
    200: colors.seashell,
    300: colors.porcelain,
    400: colors.mercury,
    500: colors['silver-sand-light'],
    600: colors['silver-sand'],
    700: colors['gull-gray'],
    725: colors['regent-gray'],
    775: colors['oslo-gray'],
    800: colors['rolling-stone'],
    900: colors['gray-chateau'],
  },
  red: {
    100: colors.cinderella,
    200: colors.froly,
    300: colors['red-orange'],
  },
  green: {
    500: '#5dbe6e',
  },
  brand: {
    feide: '#068f8d',
    google: '#dc4e41',
    showbie: colors.cerulean,
  },
};

module.exports = colorScale;
