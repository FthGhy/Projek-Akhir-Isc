/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/images/food-2.jpeg')",
      },
      colors: {
        'utama': '#EB0029',
        'text_utama': '#333333',
        'putih': '#f2f2f2',
        'cream': '#FEE9DE',
        'kuning': '#F2C94C',
      },
      fontFamily: {
        utama: ['Rubik'],
        hero: ['Lobster Two'],
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}
