<template>
  <div class="size flex mt4 mb4">
    <dl class="w3 ma0">
      <dt class="f7 fw6 lh-copy ttu">{{ weight }}</dt>
      <dd class="f5 ml0">
        <code>{{ name }}</code>
      </dd>
    </dl>
    <div class="ml3" :style="`font-size: 18px; font-weight: ${weight}`">
      The quick brown fox jumps over the lazy dog.
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
  },
};
</script>

<style></style>
