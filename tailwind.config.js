/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    fontFamily: {
      baloo: ["'Baloo Thambi 2'", "'cursive'"],
      romanus: ["'ROMANUS'"],
    },
    extend: {
      fontSize: {
        'dynamic-100': 'clamp(2rem, 3.2vw + 1.3rem, 5.125rem)',
        'dynamic-200': 'clamp(1.2rem, 0.8vw + 1.1rem, 2rem)',
        'dynamic-300': 'clamp(1.875rem, 1.9vw + 1.5rem, 3.75rem)',
      },
      colors: {
        'primary-100': '#F5EAE6',
        'primary-200': '#F7E0D0',
        'primary-300': '#5DA35D',
        'primary-400': '#48E548',
        'primary-500': '#66FF66',
        'primary-600': '#545454',
        'primary-700': '#B65757',
        'primary-800': '#75585A',
        'primary-900': '#6BBE6B',
        'primary-1000': '#E9E7DB',
        'primary-1100': '#7AC97A',
        'primary-1200': '#D6F3D9',
        'primary-1300': '#F6E0D0',
        'primary-1400': '#C5A7A9',
        'primary-1500': '#448D44',
        'primary-1600': '#DDE9DB',
        whatsapp: '#25D366',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '4rem',
        },
      },
      boxShadow: {},
    },
  },
  plugins: [],
}
