<template>
  <div class="swatch mt4 mb4">
    <div class="flex items-baseline justify-start">
      <span class="flex w3 f6 fw6 lh-copy ttu">{{ name }}</span>
      <span class="flex f5 ml2">
        <code>{{ fontSize }}</code>
      </span>
    </div>
    <div class="flex items-baseline justify-start mt3">
      <span class="flex w3 flex-shrink-0"></span>
      <span class="flex ml2" :style="exampleCSS"
        >The quick brown fox jumps over the lazy dog.</span
      >
    </div>
  </div>
</template>

<script>
const ROOT_SIZE = 12;

export default {
  props: {
    name: {
      type: String,
    },
    value: {
      type: String,
    },
    family: {
      type: String,
      required: false,
    },
  },

  computed: {
    fontSize() {
      let val = /([0-9.]+)/.exec(this.value)[1];
      return `${Math.floor(val * ROOT_SIZE)}px`;
    },
    exampleCSS() {
      let family = this.family ? `font-family: ${this.family};` : '';
      return `${family} font-size: ${this.fontSize}`;
    },
  },
};
</script>
