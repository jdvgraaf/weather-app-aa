/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'background': '#ffffff',
      'card-background': '#eef6fb',
      'text': '#333339',
      'selected-nav-text': '#5FB0E8'
    },
    fontFamily: {
      "arboria-light": ["Arboria-Light", "Helvetica"],
      "arboria-medium": ["Arboria-Medium", "Helvetica"],
      "montserrat": ["Montserrat", "Helvetica"],
      "teko": ["Teko", "Helvetica"]
    },
    extend: {
      fontSize:{
        "8axl":  "118px"
      }
    },
  },
  plugins: [],
};
