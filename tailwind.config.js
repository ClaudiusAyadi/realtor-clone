/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: ["Galano Grotesque Alt", "sans-serif"],
      },
      colors: {
        base: "#2b2b2b",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
