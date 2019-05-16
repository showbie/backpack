<template>
  <div class="palette mt5">
    <div class="row mt2" v-for="(lum, lumIndex) in luminanceGroups">
      <div class="cell w3 h3">
        <code>{{ lum }}</code>
      </div>
      <div class="hue" v-for="(arr, hue) in colors">
        <div
          class="w3 h3"
          v-for="color in getColorsWithValues(hue)"
          v-if="inLumRange(color, lumIndex)"
          :style="{ backgroundColor: color.hex }"
        >
          <code>{{ color.hex }}</code>
          <br>
          <code>{{ color.lum }}</code>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const chroma = require('chroma-js');

export default {
  data() {
    return {
      luminanceGroups: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1],

      colors: {
        grey: [
          '#f8f8f8', // 50
          '#ecedee', // 100
          '#e9e9eb', // replace with 100?
          // 200
          // 300
          '#c4c4ca', // 400 blessed
          '#b9bbbd', // 500 blessed
          '#989fa6', // 600
          '#7a8184', // 700
          '#545454', // 800
          // 900
        ],
        slate: [
          '#94b2c1',
          '#8aa4af', // blessed
          '#90a8b2',
        ],
        blues: [
          '#e5f8ff',
          '#dcf3ff',
          '#bae8ff',
          '#8ad8ff',
          '#f1faff', // blessed
          '#cbeeff', // blessed
          '#29b1f0', // blessed
          '#009fe8', // blessed
          '#0084c2',
        ],
        greens: [
          '#5dbe6e', // blessed
        ],
        yellows: ['#faf0a6', '#f7df68', '#f4d842', 'rgb(221, 198, 42)'],
        reds: [
          '#fce5e5', // blessed
          '#f07f7f', // blessed
          '#fc3d39',
          '#e10000', // blessed
          '#de0a17',
        ],
      },
    };
  },

  computed: {
    lumLoop() {
      let [head, ...tail] = this.luminanceGroups;
      return tail;
    },
  },

  methods: {
    inLumRange(color, index) {
      let last = this.luminanceGroups[index + 1] || 0;
      return color.lum <= this.luminanceGroups[index] && color.lum > last;
    },

    getColorsWithValues(hue) {
      let scale = this.colors[hue].map((color) => {
        return {
          hex: chroma(color).hex(),
          lum: Math.round(chroma(color).luminance() * 10 ** 4) / 10 ** 4,
        };
      });

      return scale.sort((a, b) => (a.lum > b.lum ? -1 : b.lum > a.lum ? 1 : 0));
    },
  },
};
</script>

<style>
.palette .row {
  display: grid;
  grid-template-columns: repeat(7, 4rem);
  grid-gap: 0.5rem;
}

.palette .hue code {
  padding: 0;
  background-color: transparent;
}

.palette code {
  font-size: 0.75rem;
}
</style>
