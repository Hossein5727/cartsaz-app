/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-blue': '#0182FE',
        'main-orange': '#FE3E01',
        'main-black': '#171F26',
        'main-white': '#FFFFFF',
      },
      boxShadow: {
        'ring-box-shadow': '0px 0px 0px 1px #DFEFFF',
        'product-basket-card-box-shadow': '0px 8px 9px -8px rgba(0, 0, 0, 0.12)'
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    rtl: true,
    darkTheme: "white"
  },
}

