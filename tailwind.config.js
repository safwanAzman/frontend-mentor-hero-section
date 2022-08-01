/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mediumGray: {
          100: "#696969",
        },
        almostWhite: {
          100: "#FAFAFA",
        },
        almostBlack: {
          100: "#141414",
        },
      },
    },
  },
  plugins: [],
}
