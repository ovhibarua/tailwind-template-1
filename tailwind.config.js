/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: { 
      dropShadow: {
        'noteShade': '8px 8px 0px #DBDBDB'
      },
      fontFamily: {
        'inter' : 'Inter',
      },
    },
  },
  plugins: [],
}
