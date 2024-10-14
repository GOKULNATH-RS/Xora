import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontSize: {
      xs: '0.625rem',
      sm: '0.812rem',
      base: '1.000rem',
      md: '1.250rem',
      lg: '1.562rem',
      xl: '1.938rem',
      '2xl': '2.438rem',
      '3xl': '3.062rem',
      '4xl': '3.812rem'
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: '#CAFF00',
        black: {
          500: '#0a0a0a',
          600: '#030303',
          700: '#070707'
        },
        white: {
          200: '#ffffff',
          500: '#fafafa'
        },
        purple: '#9C07A7'
      }
    },
    fontFamily: {
      powerGrotesk: ['var(--font-powerGrotesk)']
    }
  },
  plugins: []
}
export default config
