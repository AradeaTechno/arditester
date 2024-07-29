/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aqua: {
          200: '#00dcff',
        },
      },
    },
  },
  plugins: [],
}

