/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0px 3px 3px rgba(100, 100, 100, 1)',
        },
        '.text-shadow-right': {
          textShadow: '6px 3px 3px rgba(100, 100, 100, 1)',
        },
        '.text-shadow-right-small': {
          textShadow: '4px 3px 3px rgba(120, 120, 120, 1)',
        },
        '.text-shadow-left': {
          textShadow: '-6px 3px 3px rgba(100, 100, 100, 1)',
        },
        '.text-shadow-left-small': {
          textShadow: '-3px 2px 3px rgba(120, 120, 120, 1)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};