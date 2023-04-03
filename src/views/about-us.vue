<template>
  <div class="grid h-screen place-items-center mt-10 lg:mt-0">
    <div class="grid lg:grid-cols-2 grid-cols-1">
      <img
        class="w-full px-2 mx-auto object-cover rounded-2xl"
        v-lazy="{
          src: aboutImage,
          loading: loadingAboutImage,
          error: errorAboutImage,
          delay: 500,
        }"
      />

      <div class="flex flex-col justify-around px-10 mt-6 lg:mt-0">
        <h1 class="text-3xl uppercase">Mahdi Mohammadzadeh</h1>
        <p class="font-semibold mt-0 md:-mt-2 lg:-mt-8">Web Developer</p>
        <p class="mt-16">
          Hi , I'm Mahdi Mohamadzadeh.A passionate frontend developer from Iran
          I have been learning and practicing in this field for almost 3 years.
        </p>
        <button
          @click="downloadFile"
          class="rounded-md py-3 px-16 mt-10 md:mt-20 bg-accent text-white"
        >
          My Resume
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "@vue/runtime-core";
import { useThemeStore } from "@/stores/theme";
import axios from "axios";
const store = useThemeStore();
const theme = computed(() => store.getTheme || "darkTheme");
// Get image url
const aboutImage = new URL("../assets/image/about.jpg", import.meta.url).href;
const loadingAboutImage = new URL(
  "../assets/image/loadingAbout.jpg",
  import.meta.url
).href;
const errorAboutImage = new URL(
  "../assets/image/errorAbout.png",
  import.meta.url
).href;
const urlFile = ref(
  "http://localhost:3000/src/assets/pdf/MahdiMohamadzadehCV.pdf"
);
// Download resume with axios
const forceFileDownload = (response) => {
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "MahdiMohamadzadehCV.pdf");
  document.body.appendChild(link);
  link.click();
};
const downloadFile = () => {
  axios({
    method: "get",
    url: urlFile.value,
    responseType: "arraybuffer",
  })
    .then((response) => {
      forceFileDownload(response);
    })
    .catch((err) => console.log(err));
};
</script>
