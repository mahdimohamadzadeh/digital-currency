<template>
  <div class="w-full h-full">
    <div
      v-if="show"
      class="w-full h-full opacity-75 bg-gray-900 z-20 fixed top-0 left-0"
      @click="$emit('close')"
    >
      <button class="absolute top-3 right-5" v-if="show">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <Transition name="slide-fade">
      <div
        v-if="show"
        class="h-full w-1/2 shadow-xl opacity-90 shadow-slate-500 bg-accent text-neutral z-30 fixed top-0 left-0 p-2 text-xl rounded-b-lg rounded-r-xl"
      >
        <ul class="nav-list flex flex-col">
          <li
            class="my-4 flex justify-start ml-3 items-center cursor-pointer"
            @click="$emit('close')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <router-link to="/">Home</router-link>
          </li>
          <li
            class="my-4 flex justify-start ml-3 items-center cursor-pointer"
            @click="$emit('close')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              /></svg
            ><router-link to="/calculator">Calculator</router-link>
          </li>
          <li
            class="my-4 flex justify-start ml-3 items-center cursor-pointer"
            @click="$emit('close')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>
            <router-link to="/aboutus">AboutUs</router-link>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "TheSidenav",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: [String, Boolean],
      default: "light",
    },
  },
  setup() {
    const store = useStore();
    const theme = computed(() => store.getters.getTheme || "dark");

    return { theme };
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translatex(-30px);
  opacity: 0;
}
</style>
