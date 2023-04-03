<template>
  <div class="flex justify-center absolute top-11 left-16 lg:left-10 mt-10">
    <div id="clock" class="text-center bg-base-100 rounded-lg p-4">
      <p class="date text-base">{{ date }}</p>
      <p class="time text-3xl py-3">{{ time }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const time = ref("");
const date = ref("");
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const updateTime = () => {
  const cd = new Date();
  time.value =
    zeroPadding(cd.getHours(), 2) +
    ":" +
    zeroPadding(cd.getMinutes(), 2) +
    ":" +
    zeroPadding(cd.getSeconds(), 2);
  date.value =
    zeroPadding(cd.getFullYear(), 4) +
    "-" +
    zeroPadding(cd.getMonth() + 1, 2) +
    "-" +
    zeroPadding(cd.getDate(), 2) +
    " " +
    week[cd.getDay()];
};
const zeroPadding = (num, digit) => {
  let zero = "";
  for (let i = 0; i < digit; i++) {
    zero += "0";
  }
  return (zero + num).slice(-digit);
};
const timerID = setInterval(updateTime, 1000);
updateTime();
</script>

<style lang="scss" scoped>
#clock {
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  .time {
    letter-spacing: 0.05em;
  }
  .date {
    letter-spacing: 0.1em;
  }
}
</style>
