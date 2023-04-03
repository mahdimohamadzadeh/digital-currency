<template>
  <h1 class="text-3xl font-bold text-center">Moneye Xchange</h1>
  <div class="">
    <div class="mx-3 md:flex md:justify-center antialiased">
      <div class="sm:mt-10 p-8 mt-4 my-auto max-w-md rounded-3xl bg-neutral">
        <div class="text-center m-6">
          <h3 class="text-xl md:text-3xl font-semibold">
            Rial: {{ rialValue }} &#65020;
          </h3>
          <h3
            class="text-xl md:text-3xl font-semibold mt-4 flex justify-center"
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
                  class="input input-bordered input-accent focus:outline-none ml-2 lg:ml-10 w-2/3 md:w-60 md:ml-16 px-3 py-2"
                />
                <span class="border-2 border-accent text-xl">USD</span>
              </label>
            </div>
            <div class="my-10">
              <button
                class="btn md:w-1/2 rounded-md text-xl bg-accent text-neutral hover:bg-info"
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
      .get(
        "http://api.navasan.tech/latest/?api_key=freeKiD737r8SxuVYd6vnhkzKVPBuap6"
      )
      .then((res) => {
        let usd = res.data.usd_sell.value;
        let change = usdValueInput.value * usd;
        const filterChange = (number) => {
          let toRial = number + "0";
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
