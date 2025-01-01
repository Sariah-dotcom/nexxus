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
        "light-grey": "#5A5A5A",
        "med-purple": "#7A1CAC",
        "dark-purple": "#2E073F",
        "brown":"#C08F5F",
      },
      fontFamily: {
        "dm": ["DM Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

