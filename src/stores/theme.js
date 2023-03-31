import { defineStore } from "pinia";
export const useThemeStore = defineStore("theme", {
  state: () => ({ theme: "darkTheme" }),
  getters: {
    getTheme: (state) => state.theme,
  },
  actions: {
    initTheme() {
      const cachedTheme = localStorage.theme ? localStorage.theme : false;
      //  `true` if the user has set theme to `dark` on browser/OS
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: darkTheme)"
      ).matches;
      if (cachedTheme) {
        this.theme = cachedTheme;
        localStorage.theme = theme;
      } else if (userPrefersDark) {
        this.theme = "darkTheme";
        localStorage.theme = "darkTheme";
      } else {
        this.theme = "darkTheme";
        localStorage.theme = "darkTheme";
      }
    },
    toggleTheme() {
      switch (localStorage.theme) {
        case "darkTheme":
          this.theme = "lightTheme";
          localStorage.theme = "lightTheme";
          break;

        default:
          this.theme = "darkTheme";
          localStorage.theme = "darkTheme";
          break;
      }
    },
  },
});
