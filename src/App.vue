<template>
  <div id="app" class="w-full h-screen" data-theme="darkTheme">
    <Navbar />
    <router-view class="container mx-auto" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { computed } from "@vue/runtime-core";
import { useThemeStore } from "@/stores/theme";
export default {
  setup() {
    const store = useThemeStore();
    const theme = computed(() => store.getTheme);

    return { theme };
  },
  components: {
    Navbar,
  },
};
</script>
