/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",'./node_modules/tw-elements/dist/js/**/*.js','./src/**/*.{html,js}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    colors: {
      "mid":"#89c74a",
      "git":"#F5F5F5",
      "tiwh": "white",
      
    },
    fontSize:{
      "heading": "1.875rem"
    }
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin')
    
  ],
}
