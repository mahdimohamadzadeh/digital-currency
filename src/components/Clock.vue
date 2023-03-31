<template>
  <div class="flex justify-center lg:absolute lg:top-14 my-10">
    <div class="mt-2 p-2 w-40 bg-accent rounded-lg shadow-xl">
      <div
        class="flex justify-center text-secondary align-center w-28 h-14 rounded-xl text-3xl p-2 mx-4 my-2"
      >
        <div class="">{{ hours }}:</div>
        <div class="">{{ minutes }}:</div>
        <div class="">{{ seconds }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useThemeStore } from "@/stores/theme";
export default {
  name: "Clock",
  setup() {
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    const checkSingleDigit = (digit) => {
      return ("0" + digit).slice(-2);
    };
    const setTime = () => {
      setInterval(() => {
        const date = new Date();
        hours.value = date.getHours();
        minutes.value = checkSingleDigit(date.getMinutes());
        seconds.value = checkSingleDigit(date.getSeconds());
      }, 0);
    };
    onMounted(() => {
      setTime();
    });
    const store = useThemeStore();
    const theme = computed(() => store.getTheme || "darkTheme");

    return { theme, hours, minutes, seconds };
  },
};
</script>

<style scoped></style>
