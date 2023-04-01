<template>
  <div id="app" class="w-full" data-theme="darkTheme">
    <Navbar />
    <router-view class="container mx-auto" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { computed, onMounted } from "@vue/runtime-core";
import { useThemeStore } from "@/stores/theme";
import { useCurrencyStore } from "@/stores/currency";
export default {
  setup() {
    const themeStore = useThemeStore();
    const currencyStore = useCurrencyStore();
    const theme = computed(() => themeStore.getTheme);
    onMounted(async () => {
      await currencyStore.getDetailOfCurrency();
    });
    return { theme };
  },
  components: {
    Navbar,
  },
};
</script>
