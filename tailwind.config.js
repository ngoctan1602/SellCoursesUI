/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      FiraSans: ['Fira Sans'],
      robo: ['Raleway', 'sans-serif'],
      Amiro: ['Arimo', 'sans-serif']
    },
    colors: {
      'txt': '#090808',
      'button': '#88c194',
      'bg': '#F2ECFF',
      'bgPopup': '#e1e1e1',
      'hover-txt': '#4d4c4f',
      'txt-final': '#474E68',
      'button-final': '#03C988',
      'txt-button': '#E5E5CB'
    },
    fontSize: {
      '12': '12px',
      '14': '14px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '24': '24px'
    },
    spacing: {
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '1xl': '30px',
      content: '90%',
      input: '40%',
      search: '70%',
      wrapper: '80%',
    },
    extend: {},
  },
  plugins: [],
}

