/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      }
    },
    extend: {
      fontFamily: {
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif']
      },
      colors: {
        'tailwind_test_project-red': '#BC1A45',
        'tailwind_test_project-melon': '#FFD369',
        'tailwind_test_project-grey': '#DDDDDD',
        'tailwind_test_project-white': '#F7F7F7',
      },

      spacing: {
        128: '50rem', // hero section
      },
    },
  },
  plugins: [],
}

