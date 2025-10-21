/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a2e',
        'darker-bg': '#0f0f1e',
        'text-light': '#ffffff',
        'text-gray': '#a0a0b0',
        'accent-orange': '#fda085',
        'accent-purple': '#764ba2',
        'accent-blue': '#667eea',
        // New Vireo Color Palette
        'vireo-deep-night': '#0A1116',
        'vireo-soft-gray': '#A7A0D0',
        'vireo-reflective-cyan': '#00FFC0',
        'vireo-input-dark': '#05090C',
        'vireo-card-subtle': '#1A222B',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #00FFC0 0%, #A7A0D0 50%, #00FFC0 100%)',
        'hero-gradient': 'radial-gradient(ellipse at top, #1A222B 0%, #0A1116 70%)',
        'solution-gradient': 'linear-gradient(135deg, rgba(0, 255, 192, 0.05) 0%, rgba(167, 160, 208, 0.05) 100%)',
        'offer-gradient': 'radial-gradient(ellipse at bottom, rgba(0, 255, 192, 0.1) 0%, #0A1116 70%)',
        'final-gradient': 'linear-gradient(135deg, rgba(0, 255, 192, 0.1) 0%, rgba(167, 160, 208, 0.1) 100%)',
        'differentiator-gradient': 'linear-gradient(to bottom, #1A222B, #0A1116)',
        'text-gradient': 'linear-gradient(135deg, #A7A0D0 0%, #00FFC0 100%)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      backdropBlur: {
        '10': '10px',
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'burn': 'burn 1s ease-in-out infinite',
        'rotate': 'rotate 20s linear infinite',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(180deg)' },
        },
        burn: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slideUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0.95)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1)' 
          },
        },
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}

