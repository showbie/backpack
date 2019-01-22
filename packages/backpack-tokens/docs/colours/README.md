---
---

# Showbie colours

> In visual perception a color is almost never seen as it really is —
> as it physically is. This fact makes color the most relative medium
> in art. \
> — *Josef Albers*

Here’s an overview of the full Showbie colour palette. View the
individual swatches for details and usage notes.

<ColorScale hue="blue" />

<ColorScale hue="grey" />

<ColorScale hue="red" />

## Blues

### Blue 100

<ColorSwatch hue="blue" scale="100" />

A super-super-light blue used in:

- panel background for pending group invites
- header background for post list headers (e.g. announcements-only,
  new live-update posts)
- hover, active, and focused state of text box `.handle`, in
  slightly transparentized form.

#### Notes:

Hover variant was decided during dev (not spec'd via PSD) so it could
be easily expressed as SCSS function relative to main definition.

Use in `.handle` states was decided during dev. Use here is not
closely coupled with the other two contexts. Debatable whether the
addition of transparency makes sense (default state of handles is
opaque), and whether hover state is needed, given that the cursor also
changes on hover.

### Blue 200

<ColorSwatch hue="blue" scale="200" />

Used for background-color of select boxes. Also used in AudioNote
component controls.

### Blue 300

<ColorSwatch hue="blue" scale="300" />

Used as a background-color.

### Blue 400

<ColorSwatch hue="blue" scale="400" />

### Blue 500

<ColorSwatch hue="blue" scale="500" />

### Blue 600

<ColorSwatch hue="blue" scale="600" />

### Blue 700

<ColorSwatch hue="blue" scale="700" />

Used for fine lines and small objects in our primary blue (text,
stroke, icons). Also used in AudioNote component controls.

### Blue 800

<ColorSwatch hue="blue" scale="800" />

## Greys

### Grey 100

<ColorSwatch hue="grey" scale="100" />

Use case one: hover state for a white-background element

- hover state background for help menu buttons (sbe-help)
- hover state background for file attachment buttons (sbe-actions-menu)
- hover background for x-list items, a new component that hasn't been deployed yet so I didn't check it out
- hover state for post list files
- hover background for voice note bubble

Use case two: background colour for light grey elements, like master panel and detail panel headers

- background colour for announcements-only banner
- background colour for master panel
- border colour for main tab-bar badges (to match master panel bg)
- in-popover heading for a list (e.g. list of parents in student info popover) (`form-group__heading`)
- background for `portfolio__header`

And this??

- border colour for `sbe-attach__options` where it seems to have no effect, probably deprecated

#### Notes

When it's used as a hover state, it has the same appearance as rgba(0,0,0,0.3)
over a white background. This transparent version is used in some other
places like the wrench menu items. Might consider standardizing on one of the
two approaches.

### Grey 200

<ColorSwatch hue="grey" scale="200" />

Colour for background of popovers. Seems to be used pretty
consistently.

Darker than background of master panel, since borderless white
fields need to have some contrast on top. Also used for search
field background in group invite wizard and modified to form the
active state of buttons in the export grades popover. Those ones
are a little arbitrary but look OK as is.

### Grey 300

<ColorSwatch hue="grey" scale="300" />

Used as a background-color for the PostList form component.

For the Add Files/Cancel button, use a 33% whiter variation. It
should work out to `#f2f3f4`.

`background-color: tint($color-porcelain, 33%);`

### Grey 00

<ColorSwatch hue="grey" scale="400" />

Good old comment bubble colours.

### Grey 500

<ColorSwatch hue="grey" scale="500" />

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

### Grey 600

<ColorSwatch hue="grey" scale="600" />

The standard opaque colour for grey secondary text labels.

Used exclusively for text colours, no fills. The current
definition works best over white or almost-white backgrounds.

::: tip Todo
We might consider replacing this with a dark-and-
transparent rgba colour for more consistent contrast on
varying background colours.
:::

### Grey 700

<ColorSwatch hue="grey" scale="700" />

Colour for grey buttons in the document previewer.

Note that grey text labels should use a slightly darker grey not
defined here: `#748d97`.

### Grey 725

<ColorSwatch hue="grey" scale="725" />

### Grey 775

<ColorSwatch hue="grey" scale="775" />

### Grey 800

<ColorSwatch hue="grey" scale="800" />

Not a UI colour def, but the content colour for grey text and ink annotations.

- used for the darker of the two grey text colours in the text box options palette
- used for the outline and checkmark colour when selecting the white colour in the text box options
- also randomly used to colour the voice note recorder buttons when the voice note save is in progress. a different colour def should be referenced there.

### Grey 900

<ColorSwatch hue="grey" scale="900" />

Regular old grey buttons.

Note: As part of the blue refresh, the grey button background colour is proposed to change to `#8c97a1` (darker and more blueish)

## Reds

### Red 100

<ColorSwatch hue="red" scale="100" />

Used in AudioNote component during recording.

### Red 200

<ColorSwatch hue="red" scale="200" />

Used for indicating destructive action, also in AudioNote component
during recording.

### Red 300

<ColorSwatch hue="red" scale="300" />
