/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "auth-panel-pattern": "url(/images/layout/auth/pattern.png)",
      },
      animation: {
        fade: "fadeIn 0.5s ease-in-out",
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
      fontFamily: {
        primary: ["var(--font-syne)"],
        secondary: ["var(--font-montserrat)"],
      },
      colors: {
        primary: {
          DEFAULT: "#3FE88C",
        },
        secondary: {
          DEFAULT: "#00BC9C",
        },
        dark: {
          DEFAULT: "#1E1E1E",
          50: "#7A7A7A",
          100: "#707070",
          200: "#5B5B5B",
          300: "#474747",
          400: "#323232",
          500: "#1E1E1E",
          600: "#020202",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          auth: "#101010",
        },
        blue: {
          DEFAULT: "#217BF4",
          50: "#D0E3FD",
          100: "#BCD7FC",
          200: "#96C0FA",
          300: "#6FA9F8",
          400: "#4892F6",
          500: "#217BF4",
          600: "#0A60D2",
          700: "#08479D",
          800: "#052F68",
          900: "#021732",
        },
      },
    },
  },
  plugins: [],
};
