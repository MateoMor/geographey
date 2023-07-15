/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#F0A500",
        secondaryColor: "#3F72AF",
        neutralColor: "#dfdfe2",
        pageColor: "#0092CA",
        wrong: "#971a1a",
        correct: "#178600",
        bronce: "#D47835",
        silver: "#949091",
        gold: "#DDA430",
      },
      boxShadow: {
        customShadow:
          "-5px -5px 15px rgb(255,255,255,0.1), 5px, 5px, 15px rgb(0, 0, 0, 0.35)",
      },
      fontFamily:{
        quantico: "'Quantico', sans-serif"
      }
    },
  },
  plugins: [],
};
