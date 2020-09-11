<template>
  <div class="swatch flex mt2 mb4 rounded-2 overflow-hidden">
    <div
      class="flex flex-shrink-0 items-end w-32"
      :style="bgStyle"
      style="min-height: 8rem"
    >
      <div class="w-full flex justify-around mb3">
        <!-- <span
          class="inline-block f6 font-700 p-2 rounded-1"
          :style="blackContrastStyle"
          >{{ blackContrast }}</span
        >
        <span
          class="inline-block f6 font-700 p-2 rounded-1"
          :style="whiteContrastStyle"
          >{{ whiteContrast }}</span
        > -->
      </div>
    </div>
    <dl
      class="swatch-details flex flex-wrap items-center m-0 px-8 py-4 border-0 border-l border-divider border-solid"
    >
      <div class="w-full my-2 mx-2">
        <dt class="text-xs font-600 uppercase">Name</dt>
        <dd class="ml-0">{{ color.name }}</dd>
      </div>
      <div class="my-2 mx-2">
        <dt class="text-xs font-600 uppercase">Value</dt>
        <dd class="ml-0">
          <code>{{ color.hex }}</code>
        </dd>
      </div>
      <div class="my-2 mx-2">
        <dt class="text-xs font-600 uppercase">SCSS</dt>
        <dd class="ml-0">
          <code>${{ color.scss }}</code>
        </dd>
      </div>
      <div class="my-2 mx-2">
        <dt class="text-xs font-600 uppercase">Swift</dt>
        <dd class="ml-0">
          <code>{{ color.swift }}</code>
        </dd>
      </div>
      <div class="flex">
        <div class="my-2 mx-2">
          <dt class="text-xs font-600 uppercase">RGB</dt>
          <dd class="ml-0">
            <code>{{ color.rgb }}</code>
          </dd>
        </div>
        <div class="my-2 mx-2">
          <dt class="text-xs font-600 uppercase">HSL</dt>
          <dd class="ml-0">
            <code>{{ color.hsl }}</code>
          </dd>
        </div>
      </div>
    </dl>
  </div>
</template>

<script>
import colors from '@showbie/backpack-tokens/dist/color-docs';

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
    color: function() {
      let { showbie, socrative } = colors;
      let source = this.theme === 'socrative' ? socrative : showbie;
      let color = this.hex || source[this.hue][this.scale];

      return color;
    },

    // Determine best foreground colour to use on `color` background.
    // foreground: function() {
    //   let lum = this.chromaColor.luminance();
    //   return lum < 0.5 ? 'white' : 'black';
    // },

    // // Contrast score against black.
    // blackContrast() {
    //   let contrast = chroma.contrast(this.chromaColor.hex(), '#000');
    //   let contrastScore = score(contrast);

    //   return contrastScore;
    // },

    // // Contrast score against white.
    // whiteContrast() {
    //   let contrast = chroma.contrast(this.chromaColor.hex(), '#fff');
    //   let contrastScore = score(contrast);

    //   return contrastScore;
    // },

    bgStyle: function() {
      return `background-color:${this.color.hex};`;
    },

    // blackContrastStyle: function() {
    //   return `color: #000; background-color: ${this.chromaColor.css()}`;
    // },

    // whiteContrastStyle: function() {
    //   return `color: #fff; background-color: ${this.chromaColor.css()}`;
    // },
  },
};
</script>

<style>
.swatch {
  background-color: #f5f7f8;
}
</style>
