<template>
  <div class="bg-base-100">
    <Clock />
    <currencyTable />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useCurrencyStore } from "@/stores/currency";
import Clock from "../components/Clock.vue";
import Employe from "../components/Employe.vue";
const store = useCurrencyStore();
onMounted(() => {
  store.getPriceCurrency();
});
</script>
