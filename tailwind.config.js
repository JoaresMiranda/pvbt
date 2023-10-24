/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'about-pattern': "url('./assets/images/diagonal-laranja.png')",
      },
    },
  },
  plugins: [],
};
