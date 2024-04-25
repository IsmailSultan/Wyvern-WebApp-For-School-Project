/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        dark : '#222831',
        light : '#eaeaea'
      },
    },
  },
  plugins: [],
}
