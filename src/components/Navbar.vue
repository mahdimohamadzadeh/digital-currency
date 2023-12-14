<template>
  <nav>
    <!-- Navbar for laptop screen -->
    <div
      v-show="!menu"
      class="z-50 navbar shadow-lg bg-neutral rounded-b-box fixed top-0"
    >
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
        <span class="text-lg font-bold"> Digital Currency </span>
      </div>

      <div class="flex-1 px-2 mx-2">
        <div class="items-stretch hidden md:flex">
          <router-link to="/" class="btn btn-ghost btn-sm rounded-btn">
            Home
          </router-link>
          <router-link
            :to="{ name: 'exchangePage' }"
            class="btn btn-ghost btn-sm rounded-btn"
          >
            exchange
          </router-link>
          <router-link
            :to="{ name: 'calculatorPage' }"
            class="btn btn-ghost btn-sm rounded-btn"
          >
            Calculator
          </router-link>
          <router-link
            :to="{ name: 'aboutUsPage' }"
            class="btn btn-ghost btn-sm rounded-btn"
          >
            AboutUs
          </router-link>
        </div>
      </div>
      <div class="lg:mr-16">
        <button class="btn btn-square btn-ghost w-16">
          <a
            target="_blank"
            href="https://github.com/mahdimohamadzadeh/digital-currency"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
              />
            </svg>
          </a>
        </button>
      </div>
    </div>
    <SideNav :show="menu" @close="onMenu" :theme="theme" />
  </nav>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import SideNav from "./SideNav.vue";
import { useThemeStore } from "@/stores/theme";
import { computed } from "@vue/runtime-core";
const menu = ref(false);
const store = useThemeStore();
const theme = computed(() => store.getTheme || "darkTheme");
const onMenu = () => {
  menu.value = !menu.value;
};
</script>
