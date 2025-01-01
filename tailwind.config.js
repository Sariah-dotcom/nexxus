/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "med-grey": "#1F1E1E",
        "light-grey": "#5A5A5A"
      }
    },
  },
  plugins: [],
}

