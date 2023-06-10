/** @type {import('tailwindcss').Config} */
module.exports = {
  // paths to all component files
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Roboto',
          'Helvetica',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        mono: ['Roboto Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  // import daisyui component library
  plugins: [require('daisyui')],
};
