/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        deepForest: "hsl(167, 64%, 15%)",
        forestGreen: "hsl(160, 25%, 35%)",
        sageGray: "hsl(100, 12%, 70%)",
        lightSun: "hsl(60, 100%, 95%)",
      },
      fontFamily: {
        sans: ["Raleway", "system-ui"],
        serif: ["Merriweather", "Georgia"],
      },
    },
  },
  plugins: [],
};
