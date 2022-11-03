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
      blue: '#3D639D',
      white: '#ffffff',
      gray: '#BBC2D0',
      green: {
        DEFAULT: '#00C48C',
      },
    },
  },
  plugins: [],
}
