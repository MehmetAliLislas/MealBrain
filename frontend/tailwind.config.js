/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#f7f4ee',
        'container': '#fdfaf5',
      }
    },
  },
  plugins: [],
}

