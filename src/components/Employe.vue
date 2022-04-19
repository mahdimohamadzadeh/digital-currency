<template>
  <div>
    <h1 class="text-2xl font-bold text-center mt-10">Moneye Xchange</h1>
    <!-- component -->
    <div class="flex justify-center min-h-auto antialiased">
      <div
        class="container sm:mt-10 mt-4 my-auto max-w-md p-3 bg-primary rounded-3xl"
      >
        <!-- header -->
        <div class="text-center m-6">
          <h3 class="text-3xl font-semibold">
            Price: {{ rialValue }} <small> rial</small>
          </h3>
          <h3 class="text-3xl font-semibold mt-4">
            USD: {{ usdValueInput }} <small> USD</small>
          </h3>
        </div>
        <!-- sign-in -->
        <div class="m-6">
          <form class="mb-4" @submit.prevent="fetchPrice">
            <div class="mb-6">
              <label class="label block md:ml-16 mb-2">
                <span class="label-text text-lg">Enter the price :</span>
              </label>
              <input
                type="number"
                v-model="usdValueInput"
                placeholder="Enter USD price..."
                class="input input-error input-bordered w-full md:w-60 md:ml-16 px-3 py-2"
              />
            </div>
            <div class="mb-6">
              <button
                @click="submit"
                class="w-full md:w-1/2 md:ml-20 px-6 py-3 rounded-md text-xl font-medium border-0 focus:outline-none focus:ring transition bg-accent"
                type="submit"
              >
                Convert
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
export default {
  setup() {
    const rialValue = ref(0);
    const usdValueInput = ref(0);
    const fetchPrice = async () => {
      if (usdValueInput.value) {
        await axios
          .get(
            "https://api.navasan.tech/latest/?api_key=freebRRs75xJEV29utqED6C5h4ZuMhsQ"
          )
          .then((res) => {
            let usd = res.data.usd_sell.value;
            let change = usdValueInput.value * usd;
            rialValue.value = change + "0";
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("کسخل مقداری وارد نکردی");
      }
    };
    return { rialValue, usdValueInput, fetchPrice };
  },
};
</script>
