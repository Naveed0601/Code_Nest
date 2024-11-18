/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        glyphic: ["Faculty Glyphic"],
        sora: ["Sora"],
        noto: ["Noto Serif Display", "serif"],
      },
      colors: {
        "custom-brown": "#553922",
        "custom-brown2": "#C3824E",
      },
    },
  },
  plugins: [],
}

