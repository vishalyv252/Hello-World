/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Pixelify_Sans': ['Pixelify Sans', 'cursive'],
      },
      screens:{
        'Mobile_Small':{'max':'321px'},
        'Mobile_Medium':{'max':'376px','min':'321px'},
        'Mobile_Large':{'max':'426px','min':'376px'},
        'Tablet':{'max':'769px','min':'426px'},
        'Laptop_Small':{'max':'1025px','min':'769px'},
        '4K':{'min':'2000px'},
        'Potrait':{'max':'1025px'}
      }
    },
  },
  plugins: [],
}

