/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#080808',
        'brand-red': '#e63946',
        'brand-white': '#ffffff',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
