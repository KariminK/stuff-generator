/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      gridTemplateRows: {
        navbar: "140px calc(100vh - 140px) 1fr",
      },
      height: {
        doubleScreen: "200vh",
      },
      screens: {
        "2xl": { max: "1535px" },

        xl: { max: "1279px" },

        lg: { max: "1024px" },

        md: { max: "767px" },

        sm: { max: "639px" },
      },
    },
  },
  plugins: [],
};
