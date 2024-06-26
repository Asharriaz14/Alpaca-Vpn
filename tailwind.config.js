/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'primary': "#0E8FB9",
      'secondary': "#BCBCBC",
      "tartiary": "#707070",
      "dark": "#E2E2E2",
      "white": "#FFFFFF"
    },   boxShadow: {
      '3xl': '0 10px 50px 0px rgba(0, 0, 0, 0.15)',
    }
  },
  },
  plugins: [],
}

