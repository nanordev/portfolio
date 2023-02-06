/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{jsx, tsx, js}'],
  theme: {
    extend: {
      backgroundImage: {
        'insta-gradient': "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #Fd1d1d)",
        'insta-new-gradient': "linear-gradient(30deg, #FEDA77, #F58529, #DD2A7B, #8134AF, #515BD4)",
      }
    },
  },
  plugins: [],
}
