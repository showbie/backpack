<template>
  <div class="swatch fl mt2 mr4 mb4 w-40 br2 overflow-hidden">
    <div class="h4 flex items-end" :style="bgStyle">
      <div class="w-100 flex justify-around mb3">
        <span class="dib f6 b pa2 br1" :style="bgStyle">{{ bgContrast }}</span>
        <span class="dib f6 b pa2 br1" :style="fgStyle">{{ fgContrast }}</span>
      </div>
    </div>
    <div class="swatch-details ph4 pv3">
      <dl class="flex justify-between items-center ma0">
        <dt class="f7 fw6 lh-copy ttu">Name</dt>
        <dd class="f5 tr mt1 ml2">{{ colorName }}</dd>
      </dl>
      <dl class="flex justify-between items-center mt4 mb0">
        <dt class="f7 fw6 ttu">Value</dt>
        <dd class="f5 ml0">
          <code>{{ colorHex }}</code>
        </dd>
      </dl>
      <dl class="flex justify-between items-center mt4 mb0">
        <dt class="f7 fw6 ttu">SCSS</dt>
        <dd class="f5 ml0">
          <code>$sb-{{ hue }}-{{ scale }}</code>
        </dd>
      </dl>
      <dl class="flex justify-between items-center mt4 mb0">
        <dt class="f7 fw6 ttu">Swift</dt>
        <dd class="f5 ml0">
          <code>{{ swiftVar }}</code>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import namedColors from 'color-name-list';
const chroma = require('chroma-js');
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
    hue: {
      type: String,
      required: true,
    },
    scale: {
      type: String,
      required: true,
    },
  },

  computed: {
    colorHex: function() {
      return COLORS[this.hue][this.scale];
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
      return swiftVarName(this.hue, this.scale);
    },

    // Determine best foreground colour to use on `color` background.
    foreground: function() {
      let lum = chroma(this.colorHex).luminance();
      return lum < 0.5 ? 'white' : 'black';
    },

    // Contrast score when used as a background-color.
    bgContrast: function() {
      let contrast = chroma.contrast(this.colorHex, this.foreground);
      let contrastScore = score(contrast);

      return contrastScore;
    },

    // Contrast score when used as a foreground colour on white.
    fgContrast: function() {
      let contrast = chroma.contrast(this.colorHex, '#fff');
      let contrastScore = score(contrast);

      return contrastScore;
    },

    bgStyle: function() {
      return `background-color:${this.colorHex}; color:${this.foreground}`;
    },

    fgStyle: function() {
      return `background-color: #fff; color: ${this.colorHex}`;
    },
  },
};
</script>

<style>
.swatch {
  background-color: #f8f8f8;
}
</style>
