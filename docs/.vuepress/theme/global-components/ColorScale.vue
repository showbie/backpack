<template>
  <div class="scale flex gap-2 mt-4">
    <template v-for="(color, label, index) in colors">
      <a
        v-if="color && !label.includes('-')"
        :key="index"
        class="scale-chip w-12"
        :href="anchor + label"
        :title="hue + ' ' + label"
      >
        <div class="h-8 rounded-1" :style="{ backgroundColor: color }"></div>
      </a>
      <div
        v-else-if="!label.includes('-')"
        :key="index"
        class="scale-blank w-12"
      >
        <div class="h-8 rounded-1"></div>
      </div>
    </template>
  </div>
</template>

<script>
import { colors as SBE_COLORS } from '../../../packages/backpack-tokens/src/backpack-showbie';
import { colors as SOC_COLORS } from '../../../packages/backpack-tokens/src/backpack-socrative';

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
  /* margin-right: -0.5rem; */
}

.scale-blank > div {
  box-shadow: inset 0 0 0 1px hsla(257, 82%, 4%, 0.1);
}
</style>
