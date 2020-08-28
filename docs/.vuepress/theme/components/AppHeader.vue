<template>
  <nav
    class="fixed top-0 z-40 w-full border-b dark:border-gray-800 bg-white dark:bg-gray-900"
    :class="{ 'shadow border-transparent': scrolled }"
    @click="scrollToTop"
  >
    <div class="container mx-auto flex-1 px-4 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="lg:w-1/5 flex items-center pr-4" @click.stop="noop">
          <RouterLink :to="'/'" class="flex-shrink-0 flex-1 font-700 text-xl">
            <span>{{ title }}</span>

            <!-- <img
              v-if="logo"
              :src="logo.light"
              class="h-8 max-w-full light-img"
              :alt="title"
            />
            <img
              v-if="logo"
              :src="logo.dark"
              class="h-8 max-w-full dark-img"
              :alt="title"
            /> -->
          </RouterLink>
        </div>
        <div class="hidden flex-1 lg:flex justify-center w-4/6">
          <AppSearch />
        </div>
        <div class="lg:w-1/5 flex items-center justify-end pl-8">
          <div class="flex items-center">
            <a
              v-if="repoLink"
              :href="repoLink"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              name="GitHub"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark-hover:text-primary-500 ml-4"
            >
              <IconGitHub class="w-5 h-5" />
            </a>
            <button
              class="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none -mr-2"
              aria-label="Menu"
              @click.stop="open = !open"
            >
              <IconX v-if="open" class="w-5 h-5" />
              <IconMenu v-else class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import AppSearch from './AppSearch';
import IconGitHub from './icons/IconGitHub';
import IconMenu from './icons/IconMenu';
import IconX from './icons/IconX';

export default {
  components: {
    AppSearch,
    IconGitHub,
    IconMenu,
    IconX,
  },

  data() {
    return {
      scrolled: 0,
      open: false,
    };
  },

  watch: {
    $route() {
      this.open = false;
    },
  },

  computed: {
    title() {
      return this.$site.title;
    },
    repoLink() {
      const { repo } = this.$site.themeConfig;
      if (repo) {
        return /^https?:/.test(repo) ? repo : `https://github.com/${repo}`;
      }
      return null;
    },
  },

  methods: {
    setOpen(value) {
      this.open = value;
    },
  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
    scrollToTop() {
      if (window.innerWidth >= 1280) {
        return;
      }
      window.scrollTo(0, 0);
    },
    noop() {},
  },
};
</script>
