<template>
  <div class="swatch flex mt2 mb4 br2 overflow-hidden">
    <div class="w4 flex-shrink-0 flex items-end" :style="bgStyle" style="min-height: 8rem">
      <div class="w-100 flex justify-around mb3">
        <span class="dib f6 b pa2 br1" :style="blackContrastStyle">{{ blackContrast }}</span>
        <span class="dib f6 b pa2 br1" :style="whiteContrastStyle">{{ whiteContrast }}</span>
      </div>
    </div>
    <dl class="swatch-details flex flex-wrap items-center ma0 ph4 pv3 bl b--black-025">
      <div class="w-100 mv2 mh2">
        <dt class="f7 fw6 lh-copy ttu">Name</dt>
        <dd class="f5 ml0">{{ colorName }}</dd>
      </div>
      <div class="mv2 mh2">
        <dt class="f7 fw6 lh-copy ttu">Value</dt>
        <dd class="f5 ml0">
          <code>{{ colorHex }}</code>
        </dd>
      </div>
      <div class="mv2 mh2">
        <dt class="f7 fw6 lh-copy ttu">SCSS</dt>
        <dd class="f5 ml0">
          <code>${{ variablePrefix }}-{{ hue }}-{{ scale }}</code>
        </dd>
      </div>
      <div class="mv2 mh2">
        <dt class="f7 fw6 lh-copy ttu">Swift</dt>
        <dd class="f5 ml0">
          <code>{{ swiftVar }}</code>
        </dd>
      </div>
      <div class="flex">
        <div class="mv2 mh2">
          <dt class="f7 fw6 lh-copy ttu">RGB</dt>
          <dd class="f5 ml0">
            <code>{{ colorRGB }}</code>
          </dd>
        </div>
        <div class="mv2 mh2">
          <dt class="f7 fw6 lh-copy ttu">HSL</dt>
          <dd class="f5 ml0">
            <code>{{ colorHSL }}</code>
          </dd>
        </div>
      </div>
    </dl>
  </div>
</template>

<script>
import chroma from 'chroma-js';
import namedColors from 'color-name-list';

import SHOWBIE from '../../../src/backpack-showbie';
import SOCRATIVE from '../../../src/backpack-socrative';

// const chroma = require('chroma-js');
const nearestColor = require('nearest-color');

const COLORS = require('../../../src/color');
const { swiftVarName } = require('../../../lib/utils/string');

/**
 * Get an a11y rating score based on a contrast value.
 *
 * @param {Number} contrast
 * @returns {String}
 */
function score(contrast) {
  let score;

  if (contrast > 7) {
    score = 'AAA';
  } else if (contrast >= 4.5) {
    score = 'AA';
  } else if (contrast >= 3) {
    score = 'AA Large';
  } else if (contrast < 3) {
    score = 'Fail';
  } else {
    score = 'Unknown';
  }

  return score;
}

export default {
  props: {
    theme: {
      type: String,
      default: 'showbie',
    },
    hue: {
      type: String,
      // required: true,
    },
    scale: {
      type: String,
      // required: true,
    },
    hex: {
      type: String,
    },
  },

  computed: {
    /**
     * @todo Need to handle error here if the colour doesn't exist
     *       in the main list.
     */
    colorHex: function() {
      let source =
        this.theme === 'socrative' ? SOCRATIVE.colors : SHOWBIE.colors;

      return this.hex || source[this.hue][this.scale] || '#ff00ff';
    },

    colorRGB: function() {
      return chroma(this.colorHex)
        .rgb()
        .join(', ');
    },

    colorHSL: function() {
      let hsl = [
        Math.round(chroma(this.colorHex).get('hsl.h')),
        Math.round(chroma(this.colorHex).get('hsl.s') * 100),
        Math.round(chroma(this.colorHex).get('hsl.l') * 100),
      ];

      return hsl.join(', ');
    },

    variablePrefix: function() {
      return this.theme === 'socrative' ? SOCRATIVE.prefix : SHOWBIE.prefix;
    },

    /**
     * Get a unique colour name for the supplied hex value, or for the
     * closest hex value for which a name exists.
     *
     * @see https://github.com/meodai/color-names#closest-named-color
     */
    colorName: function() {
      let colorNames = namedColors.reduce(
        (o, { name, hex }) => Object.assign(o, { [name]: hex }),
        {}
      );
      let nearest = nearestColor.from(colorNames);

      return nearest(this.colorHex).name;
    },

    swiftVar: function() {
      return swiftVarName(this.variablePrefix, this.hue, this.scale);
    },

    // Determine best foreground colour to use on `color` background.
    foreground: function() {
      let lum = chroma(this.colorHex).luminance();
      return lum < 0.5 ? 'white' : 'black';
    },

    // Contrast score against black.
    blackContrast() {
      let contrast = chroma.contrast(this.colorHex, '#000');
      let contrastScore = score(contrast);

      return contrastScore;
    },

    // Contrast score against white.
    whiteContrast() {
      let contrast = chroma.contrast(this.colorHex, '#fff');
      let contrastScore = score(contrast);

      return contrastScore;
    },

    bgStyle: function() {
      return `background-color:${this.colorHex}; color:${this.foreground}`;
    },

    blackContrastStyle: function() {
      return `color: #000; background-color: ${this.colorHex}`;
    },

    whiteContrastStyle: function() {
      return `color: #fff; background-color: ${this.colorHex}`;
    },
  },
};
</script>

<style>
.swatch {
  background-color: #f8f8f8;
}
</style>
