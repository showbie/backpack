# Retired colours

## Showbie

### Seashell†

::: warning
Replace this with `#f8f8f8`
:::

<ColorSwatch hex="#f0f0f0" theme="showbie" />

Colour for background of popovers. Seems to be used pretty
consistently.

Darker than background of master panel, since borderless white
fields need to have some contrast on top. Also used for search
field background in group invite wizard and modified to form the
active state of buttons in the export grades popover. Those ones
are a little arbitrary but look OK as is.

### Mercury†

::: warning
Replace this with `#e6e5e7`
:::

<ColorSwatch hex="#e9e9eb" theme="showbie" />

Good old comment bubble colours.

### Silver-sand-light†

::: warning
Replace this with `#c4c4ca`
:::

<ColorSwatch hex="#cac9cd" theme="showbie" />

Used less widely and less consistently than color-secondary-dark.

- background colour for group-wrapper within the text-on-page options popover, although this appears unnecessary. the size and alignment groups already sit on the grey background of the overall popover.
- text colour for empty folder titles and messages e.g. empty student portfolio.
- grey checkmark accessory for already-invited people in the group invite wizard.
- loading spinner in detail panel
- sign-up TOC footer link

#### Notes

Text colour for empty folder titles is incorrect, should use
`color-secondary-dark` instead (although the icon colour is supposed
to be lighter than the text).

Group invite wizard checkmark colour is different from the iOS mockup
colour. CW to investigate what standard colour def would be best for
this element.

Sign-up TOC footer link is incorrect, should be `color-secondary-dark`.
