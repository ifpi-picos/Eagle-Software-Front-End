/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "ligth-white": "rgba(255,255,255,0.18)",
        "dark-blue": "#186fad",
        "custom-blue": "#14bce8",
        "blue-light": "#3B82F6",
        "blue-mar": "#002037"
      }
    },
  },
  plugins: [],
}