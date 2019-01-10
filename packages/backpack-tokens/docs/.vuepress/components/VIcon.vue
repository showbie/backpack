<template>
  <svg class="vicon" width="24" height="24">
    <use v-bind:xlink:href="iconPath"></use>
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    iconPath: function() {
      return `/feather-sprite.svg#${this.name}`;
    },
  },
};
</script>

<style>
.vicon {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
</style>
