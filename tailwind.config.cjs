/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-10': '#D5E2DB',
        'primary-20': '#B9CFC2',
        'primary-30': '#95B6A4',
        'primary-40': '#729E86',
        'primary-50': '#4F8667',
        'primary-60': '#2C6E49',
        'primary-70': '#255C3D',
        'primary-80': '#1D4931',
        'primary-90': '#163725',
        'primary-100': '#0F2518',
        'primary-110': '#09160F',
        'secondary-10': '#FFFFF9',
        'secondary-20': '#FFFFF6',
        'secondary-30': '#FEFEF1',
        'secondary-40': '#FEFEEC',
        'secondary-50': '#FEFEE8',
        'secondary-60': '#FEFEE3',
        'secondary-70': '#D4D4BD',
        'secondary-80': '#A9A997',
        'secondary-90': '#7F7F72',
        'secondary-100': '#55554C',
        'secondary-110': '#33332D',
        'title': '#050B08',
        'body': '#2F3431',
        'helper': '#595E5B',
        'main-bg': '#EFF3F6',
        'error-text': '#840B0B',
        'error-border': '#BF5E5E',
        'affirmation-bg': '#E6F6ED',
        'gray-10': '#9B9B9B',
        'gray-300': '#D0D5DD',
        'error': '#BF5E5E'
        
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}