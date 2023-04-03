module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    themes: [
      // Create my custom theme
      {
        mainTheme: {
          primary: "#e863c2",

          secondary: "#0c458e",

          accent: "#708aef",

          neutral: "#281E34",

          "base-100": "#34244C",

          info: "#195FEB",

          success: "#0D6841",

          warning: "#F7B450",

          error: "#E74B56",
        },
      },
    ],
  },
};
