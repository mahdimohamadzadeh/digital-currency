<template>
  <div class="grid place-items-center mt-52">
    <div class="w-full">
      <secondClock />
      <Employe />
    </div>
  </div>
</template>

<script>
import Employe from "../components/Employe.vue";
import secondClock from "../components/secondClock.vue";
export default {
  components: { Employe, secondClock },
};
</script>

<style lang="scss" scoped></style>
