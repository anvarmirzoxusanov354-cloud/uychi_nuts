/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f4f8f4',
          100: '#e5efe5',
          200: '#cce2cd',
          300: '#a3caa6',
          400: '#70aa74',
          500: '#1E5128', // Exact brand green from the rendering
          600: '#194321',
          700: '#133519',
          800: '#0e2713',
          900: '#0a1d0d',
        },
        cream: {
          50:  '#fdfdfb',
          100: '#FDF6EC', // warm cream background
          200: '#f3ebd9',
          300: '#e6d9bf',
          400: '#d7c29e',
          500: '#c5a779',
        },
        bark: {
          100: '#ede0cc',
          200: '#d4be99',
          300: '#b89a66',
          400: '#9a7a3d',
          500: '#7a5c1e',
        }
      },
      fontFamily: {
        sans:  ['"Jost"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
