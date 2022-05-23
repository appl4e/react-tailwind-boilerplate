const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {    
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'system-ui', 'sans-serif'],
        'serif': ['ui-serif', '"Times New Roman"', 'Times', 'serif'],
      },
      colors: {
        blue: {
          500: '#429FDD'
        }
      },
    },
  },
  plugins: [
    require('./button')
  ],
}
