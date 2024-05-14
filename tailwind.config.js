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
      xs: { min: "576px" },
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
        "open-sans": ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: {
          1: "#5cc1ff",
          2: "#50cf7f",
          3: "#298ecc",
        },
        text: {
          1: "#eee",
          2: "#ccc",
          3: "#aaa",
        },
        background: {
          1: "#0a0e0f",
          2: "#0d1213",
          3: "#141c1e",
          4: "#11181a",
          5: "#1f2729",
        },
        backdrop: "#000000e6",
        overwhite: "#ffffff55",
        border: "#009fff",
        white: "#fff",
        black: "#000",
        success: "#40c486",
        danger: "#e35d6a",
        caution: "#ffc851",
        info: "#47baff",
      },
    },
  },
  plugins: [],
};
