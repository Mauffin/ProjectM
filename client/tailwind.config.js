/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'herodog': "url('../src/assets/dog1.svg')",
        'patasdog': "url('../src/assets/patitas1.svg')"
        
      }

    },
  },
  plugins: [],
}
