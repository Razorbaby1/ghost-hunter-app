/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ghost-black': '#050505',
        'ghost-dark': '#0a0f14',
        'ghost-green': '#00ff9d',
        'ghost-cyan': '#00f0ff',
        'ghost-dim': '#1a2c38',
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', 'sans-serif'],
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}