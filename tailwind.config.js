/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Oxygen", "sans-serif"],
      },
      colors:{
        blue: "#2997FF",
        gray:{
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        Green: "#44624a",
      },
  },
  plugins: [],
}}