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
        "dark-bg": "#121212",
        "dark-text": "#e0e0e0",
        "light-bg": "#ffffff", 
        "light-text": "#1f1f1f", 
        "accent": "#FF6347",       },
    },
  },
  darkMode: "class",
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'], 
      borderColor: ['dark'], 
      ringColor: ['dark'], 
      divideColor: ['dark'], 
      opacity: ['dark'], 
    },
  },
  plugins: [],
}
