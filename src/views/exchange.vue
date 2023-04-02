<template>
  <div class="grid place-items-center mt-52">
    <div class="w-full">
      <Clock />
      <Employe />
    </div>
  </div>
</template>

<script>
import Employe from "../components/Employe.vue";
import Clock from "../components/Clock.vue";
export default {
  components: { Employe, Clock },
};
</script>

<style lang="scss" scoped></style>
