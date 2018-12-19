const colors = {
  /**
   * super-super-light blue used in:
   *   - panel background for pending group invites
   *   - header background for post list headers
   *     e.g. announcements-only, new live-update posts
   *   - hover, active, and focused state of text box .handle, in
   *     slightly transparentized form.
   *
   * Notes:
   *   - hover variant was decided during dev (not spec'd via PSD) so
   *     could be easily expressed as SCSS function relative to main
   *     definition.
   *   - use in .handle states was decided during dev. Use here is not
   *     closely coupled with the other two contexts. Debatable
   *     whether the addition of transparency makes sense (default
   *     state of handles is opaque), and whether hover state is
   *     needed, given that the cursor also changes on hover.
   */
  'alice-blue': '#f1faff',

  /**
   * Used for background-color of select boxes. Also used in
   * AudioNote component controls.
   *
   * @since 1.1.0
   */
  'pattens-blue': '#dcf3ff',

  /**
   * Used as a background-color.
   *
   * @since 1.1.0
   */
  iceberg: '#cbeeff',

  'french-pass': '#bae8ff',
  anakiwa: '#8ad8ff',
  'picton-blue': '#29b1f0',

  /**
   * Used for fine lines and small objects in our primary blue (text,
   * stroke, icons). Also used in AudioNote component controls.
   */
  cerulean: '#009fe8',

  lochmara: '#0084c2',

  /**
   * Used for indicating primary action.
   */
  fern: '#64bc74',

  /**
   * Used in AudioNote component during recording.
   *
   * @since 1.1.0
   */
  cinderella: '#fce5e5',

  /**
   * Used for indicating destructive action, also in AudioNote
   * component during recording.
   *
   * @since 1.1.0
   */
  froly: '#f07f7f',

  /**
   * A hover/focus state for $color-apricot.
   */
  'red-orange': '#fc3d39',

  'regent-gray': '#8c97a1',

  /**
   * Good old comment bubble colours.
   */
  mercury: '#e9e9eb',

  /**
   * Used as a background-color for the PostList form component.
   *
   * For the Add Files/Cancel button, use a 33% whiter variation. It
   * should work out to `#f2f3f4`.
   *
   * @example scss
   *   background-color: tint($color-porcelain, 33%);
   * @since 1.1.0
   */
  porcelain: '#ecedee',

  /**
   * The standard opaque colour for grey secondary text labels.
   *
   * Used exclusively for text colours, no fills. The current
   * definition works best over white or almost-white backgrounds.
   *
   * @todo We might consider replacing this with a dark-and-
   *       transparent rgba colour for more consistent contrast on
   *       varying background colours.
   */
  'silver-sand': '#b9bbbd',

  /**
   * Used less widely and less consistently than color-secondary-dark.
   * - background colour for group-wrapper within the text-on-page options popover, although this appears unnecessary.
   *   the size and alignment groups already sit on the grey background of the overall popover.
   * - text colour for empty folder titles and messages e.g. empty student portfolio.
   * - grey checkmark accessory for already-invited people in the group invite wizard.
   * - loading spinner in detail panel
   * - sign-up TOC footer link
   * Notes:
   * - text colour for empty folder titles is incorrect, should use color-secondary-dark instead
   *   (although the icon colour is supposed to be lighter than the text)
   * - group invite wizard checkmark colour is different from the iOS mockup colour. CW to investigate
   *   what standard colour def would be best for this element.
   *   - sign-up TOC footer link is incorrect, should be color-secondary-dark
   */
  'silver-sand-light': '#cac9cd',

  /**
   * One-off colour definition for the background of a selected text box when the text colour
   * is set to white. This is consistent with iOS and should be kept as is, but IMO should be
   * defined in some feature-specific module. Also it's only ever used as a transparent colour,
   * so perhaps the transparency should be included in the main definition.
   */
  'fuscous-gray': '#545454',

  /**
   * Not a UI colour def, but the content colour for grey text and ink annotations.
   * - used for the darker of the two grey text colours in the text box options palette
   * - used for the outline and checkmark colour when selecting the white colour in the text box options
   * - also randomly used to colour the voice note recorder buttons when the voice note save is in progress.
   *   a different colour def should be referenced there.
   */
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

  /**
   * Use case one: hover state for a white-background element
   * - hover state background for help menu buttons (sbe-help)
   * - hover state background for file attachment buttons (sbe-actions-menu)
   * - hover background for x-list items, a new component that hasn't been deployed yet so I didn't check it out
   * - hover state for post list files
   * - hover background for voice note bubble
   * Use case two: background colour for light grey elements, like master panel and detail panel headers
   * - background colour for announcements-only banner
   * - background colour for master panel
   * - border colour for main tab-bar badges (to match master panel bg)
   * - in-popover heading for a list (e.g. list of parents in student info popover) (form-group__heading)
   * - background for portfolio__header
   * And this??
   * - border colour for sbe-attach__options where it seems to have no effect, probably deprecated
   * Notes:
   * When it's used as a hover state, it has the same appearance as rgba(0,0,0,0.3)
   * over a white background. This transparent version is used in some other
   * places like the wrench menu items. Might consider standardizing on one of the
   * two approaches.
   */
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

  /**
   * Colour for background of popovers. Seems to be used pretty
   * consistently.
   * Darker than background of master panel, since borderless white
   * fields need to have some contrast on top. Also used for search
   * field background in group invite wizard and modified to form the
   * active state of buttons in the export grades popover. Those ones
   * are a little arbitrary but look OK as is.
   */
  seashell: '#f0f0f0',

  /**
   * Colour for grey buttons in the document previewer.
   * Note that grey text labels should use a slightly darker grey not
   * defined here: #748d97
   */
  'gull-gray': '#90a8b2',

  /**
   * Blue hover state for colourful menus like the post list item
   * actions menu.
   */
  'lily-white': '#e5f8ff',

  /**
   * Regular old grey buttons.
   * Note: As part of the blue refresh, the grey button background
   * colour is proposed to change to #8c97a1 (darker and more blueish)
   */
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
};

module.exports = colorScale;
