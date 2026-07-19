/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0a0908",
        charcoal: "#16140f",
        ivory: "#f3ece0",
        gold: {
          DEFAULT: "#c6a15b",
          light: "#e3c98a",
          dim: "#8c6a3c",
        },
        burgundy: "#4a1620",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        accent: ["'Cormorant Garamond'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
};
