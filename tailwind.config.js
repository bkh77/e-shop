/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Gilroy-light', 'ui-sans-serif', 'system-ui'],
      },
    },
    colors: {
      white: '#ffffff',
      black: '#262728',
      blue: '#3D639D',
      gray: '#BBC2D0',
      'gray-light': '#F3F5F8',
      green: {
        DEFAULT: '#00C48C',
      },
      pink: '#FF647C',
      orange: '#FF6422',
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
