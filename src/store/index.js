import { createStore } from "vuex";

export default createStore({
  state: {
    theme: "darkTheme",
  },
  mutations: {
    SET_THEME(state, theme) {
      state.theme = theme;
      localStorage.theme = theme;
    },
  },
  actions: {
    initTheme({ commit }) {
      const cachedTheme = localStorage.theme ? localStorage.theme : false;
      //  `true` if the user has set theme to `dark` on browser/OS
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: darkTheme)"
      ).matches;
      if (cachedTheme) commit("SET_THEME", cachedTheme);
      else if (userPrefersDark) commit("SET_THEME", "darkTheme");
      else commit("SET_THEME", "darkTheme");
    },
    toggleTheme({ commit }) {
      switch (localStorage.theme) {
        case "darkTheme":
          commit("SET_THEME", "lightTheme");
          break;

        default:
          commit("SET_THEME", "darkTheme");
          break;
      }
    },
  },
  getters: {
    getTheme: (state) => {
      return state.theme;
    },
  },
});
