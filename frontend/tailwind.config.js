/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      purple:'rgb(32,35,44)',
      teal:'rgb(107,202,203)'
    },
  },
    
  },
  
  plugins: [],
}

