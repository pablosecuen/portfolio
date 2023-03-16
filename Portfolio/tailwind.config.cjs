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
      dropShadow: {
        "glow-red": "5px 5px 10px 2px rgba(255, 0, 0, 0.5)",
        "glow-blue": "0 0 10px 2px rgba(0, 0, 255, 0.5)",
        "glow-yellow": "0 0 10px 2px rgba(255, 255, 0, 0.5)",
        "glow-bluesky": "0 0 10px 2px rgba(0, 191, 255, 0.5)",
        "glow-violet": "0 0 10px 2px rgba(238, 130, 238, 0.5)",
        "glow-pink": "0 0 10px 2px rgba(255, 105, 180, 0.5)",
        "glow-purple": "0 0 10px 2px rgba(128, 0, 128, 0.5)",
        "glow-white": "0 0 10px 2px rgba(255, 255, 255, 0.5)",
        "glow-green": "0 0 10px 2px rgba(0, 128, 0, 0.5)",
        "glow-black": "0 0 10px 2px rgba(0, 0, 0, 0.5)",
        "glow-orange": "0 0 10px 2px rgba(255, 165, 0, 0.5)",
        "glow-lightblue": "0 0 10px 2px rgba(173, 216, 230, 0.5)",
      },
      maskImage: {
        custom: "polygon(0 0, 100% 0, 92% 89%, 51% 100%, 8% 90%)",
      },
      transitionProperty: {
        "box-shadow": "box-shadow",
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
  variants: {
    extend: {
      boxShadow: ["hover"],
    },
  },
  plugins: [],
};
