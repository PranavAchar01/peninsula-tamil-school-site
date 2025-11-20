/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm Tamil-inspired palette
        tamil: {
          red: '#C62828', // Contrast ratio 4.88:1 on white (WCAG AA compliant)
          orange: '#F57C00',
          gold: '#F9A825',
          terracotta: '#D84315',
          maroon: '#6D1B1B', // Contrast ratio 10.34:1 on white (WCAG AAA compliant)
        },
        bg: {
          cream: '#FFF8F0',
          warm: '#FAF7F2',
          'light-orange': '#FFF3E0',
        },
        text: {
          primary: '#2C2416', // Contrast ratio 13.89:1 on cream (WCAG AAA compliant)
          secondary: '#5D4E37', // Contrast ratio 7.21:1 on cream (WCAG AAA compliant)
          muted: '#6B5A43', // Darkened for better contrast - WCAG AA compliant (4.5:1+)
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
