/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'flame-orange': '#ff6b35',
        'flame-red': '#f7931e',
        'flame-yellow': '#fdc500',
      },
    },
  },
  plugins: [],
}
