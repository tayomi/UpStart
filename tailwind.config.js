/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'md': '768px',
      'tablet': '840px',
      'lg': '1024px'
    },
    extend: {
      colors: {
        'green':'#105749',
        'orange': '#fead62'
      },
    }
  },
  plugins: [],
}
