/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xsm: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        roboto: ['"roboto", ...defaultTheme.fontFamily.roboto'],
      },
      colors: {
        primario: "#163134",
        secundario: "#88771b",
      },
      backgroundImage: {
        fondo: "url('./assets/1x/2x/fondo.png')",
      },
    },
  },
  plugins: [],
};
