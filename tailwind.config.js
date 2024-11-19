/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors:{
        themeyellow:"#f5e60d",
        themepurple:"#502ec3",
      }
    },
  },
  plugins: [],
}

