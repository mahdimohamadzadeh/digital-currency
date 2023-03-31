import axios from "axios";
import currencies from "@/assets/js/currencies";
import { defineStore } from "pinia";

const apiKey =
  "109fd7f5a2e1df378af8233540da04bff5b4ef064d0502bdc8a36df841dea556";
export const useCurrencyStore = defineStore("Currency", {
  state: () => ({ getDataFromApi: [], currencies: [], isLoading: false }),
  actions: {
    getPriceCurrency() {
      currencies.map((item) => {
        axios
          .get(
            `https://min-api.cryptocompare.com/data/price?fsym=${item.symbol}&tsyms=USD&api_key=${apiKey}`
          )
          .then((res) => {
            this.isLoading = true;
            const data = { ...item, price: res.data.USD };
            this.currencies.push(data);
            this.isLoading = false;
          })
          .catch((err) => console.log(err));
      });
    },
  },
  getters: {
    
  },
});
