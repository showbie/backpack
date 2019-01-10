<template>
  <div class="scale cf mt2">
    <div class="scale-chip fl w-20 ph2 mb3" v-for="(color, label) in colors">
      <div class="h3 br2" :style="{ backgroundColor: color }"></div>
      <div class="mt1 f7 fw6 ttu o-80">{{ hue }}-{{ label }}</div>
    </div>
  </div>
</template>

<script>
const COLORS = require('../../../src/color');

export default {
  props: {
    hue: {
      type: String,
      required: true,
    },
  },

  computed: {
    colors: function() {
      return COLORS[this.hue];
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
