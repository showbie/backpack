<template>
  <div class="score">
    <span :style="bgStyle">{{ bgScore }}</span>
    <span :style="fgStyle">{{ fgScore }}</span>
  </div>
</template>

<script>
// import chroma from 'chroma-js';
const chroma = require('chroma-js');

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

  computed: {
    foreground: function() {
      let lum = chroma(this.color).luminance();
      return lum < 0.5 ? 'white' : 'black';
    },
    bgScore: function() {
      let contrast = chroma.contrast(this.color, this.foreground);
      let a11yscore = score(contrast);

      return a11yscore;
    },
    bgStyle: function() {
      return `background-color:${this.color}; color:${this.foreground}`;
    },
    fgScore: function() {
      let contrast = chroma.contrast(this.color, '#fff');
      let a11yscore = score(contrast);

      return a11yscore;
    },
    fgStyle: function() {
      return `background-color: #fff; color: ${this.color}`;
    },
  },
};
</script>

<style>
</style>
