<template>
    <div :data-theme="theme === 'light' ? 'emerald' : ''">
        <div class=" mx-auto mt-10 md:mt-32 ">
            <div class="grid grid-rows-2 md:grid-cols-2  ">
                <img class="w-screen h-96 object-cover object-top rounded-lg" src="https://www.truegossiper.com/wp-content/uploads/2019/10/1-7.jpg" alt="" />
                <div class="flex p-10 mt-4 max-w-lg flex-col">
                    <h1 class="text-3xl uppercase">Mahdi Mohammadzadeh</h1>
                    <p class="font-semibold mt-1">Web Developer</p>
                    <p class="mt-16">
                        Hello, I'm Mahdi Mohammadzadeh, a Front-end developer. I have been learning and practicing in this field for almost 2 years.
                    </p>
                    <button class="rounded-md py-3 px-7 mt-10 bg-accent text-white">
                  <a href="https://www.linkedin.com/in/mahdi-mohamadzadeh/">My Linkedin</a>
                </button>
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
