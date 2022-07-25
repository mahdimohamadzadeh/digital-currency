<template>
  <div class="" :data-theme="theme === 'light' ? 'emerald' : ''">
    <h1 class="text-2xl font-bold text-center my-10">Moneye Xchange</h1>
    <div class=" mx-3 md:flex md:justify-center antialiased">
      <div
        class=" sm:mt-10 mt-4 my-auto max-w-md p-3 bg-primary rounded-3xl"
      >
        <div class="text-center m-6">
          <h3 class="text-3xl font-semibold">Rial: {{ rialValue }} &#65020;</h3>
          <h3 class="text-3xl font-semibold mt-4 flex justify-center">
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
                  class="input focus:outline-none w-full md:w-60 md:ml-16 px-3 py-2"
                />
                <span>USD</span>
              </label>
            </div>
            <div class="my-6">
              <button
                @click="submit"
                class="btn md:w-1/2  px-6 py-3 rounded-md text-xl font-medium border-0 focus:outline-none focus:ring transition bg-accent"
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

<script>
import { ref } from "@vue/reactivity";
import axios from "axios";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import Swal from "sweetalert2";
import { CurrencyUsd } from "mdue";
export default {
  components: { CurrencyUsd },
  setup() {
    const rialValue = ref(null);
    const usdValueInput = ref(null);
    const isLoading = ref(false);
    const store = useStore();
    const theme = computed(() => store.getters.getTheme || "dark");

    const fetchPrice = async () => {
      if (usdValueInput.value > 0) {
        isLoading.value = true;
        await axios
          .get(
            "http://api.navasan.tech/latest/?api_key=freeAflR4IKxGMt7N14G4YjEy9CVhenb"
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
    return { rialValue, usdValueInput, fetchPrice, theme, isLoading };
  },
};
</script>
