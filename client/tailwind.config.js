/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modals/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-gradient': 'linear-gradient(90deg, rgba(240,22,73,1) 0%, rgba(187,38,73,1) 100%)',
        'main-gradient': 'linear-gradient(90deg, rgba(240,22,73,1) 0%, rgba(187,38,73,1) 100%)',
      },
      colors: {
        'back': '#f1f1f1',
        'main': '#bb2649',
        'gray': '#4f4f4f'
      },
      spacing: {
        "45": "45px"
      },
      gridTemplateRows: {
        'products-list': 'repeat(auto-fit, minmax(170px, 1fr))',
        'products-list-md': 'repeat(auto-fit, minmax(210px, 1fr))',
      },
      screens: {
        'md1': '991.98px',
        'md2': '768.98px',
        'md3': '590.98px',
        'md4': '467.98px',
        'md5': '390.98px',
      },
    },
  },
  plugins: [
  ],
}
