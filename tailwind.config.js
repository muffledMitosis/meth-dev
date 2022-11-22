/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-background": '#111111',
        'purple': '#6DE5B8',
        'ocean': '#408BF0',
        'electric': '#9234EA',
        'not-selected': '#727272',
      }
    },
  },
  plugins: [],
}
