const { fontFamily } = require('tailwindcss/defaultTheme')
const svgToDataUri = require('mini-svg-data-uri')

const colors = require('tailwindcss/colors')
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        'gray-90': '#02000A',
        'gray-80': '#141318',
        'gray-70': '#16141E',
        'gray-60': '#1D1B24',
        'gray-50': '#24232C',
        'gray-40': '#2C2B2F',
        'gray-30': '#3A3941',
        'gray-20': '#959499',
        'gray-10': '#F7F7F8',
        'transparent-gray': 'rgba(58, 57, 65, 0.40)',
      },
      screens: {
        '2xl': '1400px',
      },
      spacing: {
        0.25: '1px',
        0.375: '1.5px',
      },
      fontFamily: {
        primary: ['var(--font-geist-sans)', ...fontFamily.sans],
        secondary: ['var(--font-menlo)', ...fontFamily.mono],
      },
      boxShadow: {
        base: '0 0 0 5px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        flip: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        rotate: {
          to: {
            transform: 'rotate(90deg)',
          },
        },
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'towns-glow': {
          '0%': {
            opacity: 0,
            'animation-timing-function': 'cubic-bezier(0.74, 0.25, 0.76, 1)',
          },
          '10%': {
            opacity: 0.4,
            'animation-timing-function': 'cubic-bezier(0.12, 0.01, 0.08, 0.99)',
          },
          '100%': {
            opacity: 0.15,
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'towns-glow': 'towns-glow 3s ease-out 1 normal forwards running 100ms',
        flip: 'flip 6s infinite steps(2, end)',
        rotate: 'rotate 3s linear infinite both',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-radix')(),
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          'bg-grid-small': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          'bg-dot': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' },
      )
    },
  ],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

  addBase({
    ':root': newVars,
  })
}
