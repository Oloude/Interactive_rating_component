/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Overpass": ['"Overpass"', ...defaultTheme.fontFamily.sans],
      },
      colors : {
        "orange" : "#fb7413",
        "lGray" : "#959eac",
        "dBlue" : "#252d37",
        "vDBlue" : "#121417",
      }
    },
  },
  plugins: [],
}