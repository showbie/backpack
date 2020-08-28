<template>
  <div class="pt-16">
    <AppHeader />

    <main class="container mx-auto px-4 lg:px-8">
      <div class="flex flex-wrap relative">
        <!-- <AppNav /> -->

        <Content class="w-full lg:w-4/5 py-8 prose" />
      </div>
    </main>

    <!-- <AppFooter /> -->
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },

  head() {
    return {
      titleTemplate: (chunk) => {
        if (chunk) {
          return `${chunk} - ${this.settings.title}`;
        }

        return this.settings.title;
      },
      bodyAttrs: {
        class: [
          ...this.bodyClass,
          'antialiased text-gray-700 leading-normal bg-white dark:bg-gray-900 dark:text-gray-300',
        ],
      },
      meta: [
        // Open Graph
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.settings.title,
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: this.settings.url },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.settings.url}/preview.png`,
        },
        // Twitter Card
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: this.settings.twitter,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.settings.title,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `${this.settings.url}/preview.png`,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.settings.title,
        },
      ],
    };
  },
};
</script>
