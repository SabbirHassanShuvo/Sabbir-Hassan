/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: "#00d4ff",
          dim: "#00aacc",
        },
        violet: {
          DEFAULT: "#7c3aed",
          mid: "#8b5cf6",
          light: "#a78bfa",
        },
        gold: "#a78bfa",
        cream: "#f3e8ff",
        dark: "#050a14",
        mid: "#080d18",
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "marquee-reverse": "marquee-reverse 22s linear infinite",
        fadeUp: "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(32px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Syne", "sans-serif"],
      },
      borderColor: {
        DEFAULT: "rgba(255, 255, 255, 0.07)",
      },
    },
  },
  plugins: [],
};
