<template>
  <div id="app" class="w-full">
    <Navbar />
    <router-view class="container mx-auto" />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import { computed, onMounted } from "@vue/runtime-core";
import { useThemeStore } from "@/stores/theme";
import { useCurrencyStore } from "@/stores/currency";
const themeStore = useThemeStore();
const currencyStore = useCurrencyStore();
const theme = computed(() => themeStore.getTheme); // Get value theme

onMounted(async () => {
  await currencyStore.getDetailOfCurrency(); // Get digital currency details from Api
});
</script>
