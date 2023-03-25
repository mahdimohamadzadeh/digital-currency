<template>
  <nav>
    <div v-show="!menu" class="navbar shadow-lg bg-neutral rounded-b-box">
      <div
        class="flex flex-col items-center justify-center drawer-content md:hidden"
      >
        <label
          for="my-drawer-3"
          class="btn btn-square btn-ghost"
          @click="onMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div class="flex-none px-2 mx-2">
        <span class="text-lg font-bold"> change-money </span>
      </div>

      <div class="flex-1 px-2 mx-2">
        <div class="items-stretch hidden md:flex">
          <router-link to="/" class="btn btn-ghost btn-sm rounded-btn">
            Home
          </router-link>
          <router-link
            to="/calculator"
            class="btn btn-ghost btn-sm rounded-btn"
          >
            Calculator
          </router-link>
          <router-link to="/aboutus" class="btn btn-ghost btn-sm rounded-btn">
            AboutUs
          </router-link>
        </div>
      </div>
      <div class="lg:mr-16">
        <button class="btn btn-square btn-ghost w-16">
          <ThemeSwitchButton />
        </button>
      </div>
    </div>
    <SideNav :show="menu" @close="onMenu" :theme="theme" />
  </nav>
</template>

<script>
import { ref } from "@vue/reactivity";
import ThemeSwitchButton from "./ThemeSwitchButton.vue";
import SideNav from "./SideNav.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  setup() {
    const menu = ref(false);
    const store = useStore();
    const theme = computed(() => store.getters.getTheme);
    const onMenu = () => {
      menu.value = !menu.value;
    };
    return { menu, onMenu, theme };
  },
  components: { ThemeSwitchButton, SideNav },
};
</script>

<style lang="scss" scoped></style>
