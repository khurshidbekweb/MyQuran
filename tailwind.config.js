/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container:{
      center: true,
      padding: '0 12px',
      screens: {
        sm: '390px',
        md: '414px',
        lg: '414px',
        xl: '414px'
      }
    }
  },
  plugins: [],
}

