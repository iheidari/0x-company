/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./ui/**/*.{js,jsx,ts,tsx}",
    "./scenes/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-yellow": "#f0c650",
      },
      width: {
        512: "512px",
      },
      height: {
        512: "512px",
      },
    },
  },
  plugins: [],
};
