/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#e6dcc8',
        'container': '#fdfaf5',
      }
    },
  },
  plugins: [],
}

