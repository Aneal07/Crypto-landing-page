/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screen:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440'
    },
    extend: {
      colors:{
        brightRed: '#dc2626',
        brightRedLight: '#fb923c',
        brightRedSupLight: '#020617',
        darkBlue:'#0c4a6e',
        darkGrayishBlue: '#ea580c',
        veryDarkBlue: '#0f172a',
        veryPaleRed: '#fca5a5',
        veryLightGray: '#e5e5e5',
        black: '#020617',
      }
    },
  },
  plugins: [],
}

