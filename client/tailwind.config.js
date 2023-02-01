/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Poppins',
      },
    },
    extend: {
      colors: {
        bgprimary: '#F5EFE4',
        secondary: '#79DFC0',
      },
      backgroundImage: {
        hero: "url('../src/sources/image-source/background/bg2.jpg')",
        login: "url('../src/sources/image-source/background/bg1.jpg')",
        healty: "url('../src/sources/image-source/background/healty1.jpg')",
      
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}