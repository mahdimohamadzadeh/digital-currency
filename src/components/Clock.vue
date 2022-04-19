<template>
  <div
    class="flex justify-center lg:absolute lg:top-8   my-10"
    :data-theme="theme === 'light' ? 'emerald' : ''"
  >
    <div class="mt-2 p-2 w-40 bg-accent rounded-lg shadow-xl">
      <div
        class="flex justify-center align-center w-28 h-14 rounded-xl text-3xl p-2 mx-4 my-2"
      >
        <div class="">{{ hours }}:</div>
        <div class="">{{ minutes }}:</div>
        <div class="">{{ seconds }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "Clock",
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  methods: {
    setTime() {
      setInterval(() => {
        const date = new Date();
        this.hours = date.getHours();
        this.minutes = this.checkSingleDigit(date.getMinutes());
        this.seconds = this.checkSingleDigit(date.getSeconds());
      }, 0);
    },
    checkSingleDigit(digit) {
      return ("0" + digit).slice(-2);
    },
  },
  mounted() {
    this.setTime();
  },
  setup() {
    const store = useStore();
    const theme = computed(() => store.getters.getTheme || "dark");

    return { theme };
  },
};
</script>

<style scoped></style>
