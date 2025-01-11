/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        // different shades
        secondary: {
          100: "#e2e2d5",
          200: "#888883",
        },
      },
      fontFamily: {
        cairo: ["cairo", "Poppins"],
        nunito: ["Nunito"],
      },
    },
  },
  plugins: [],
};
