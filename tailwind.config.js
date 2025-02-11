/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary" : "#3498db",
        "secondary" : "#2980b9",
        "desaturated-blue" : "#2c3e50",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      screens: {
        xs : "480px",
      },
    },
  },
  plugins: [],
}