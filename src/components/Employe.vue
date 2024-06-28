<template>
  <h1 class="text-3xl font-bold text-center">Moneye Xchange</h1>
  <div class="">
    <div class="mx-3 antialiased md:flex md:justify-center">
      <div class="max-w-md p-8 my-auto mt-4 sm:mt-10 rounded-3xl bg-neutral">
        <div class="m-6 text-center">
          <h3 class="text-xl font-semibold md:text-3xl">
            Rial: {{ rialValue }} &#65020;
          </h3>
          <h3
            class="flex justify-center mt-4 text-xl font-semibold md:text-3xl"
          >
            USD: {{ usdValueInput }} <CurrencyUsd class="mt-1"></CurrencyUsd>
          </h3>
        </div>
        <div>
          <form class="mb-4 text-center" @submit.prevent="fetchPrice">
            <div class="form-control md:mr-12">
              <label class="input-group">
                <input
                  type="number"
                  min="0"
                  v-model="usdValueInput"
                  placeholder="Enter USD price..."
                  class="w-2/3 px-3 py-2 ml-2 input input-bordered input-accent focus:outline-none lg:ml-10 md:w-60 md:ml-16"
                />
                <span class="text-xl border-2 border-accent">USD</span>
              </label>
            </div>
            <div class="my-10">
              <button
                class="text-xl rounded-md btn md:w-1/2 bg-accent text-neutral hover:bg-info"
                type="submit"
                :class="{ loading: isLoading }"
              >
                <span v-if="isLoading">Loading</span>
                <span v-else>convert</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import axios from "axios";
import { useThemeStore } from "@/stores/theme";
import { computed } from "@vue/runtime-core";
import Swal from "sweetalert2";
import { CurrencyUsd } from "mdue";
const rialValue = ref(null);
const usdValueInput = ref(null);
const isLoading = ref(false);
const store = useThemeStore();
const theme = computed(() => store.getTheme || "darkTheme");
const fetchPrice = async () => {
  // get  dollar price to rial value from the api
  if (usdValueInput.value > 0) {
    isLoading.value = true;
    await axios
      .get("https://api.priceto.day/v1/latest/irr/usd")
      .then((res) => {
        let usd = +res.data.price;
        let change = usdValueInput.value * usd;
        const filterChange = (number) => {
          let toRial = number;
          return Number(toRial).toLocaleString();
        };
        rialValue.value = filterChange(change);
        isLoading.value = false;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    Swal.fire("مقداری وارد نکردید");
  }
};
</script>
