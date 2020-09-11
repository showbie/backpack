<template>
  <div class="my-8">
    <div class="flex items-baseline justify-start">
      <span class="flex w-16 text-sm font-600 uppercase">{{ name }}</span>
      <span class="flex ml-2 text-base">
        <code>{{ fontSize }}</code>
      </span>
    </div>
    <div class="flex items-baseline justify-start mt-4">
      <span class="flex w-16 flex-shrink-0"></span>
      <span class="flex ml-2" :style="exampleCSS"
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
