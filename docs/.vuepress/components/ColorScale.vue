<template>
  <div class="scale flex gap-2 mt-2">
    <template v-for="(label, index) in labels">
      <a
        v-if="colors[label]"
        :key="index"
        class="scale-chip flex-1"
        :href="anchor + label"
        :title="hue + ' ' + label"
      >
        <div
          class="w-full h-8 rounded-1"
          :style="{ backgroundColor: colors[label].hex }"
        ></div>
      </a>
      <div v-else :key="index" class="scale-blank flex-1">
        <div class="w-full h-8 rounded-1"></div>
      </div>
    </template>
  </div>
</template>

<script>
import colors from '@showbie/backpack-tokens/dist/color-docs';

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

  data() {
    return {
      /**
       * Tokens export only includes defined shades, but we need to
       * loop through the whole scale.
       */
      labels: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    };
  },

  computed: {
    /**
     * @todo Need to handle error here if the colour doesn't exist
     *       in the main list.
     */
    colors: function() {
      let { showbie, socrative } = colors;
      let source = this.theme === 'socrative' ? socrative : showbie;

      return source[this.hue];
    },

    anchor: function() {
      return `#${this.hue}-`;
    },
  },
};
</script>

<style>
.scale-blank > div {
  box-shadow: inset 0 0 0 1px hsla(257, 82%, 4%, 0.1);
}
</style>
