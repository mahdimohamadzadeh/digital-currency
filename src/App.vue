<template>
  <div id="app" :data-theme="theme === 'light' ? 'emerald' : ''">
    <Navbar  />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  setup() {
    const store = useStore();
    const theme = computed(() => store.getters.getTheme);

    return { theme };
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>
