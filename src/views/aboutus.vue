<template>
  <div class="Aboutus" :data-theme="theme === 'light' ? 'emerald' : ''">
    <div class="container mx-auto mt-10">
      <div class="grid grid-cols-1 md:grid-cols-2 shadow-2xl">
        <div class="max-h-96 md:h-screen">
          <img
            class="w-screen h-screen md:h-96 object-cover object-top rounded-lg"
            src="https://www.truegossiper.com/wp-content/uploads/2019/10/1-7.jpg"
            alt=""
          />
        </div>
        <div class="flex p-10">
          <div class="mb-auto mt-4 max-w-lg">
            <h1 class="text-3xl uppercase">Mahdi Mohammadzadeh</h1>
            <p class="font-semibold mt-1">Web Developer</p>
            <p class="mt-16">
              Hello, I'm Mahdi Mohammadzadeh, a Front-end developer. I have been
              learning and practicing in this field for almost 2 years.
            </p>
            <button class="rounded-md py-3 px-7 mt-6 bg-accent">
              <a href="https://www.linkedin.com/in/mahdi-mohamadzadeh/">My Linkedin</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const theme = computed(() => store.getters.getTheme || "dark");

    return { theme };
  },
};
</script>
