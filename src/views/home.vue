<template>
  <div class="grid place-items-center">
    <LoadingPage v-if="loading" />
    <div class="w-full mt-36">
      <secondClock />
      <currencyTable :currencies="currencies" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useCurrencyStore } from "@/stores/currency";
import secondClock from "../components/secondClock.vue";
import currencyTable from "../components/currencyTable.vue";
import LoadingPage from "../components/LoadingPage.vue";
const currencyStore = useCurrencyStore();
const currencies = currencyStore.getCurrencies;
const loading = computed(() => currencyStore.getValueLoading);
</script>
