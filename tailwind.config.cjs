/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'dark-main':"#141d2f",
        "dark-elevated":"#1e2a47",
        "main":"#f6f8ff",
        "elevated":"#fefefe",
        "button":"#0079ff",
        "dark-primary":"#ffffff",
        "dark-secondary":"#ffffff75",
        "dark-tertiary":"#0079ff",
        "primary":"#2b3442",
        "secondary":"#697c9a",
        "tertiary":"#0079ff"
      }
    },
  },
  plugins: [],
};
