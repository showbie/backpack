<template>
  <div class="swatch flex mt2 mb4 rounded-2 overflow-hidden">
    <div
      class="flex flex-shrink-0 items-end w-32"
      :style="bgStyle"
      style="min-height: 8rem"
    >
      <div class="w-full flex justify-around mb3">
        <span
          class="inline-block f6 font-700 p-2 rounded-1"
          :style="blackContrastStyle"
          >{{ blackContrast }}</span
        >
        <span
          class="inline-block f6 font-700 p-2 rounded-1"
          :style="whiteContrastStyle"
          >{{ whiteContrast }}</span
        >
      </div>
    </div>
    <dl
      class="swatch-details flex flex-wrap items-center m-0 px-4 py-3 bl b--black-025"
    >
      <div class="w-full my-2 mx-2">
        <dt class="text-xs text-600 lh-copy uppercase">Name</dt>
        <dd class="f5 ml-0">{{ colorName }}</dd>
      </div>
      <div class="my-2 mx-2">
        <dt class="text-xs text-600 lh-copy uppercase">Value</dt>
        <dd class="f5 ml-0">
          <code>{{ chromaColor.hex() }}</code>
        </dd>
      </div>
      <div class="my-2 mx-2">
        <dt class="text-xs text-600 lh-copy uppercase">SCSS</dt>
        <dd class="f5 ml-0">
          <code>${{ variablePrefix }}-{{ hue }}-{{ scale }}</code>
        </dd>
      </div>
      <div class="my-2 mx-2">
        <dt class="text-xs text-600 lh-copy uppercase">Swift</dt>
        <dd class="f5 ml-0">
          <code>{{ swiftVar }}</code>
        </dd>
      </div>
      <div class="flex">
        <div class="my-2 mx-2">
          <dt class="text-xs text-600 lh-copy uppercase">RGB</dt>
          <dd class="f5 ml-0">
            <code>{{ colorRGB }}</code>
          </dd>
        </div>
        <div class="my-2 mx-2">
          <dt class="text-xs text-600 lh-copy uppercase">HSL</dt>
          <dd class="f5 ml-0">
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

import SBE from '../../../packages/backpack-tokens/src/backpack-showbie';
import SOC from '../../../packages/backpack-tokens/src/backpack-socrative';

const nearestColor = require('nearest-color');

const {
  swiftVarName,
} = require('../../../packages/backpack-tokens/lib/utils/string');

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
    chromaColor: function() {
      let source = this.theme === 'socrative' ? SOC.colors : SBE.colors;
      let color = this.hex || source[this.hue][this.scale];

      return chroma(color);
    },

    colorRGB: function() {
      return this.chromaColor.rgb().join(', ');
    },

    colorHSL: function() {
      let hsl = [
        Math.round(this.chromaColor.get('hsl.h')),
        Math.round(this.chromaColor.get('hsl.s') * 100),
        Math.round(this.chromaColor.get('hsl.l') * 100),
      ];

      return hsl.join(', ');
    },

    variablePrefix: function() {
      return this.theme === 'socrative' ? SOC.prefix : SBE.prefix;
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

      return nearest(this.chromaColor.alpha(1).hex()).name;
    },

    swiftVar: function() {
      return swiftVarName(
        this.variablePrefix,
        this.hue,
        this.scale ? this.scale.replace(/-+/g, '_') : null
      );
    },

    // Determine best foreground colour to use on `color` background.
    foreground: function() {
      let lum = this.chromaColor.luminance();
      return lum < 0.5 ? 'white' : 'black';
    },

    // Contrast score against black.
    blackContrast() {
      let contrast = chroma.contrast(this.chromaColor.hex(), '#000');
      let contrastScore = score(contrast);

      return contrastScore;
    },

    // Contrast score against white.
    whiteContrast() {
      let contrast = chroma.contrast(this.chromaColor.hex(), '#fff');
      let contrastScore = score(contrast);

      return contrastScore;
    },

    bgStyle: function() {
      return `background-color:${this.chromaColor.css()}; color:${
        this.foreground
      }`;
    },

    blackContrastStyle: function() {
      return `color: #000; background-color: ${this.chromaColor.css()}`;
    },

    whiteContrastStyle: function() {
      return `color: #fff; background-color: ${this.chromaColor.css()}`;
    },
  },
};
</script>

<style>
.swatch {
  background-color: #f5f7f8;
}
</style>
