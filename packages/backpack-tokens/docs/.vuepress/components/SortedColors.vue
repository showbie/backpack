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
        greys: [
          '#8c97a1',
          '#e9e9eb',
          '#ecedee',
          '#b9bbbd',
          '#cac9cd',
          '#545454',
          '#7a8184',
          '#fcfcfc',
          '#f8f8f8',
          '#f2f5f5',
          '#b5b7ba',
          '#f0f0f0',
          '#989fa6',
          '#898f95',
          '#070b12',
          '#c4c4c4',
        ],
        blues: [
          '#f1faff',
          '#dcf3ff',
          '#cbeeff',
          '#bae8ff',
          '#8ad8ff',
          '#29b1f0',
          '#009fe8',
          '#0084c2',
        ],
        greens: ['#64bc74'],
        yellows: ['#faf0a6', '#f7df68', 'rgb(221, 198, 42)'],
        reds: ['#fce5e5', '#f07f7f', '#fc3d39'],
        others: ['#90a8b2', '#e5f8ff', '#94b2c1'],
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
