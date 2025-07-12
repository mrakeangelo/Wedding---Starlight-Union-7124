/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a0f1c',
          800: '#1a1f2e',
          700: '#2a2f3e',
          600: '#3a3f4e',
        },
        moonlight: {
          100: '#f8fafc',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
        },
        champagne: {
          100: '#fef7e6',
          200: '#fdecc8',
          300: '#fcd34d',
          400: '#f59e0b',
        },
        galaxy: {
          100: '#e9d5ff',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'fadeUp': 'fadeUp 0.8s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'twinkle': 'twinkle 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(251, 191, 36, 0.8)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'starfield': "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(167, 139, 250, 0.2) 0%, transparent 50%)",
        'cosmic': "linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 50%, #2a2f3e 100%)",
      }
    },
  },
  plugins: [],
}