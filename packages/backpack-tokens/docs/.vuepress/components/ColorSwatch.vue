<template>
  <div class="swatch w-33 br2">
    <div class="h4 br2" :style="bgStyle"></div>
    <div class="flex justify-around mt2">
      <span class="dib f6 b pa2 br1" :style="bgStyle">{{ bgScore }}</span>
      <span class="dib f6 b pa2 br1" :style="fgStyle">{{ fgScore }}</span>
    </div>
    <div class="swatch-details ph2 pt3 pb3 f6">
      <dl class="flex justify-between ma0">
        <dt class="b ttu">Name</dt>
        <dd>Name goes here</dd>
      </dl>
      <dl class="flex justify-between mt2 mb0">
        <dt class="f6 b ttu">Value</dt>
        <dd>
          <code>{{ color }}</code>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
const chroma = require('chroma-js');

/**
 * @todo Add case for `AA Large` contrast score (greater than 3)
 */
function score(contrast) {
  let score;

  if (contrast > 7) {
    score = 'AAA';
  } else if (contrast >= 4.5) {
    score = 'AA';
  } else if (contrast < 4.5) {
    score = 'Fail';
  } else {
    score = 'Unknown';
  }

  return score;
}

export default {
  props: {
    color: {
      type: String,
      required: true,
    },
  },

  /**
   * @todo
   *    - [ ] Change `color` prop from hex to colour scale val (ie: blue.600)
   *    - [ ] Add colour value lookup utility
   *    - [ ] Add colour name value
   *    - [ ] Rename `score` to `contrast` (more explicit)
   */
  computed: {
    // Determine best foreground colour to use on `color` background.
    foreground: function() {
      let lum = chroma(this.color).luminance();
      return lum < 0.5 ? 'white' : 'black';
    },

    // Contrast score when used as a background-color.
    bgScore: function() {
      let contrast = chroma.contrast(this.color, this.foreground);
      let a11yscore = score(contrast);

      return a11yscore;
    },

    // Contrast score when used as a foreground colour on white.
    fgScore: function() {
      let contrast = chroma.contrast(this.color, '#fff');
      let a11yscore = score(contrast);

      return a11yscore;
    },

    bgStyle: function() {
      return `background-color:${this.color}; color:${this.foreground}`;
    },

    fgStyle: function() {
      return `background-color: #fff; color: ${this.color}`;
    },
  },
};
</script>

<style>
.swatch {
  background-color: #f8f8f8;
}
</style>
