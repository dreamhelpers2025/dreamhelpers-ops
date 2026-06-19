/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5d9e2',
          300: '#b1b8c7',
          400: '#7e8699',
          500: '#5a6376',
          600: '#434b5b',
          700: '#363c49',
          800: '#22262f',
          900: '#15171d',
          950: '#0b0c10',
        },
      },
    },
  },
  plugins: [],
};
