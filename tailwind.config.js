const path = require("path");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    screens: {
      xxs: '300px',
      xs: '400px',
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1440px',
      xxl: '1680px',
    }
  },
  plugins: [],

}

