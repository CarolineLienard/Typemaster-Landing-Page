/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '750px',
      md: '850px',
      lg: '950px',
      xl: '1190px',
    },
    colors: {
      'orange': '#F16718',
      'gray-light': '#E8EFF2',
    },
  },
  plugins: [],
}
