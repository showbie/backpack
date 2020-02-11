<template>
  <div class="mt4 mb4">
    <div class="flex items-baseline justify-start">
      <span class="flex w3 f6 fw6 lh-copy ttu">{{ weight }}</span>
      <span class="flex f5 ml2">
        <code>{{ name }}</code>
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
export default {
  props: {
    name: {
      type: String,
    },
    weight: {
      type: String,
    },
    family: {
      type: String,
      required: false,
    },
  },

  computed: {
    exampleCSS() {
      let family = this.family ? `font-family: ${this.family};` : '';
      return `${family} font-size: 18px; font-weight: ${this.weight}`;
    },
  },
};
</script>
