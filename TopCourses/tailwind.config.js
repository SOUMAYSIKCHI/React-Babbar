/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: 'rgb(34, 34, 59)',
        bodyColor:'rgb(74 78 105)',
      },
    },
  },
  plugins: [],
}

