import namedColors from 'color-name-list';
import { Color } from 'chroma-js';

const nearestColor = require('nearest-color');

/**
 * Get a unique colour name for the supplied hex value, or for the
 * closest hex value for which a name exists.
 *
 * @see https://github.com/meodai/color-names#closest-named-color
 */
export function getColorName(color: Color): string {
  let colorNames = namedColors.reduce(
    (o, { name, hex }) => Object.assign(o, { [name]: hex }),
    {}
  );
  let nearest = nearestColor.from(colorNames);

  return nearest(color.alpha(1).hex()).name;
}

export function getHslString(color: Color): string {
  let hsl = [
    Math.round(color.get('hsl.h')),
    Math.round(color.get('hsl.s') * 100),
    Math.round(color.get('hsl.l') * 100),
  ];

  return hsl.join(', ');
}
