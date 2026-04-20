/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#F5F5F0',
      },
      aspectRatio: {
        '4/5': '4 / 5',
      },
    },
  },
  plugins: [],
}