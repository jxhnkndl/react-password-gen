/** @type {import('tailwindcss').Config} */
module.exports = {
  // paths to all component files
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {},
  // import daisyui component library
  plugins: [require('daisyui')],
}