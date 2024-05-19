/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      "2xl": { max: "1400px" },
      xl: { max: "1200px" },
      lg: { max: "992px" },
      md: { max: "768px" },
      sm: { max: "576px" },
      xs: { max: "400px" },
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "66%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "66%": { opacity: 0.5 },
          "100%": { opacity: 0 },
        },
        enterFromTop: {
          "0%": { opacity: 0, transform: "translateY(-3rem)" },
          "66%": { opacity: 0.5 },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        enterFromBottom: {
          "0%": { opacity: 0, transform: "translateY(3rem)" },
          "66%": { opacity: 0.5 },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        enterFromRight: {
          "0%": { opacity: 0, transform: "translateX(5rem)" },
          "66%": { opacity: 0.5 },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        enterFromLeft: {
          "0%": { opacity: 0, transform: "translateX(-5rem)" },
          "66%": { opacity: 0.5 },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-in",
        "fade-out": "fadeOut 0.4s ease-out",
        "enter-top": "enterFromTop 1s ease-in",
        "enter-bottom": "enterFromBottom 1s ease-in",
        "enter-right": "enterFromRight 1s ease-in",
        "enter-left": "enterFromLeft 1s ease-in",
        "enter-top-fast": "enterFromTop 0.4s ease-in",
        "enter-bottom-fast": "enterFromBottom 0.4s ease-in",
        "enter-right-fast": "enterFromRight 0.4s ease-in",
        "enter-left-fast": "enterFromLeft 0.4s ease-in",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#50cf7f",
        text: {
          1: "#eee",
          2: "#ccc",
          3: "#aaa",
        },
        background: {
          1: "#0a0e0f",
          2: "#141c1e",
          3: "#1f2729",
          4: "#2a3234",
        },
      },
    },
  },
  plugins: [],
};
