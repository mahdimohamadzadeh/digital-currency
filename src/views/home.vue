<template>
  <div class="home">
    <Clock />
    <Employe />
  </div>
</template>

<script>
import Clock from "../components/Clock.vue";
import Employe from "../components/Employe.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  setup() {
    const store = useStore();
    const theme = computed(() => store.getters.getTheme);

    return { theme };
  },
  components: {
    Employe,
    Clock,
  },
};
</script>
