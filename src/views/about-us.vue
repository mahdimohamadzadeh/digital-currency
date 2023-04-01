<template>
  <div class="grid h-screen place-items-center">
    <div class="flex justify-around">
      <img
        class="w-11/12 md:w-8/12 mx-auto object-cover rounded-2xl"
        v-lazy="{
          src: aboutImage,
          loading: loadingAboutImage,
          error: errorAboutImage,
          delay: 500,
        }"
      />

      <div class="flex flex-col justify-around px-10">
        <h1 class="text-3xl uppercase">Mahdi Mohammadzadeh</h1>
        <p class="font-semibold -mt-8">Web Developer</p>
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

<script>
import { computed, ref } from "@vue/runtime-core";
import { useThemeStore } from "@/stores/theme";
import axios from "axios";
export default {
  setup() {
    const store = useThemeStore();
    const theme = computed(() => store.getTheme || "darkTheme");
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
    const urlFile = ref(
      "http://localhost:3000/src/assets/pdf/MahdiMohamadzadehCV.pdf"
    );
    const forceFileDownload = (response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "MahdiMohamadzadehCV.pdf"); //or any other extension
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
    return {
      theme,
      aboutImage,
      loadingAboutImage,
      errorAboutImage,
      downloadFile,
    };
  },
};
</script>
