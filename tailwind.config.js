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
        borderColor: "#111827",
        wrong: "#971a1a",
        correct: "#178600",
        bronce: "#D47835",
        silver: "#949091",
        gold: "#DDA430",
        scoreBarTooltipColor: "#33333320",
        royalBlue: "#4169e1",
        royalRed: "#9b1c31",
      },
      boxShadow: {
        customShadow:
          "-5px -5px 15px rgb(255,255,255,0.1), 5px, 5px, 15px rgb(0, 0, 0, 0.35)",
      },
      fontFamily: {
        quantico: "'Quantico', sans-serif",
      },
      /* animation: {
        wave: "wave 15s linear infinite",
        reverseWave: "reverseWave 15s linear infinite",
      },
      keyframes: {
        wave: {
          "0%": { backgroundPosition: "100% 0" },
          "100%": { backgroundPosition: "-100% 0" },
        },
        reverseWave: {
          "0%": { backgroundPosition: "-100% 0" },
          "100%": { backgroundPosition: "100% 0" },
        }
      }, */
    },
  },
  plugins: [],
};
