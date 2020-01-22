<template>
  <div class="scale flex mt2">
    <a
      class="scale-chip w-10 mr2"
      :href="anchor + label"
      :title="hue + ' ' + label"
      v-for="(color, label) in colors"
      v-if="color && !label.includes('-')"
    >
      <div class="h2 br2" :style="{ backgroundColor: color }"></div>
    </a>
    <div class="scale-blank w-10 mr2" v-else-if="!label.includes('-')">
      <div class="h2 br2"></div>
    </div>
  </div>
</template>

<script>
import { colors as SBE_COLORS } from '../../../src/backpack-showbie';
import { colors as SOC_COLORS } from '../../../src/backpack-socrative';

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
      let source = this.theme === 'socrative' ? SOC_COLORS : SBE_COLORS;
      return source[this.hue];
    },

    anchor: function() {
      return `#${this.hue}-`;
    },
  },
};
</script>

<style>
.scale {
  margin-right: -0.5rem;
}

.scale-blank > div {
  box-shadow: inset 0 0 0 1px hsla(257, 82%, 4%, 0.1);
}
</style>
