<template>
  <div class="size flex mt4 mb4">
    <dl class="w3 ma0">
      <dt class="f7 fw6 lh-copy ttu">{{ name }}</dt>
      <dd class="f5 ml0">
        <code>{{ fontSize }}</code>
      </dd>
    </dl>
    <div class="ml3" :style="exampleCSS">
      The quick brown fox jumps over the lazy dog.
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

<style></style>
