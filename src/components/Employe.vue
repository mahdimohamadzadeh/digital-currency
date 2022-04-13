<template>
  <div>
    <h1 class="text-2xl font-bold text-center mt-4 text-blue-900">Moneye Xchange</h1>
    <!-- component -->
    <div class="flex justify-center min-h-auto antialiased">
      <div class="container sm:mt-10 mt-4 my-auto max-w-md p-3 bg-purple-100 rounded-3xl">
        <!-- header -->
        <div class="text-center m-6">
          <h3 class="text-3xl font-semibold text-gray-700">
            Price: {{ rialValue }} <small> rial</small>
          </h3>
          <h3 class="text-3xl font-semibold text-gray-700 mt-4">
            USD: {{ usdValueInput }} <small> USD</small>
          </h3>
        </div>
        <!-- sign-in -->
        <div class="m-6">
          <form class="mb-4">
            <div class="mb-6">
              <label
                for="email"
                class="block md:ml-16 mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Enter the price :</label
              >
              <input
                type="number"
                v-model="usdValueInput"
                placeholder="Enter USD price..."
                class="w-full md:w-60 md:ml-16 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div class="mb-6">
              <button
                @click="fetchPrice"
                class="w-full md:w-1/2 md:ml-20 px-6 py-3 rounded-md text-xl font-medium border-0 focus:outline-none focus:ring transition text-white bg-green-500 hover:bg-green-600 active:bg-green-700 focus:ring-green-300 mt-4"
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
import axios from "axios";
export default {
  name: "Employe",
  data() {
    return {
      rialValue: 0,
      usdValueInput: 0,
    };
  },
  methods: {
    // async fetchPrice() {
    //   await axios
    //     .get("http://api.navasan.tech/latest/?api_key=freebRRs75xJEV29utqED6C5h4ZuMhsQ")
    //     .then((res) => {
    //       console.log(res.data.usd_sell.value);
    //       let usd = res.data.usd_sell.value;
    //       let change = this.usdValueInput * usd;
    //       this.rialValue = change + "0";
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
  },
};
</script>
