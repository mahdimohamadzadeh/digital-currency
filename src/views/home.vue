<template>
  <div class="grid place-items-center">
    <LoadingPage v-if="loading" />
    <!-- show loading page -->
    <div class="w-full mt-16 lg:mt-36">
      <Clock class="hidden md:block" />
      <currencyTable :currencies="currencies" :loading="loading" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useCurrencyStore } from "@/stores/currency";
import Clock from "../components/Clock.vue";
import currencyTable from "../components/currencyTable.vue";
import LoadingPage from "../components/LoadingPage.vue";
const currencyStore = useCurrencyStore();
const currencies = currencyStore.getCurrencies; // Get array of currencies through getter
const loading = computed(() => currencyStore.getValueLoading);
</script>
