/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
       colors:{
      'section-color': '#2C3E50'
    },},
  
  },
  plugins: [],
}