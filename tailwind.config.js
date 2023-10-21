/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins-regular': 'poppins-regular',
        'poppins-semibold': 'poppins-semibold',
        'poppins-medium': 'poppins-medium'
      },
    },
  },
  plugins: [],
}