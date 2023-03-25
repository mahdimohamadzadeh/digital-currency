<template>
  <div id="app" class="w-full h-screen" data-theme="darkTheme">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
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
  },
};
</script>
