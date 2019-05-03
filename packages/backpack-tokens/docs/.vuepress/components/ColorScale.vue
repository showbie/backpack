<template>
  <div class="scale cf mt2">
    <div class="scale-chip fl w-20 ph2 mb3" v-for="(color, label) in colors" v-if="color">
      <div class="h3 br2" :style="{ backgroundColor: color }"></div>
      <div class="mt1 f7 fw6 ttu o-80">{{ hue }}-{{ label }}</div>
    </div>
  </div>
</template>

<script>
import { colors as SHOWBIE_COLORS } from '../../../src/backpack-showbie';
import { colors as SOCRATIVE_COLORS } from '../../../src/backpack-socrative';

const COLORS = require('../../../src/color');

export default {
  props: {
    theme: {
      type: String,
      default: 'showbie',
    },
    hue: {
      type: String,
      required: true,
    },
  },

  computed: {
    /**
     * @todo Need to handle error here if the colour doesn't exist
     *       in the main list.
     */
    colors: function() {
      let source =
        this.theme === 'socrative' ? SOCRATIVE_COLORS : SHOWBIE_COLORS;
      return source[this.hue];
    },

    bgStyle: function(hex) {
      return `background-color:${hex};`;
    },
  },
};
</script>

<style>
.scale {
  margin-right: -0.5rem;
  margin-left: -0.5rem;
}
</style>
