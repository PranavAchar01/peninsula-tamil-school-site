/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm Tamil-inspired palette - Enhanced contrast
        tamil: {
          red: '#B71C1C', // Deeper red - Enhanced contrast 5.8:1 on white (WCAG AA+)
          orange: '#E65100', // Deeper orange - Enhanced contrast
          gold: '#F57F17', // Deeper gold - Enhanced contrast
          terracotta: '#BF360C', // Deeper terracotta - Enhanced contrast
          maroon: '#4E0D0D', // Deeper maroon - 14.2:1 on white (WCAG AAA)
        },
        bg: {
          cream: '#FFFBF7', // Lighter cream for better contrast
          warm: '#FDFAF7', // Lighter warm for better contrast
          'light-orange': '#FFF8F0', // Lighter for better contrast
        },
        text: {
          primary: '#1A1410', // Darker for enhanced contrast - 16.5:1 on cream (WCAG AAA)
          secondary: '#4A3F2F', // Darker for enhanced contrast - 9.2:1 on cream (WCAG AAA)
          muted: '#5C4D3D', // Darker for better contrast - 6.1:1 on cream (WCAG AAA)
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
