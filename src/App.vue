<template>
  <div  id="app" class="">
    <Navbar class="mb-20" />
    <router-view class="container mx-auto px-4" />
    <!-- <Footer class="mt-20" /> -->
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  setup() {
    return {};
  },
  components: { Navbar, Footer },
};
</script>

<style lang="scss" scoped></style>
