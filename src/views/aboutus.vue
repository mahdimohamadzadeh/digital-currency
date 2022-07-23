<template>
  <div :data-theme="theme === 'light' ? 'emerald' : ''">
    <div class="mt-10 md:mt-32 container mx-auto">
      <div class="w-full grid grid-rows-2 md:grid-cols-2">
        <img
          class="h-96 w-11/12 md:w-full mx-auto object-cover rounded-2xl"
          v-lazy="{
            src: aboutImage,
            loading: loadingAboutImage,
            error: errorAboutImage,
            delay: 500,
          }"
        />

        <div class="flex p-10 mt-4 md:mt-0 md:pt-0 lg:py-8 flex-col">
          <h1 class="text-3xl uppercase">Mahdi Mohammadzadeh</h1>
          <p class="font-semibold mt-1">Web Developer</p>
          <p class="mt-16">
            Hello, I'm Mahdi Mohammadzadeh, a Front-end developer. I have been
            learning and practicing in this field for almost 2 years.
          </p>

          <a
            href="https://www.linkedin.com/in/mahdi-mohamadzadeh/"
            target="_blank"
            ><button
              class="rounded-md py-3 px-16 mt-10 md:mt-20 bg-accent text-white"
            >
              My Linkedin
            </button></a
          >
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
    const aboutImage = new URL("../assets/image/about.jpg", import.meta.url)
      .href;
    const loadingAboutImage = new URL(
      "../assets/image/loadingAbout.jpg",
      import.meta.url
    ).href;
    const errorAboutImage = new URL(
      "../assets/image/errorAbout.png",
      import.meta.url
    ).href;
    return { theme, aboutImage, loadingAboutImage, errorAboutImage };
  },
};
</script>
