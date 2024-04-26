/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-text-color': 'rgba(6, 40, 110, 1)',
      },
    },
  },
  plugins: [],
}