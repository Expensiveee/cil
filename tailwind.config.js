/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        cil: {
          100: "#5cc2df",
          200: "#3a889e",
          300: "#356b7a",
        },
      },
    },
  },
  plugins: [],
};
