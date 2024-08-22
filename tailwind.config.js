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
    },
  },
  plugins: [],
};
