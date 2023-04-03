import { defineStore } from "pinia";
export const useThemeStore = defineStore("theme", {
  state: () => ({ theme: "" }),
  getters: {
    getTheme: (state) => state.theme,
  },
  actions: {
    // Get value of theme from local storage
    initTheme() {
      const cachedTheme = localStorage.theme ? localStorage.theme : false;
      //  `true` if the user has set theme to `dark` on browser/OS
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: light)"
      ).matches;
      if (cachedTheme) {
        this.theme = cachedTheme;
        localStorage.theme = theme;
      } else if (userPrefersDark) {
        this.theme = "light";
        localStorage.theme = "light";
      } else {
        this.theme = "light";
        localStorage.theme = "light";
      }
    },
    toggleTheme() {
      switch (localStorage.theme) {
        case "dark":
          this.theme = "light";
          localStorage.theme = "light";
          break;

        default:
          this.theme = "dark";
          localStorage.theme = "dark";
          break;
      }
    },
  },
});
