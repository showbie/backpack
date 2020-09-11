<template>
  <component
    class="p-4 rounded-2"
    :class="{ 'hover:bg-gray-100': path, 'opacity-50': !path }"
    :is="path ? 'a' : 'div'"
    :href="path"
  >
    <div class="flex items-center">
      <div class="p-2 rounded-1 text-white bg-gray-600">
        <component class="w-6 h-6" :is="icon" />
      </div>
      <h2 class="m-0 pl-2 text-xl font-500 leading-8">{{ title }}</h2>
    </div>
    <p class="m-0 pt-2">{{ details }}</p>
  </component>
</template>

<script>
import IconFeather from './IconFeather.vue';
import IconSwatch from './IconSwatch.vue';
import IconLayout from './IconLayout.vue';
import IconText from './IconText.vue';
import IconWind from './IconWind.vue';

export default {
  components: {
    IconFeather,
    IconSwatch,
    IconLayout,
    IconText,
    IconWind,
  },
  props: {
    feature: {
      type: Object,
    },
  },

  computed: {
    title() {
      return this.feature.title;
    },
    details() {
      return this.feature.details;
    },
    path() {
      return this.feature.path || false;
    },
    icon() {
      return this.feature.icon;
    },
  },
};
</script>
