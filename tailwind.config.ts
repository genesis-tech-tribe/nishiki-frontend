/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-lightest': '#e6f2f1',
        'primary-light': '#abd4cf',
        primary: '#6ab3ab',
        'primary-dark': '#5fa19a',
        accent: '#fcd884',
        danger: '#cd5a5a',
        'danger-dark': '#b95151',
        'gray-lightest': '#f8f8f8',
        'gray-light': '#eeeeee',
        gray: '#bdbdbd',
        'gray-dark': '#777777',
        white: '#ffffff',
        black: '#222222',
      },
      borderRadius: {
        xl: '0.125rem', // 2px
        sm: '0.25rem', // 4px
        DEFAULT: '0.625rem', // 10px
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.25)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
