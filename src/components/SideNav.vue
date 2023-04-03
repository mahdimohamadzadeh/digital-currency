<template>
  <div class="w-full h-full">
    <!-- Navbar for phone screen -->
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
              class="w-6 h-6 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 23q-2.8 0-5.15-1.275T3 18.325V21H1v-6h6v2H4.525q1.2 1.8 3.163 2.9T12 21q1.875 0 3.513-.713t2.85-1.924q1.212-1.213 1.925-2.85T21 12h2q0 2.275-.863 4.275t-2.362 3.5q-1.5 1.5-3.5 2.363T12 23Zm-.9-4v-1.3q-1.175-.275-1.913-1.012T8.1 14.75l1.65-.65q.3 1.025.938 1.538t1.462.512q.825 0 1.413-.387t.587-1.213q0-.725-.613-1.175T11.35 12.35q-1.475-.525-2.162-1.25T8.5 9.2q0-1.025.713-1.862T11.15 6.25V5h1.75v1.25q.9.075 1.638.725T15.55 8.5l-1.6.65q-.2-.575-.65-.963T12.05 7.8q-.875 0-1.338.375T10.25 9.2q0 .65.575 1.025t2.075.875q1.8.65 2.4 1.525t.6 1.925q0 .725-.25 1.275t-.663.938q-.412.387-.962.624t-1.175.363V19H11.1ZM1 12q0-2.275.863-4.275t2.362-3.5q1.5-1.5 3.5-2.362T12 1q2.8 0 5.15 1.275t3.85 3.4V3h2v6h-6V7h2.475q-1.2-1.8-3.163-2.9T12 3q-1.875 0-3.513.713t-2.85 1.924Q4.426 6.85 3.714 8.488T3 12H1Z"
              />
            </svg>
            <router-link :to="{ name: 'exchangePage' }">exchange</router-link>
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
            <router-link :to="{ name: 'aboutUsPage' }">AboutUs</router-link>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import { useThemeStore } from "@/stores/theme";
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  theme: {
    type: [String, Boolean],
    default: "dark",
  },
});
const store = useThemeStore();
const theme = computed(() => store.getTheme || "darkTheme");
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
