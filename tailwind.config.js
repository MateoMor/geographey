/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "customShadow": "-5px -5px 15px rgb(255,255,255,0.1), 5px, 5px, 15px rgb(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
