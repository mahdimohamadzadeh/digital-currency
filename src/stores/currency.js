import axios from "axios";
import currencies from "@/assets/js/currencies";
import { defineStore } from "pinia";
const apiKey =
  "109fd7f5a2e1df378af8233540da04bff5b4ef064d0502bdc8a36df841dea556"; // this is my API key and limit 90000 request in month
export const useCurrencyStore = defineStore("Currency", {
  state: () => ({ currencies: [], isLoading: true }),
  actions: {
    async getDetailOfCurrency() {
      // use map for get item symbol for use api and change value of object
      currencies.map(async (item) => {
        try {
          await axios
            .get(
              `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${item.symbol}&tsyms=USD&api_key=${apiKey}`
            )
            .then((res) => {
              const clearRes = res.data.DISPLAY[item.symbol].USD; // clear the api response
              const data = {
                ...item,
                price: clearRes.PRICE,
                changeDay: clearRes.CHANGEDAY,
                changehour: clearRes.CHANGEHOUR,
                lastVolume: clearRes.LASTVOLUME,
              };
              this.currencies.push(data);
              this.changeLoading(false);
            })
            .catch((err) => console.log(err));
        } catch (e) {
          console.error(error);
        }
      });
    },
    changeLoading(bool) {
      this.isLoading = bool;
    },
  },
  getters: {
    getCurrencies(state) {
      return state.currencies;
    },
    getValueLoading(state) {
      return state.isLoading;
    },
  },
});
