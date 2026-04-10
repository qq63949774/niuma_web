import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#131313',
        paper: '#f6f3ea',
        signal: '#f3eb69',
        alert: '#ff7a59',
        muted: '#78716c',
      },
      boxShadow: {
        panel: '0 20px 60px rgba(0, 0, 0, 0.18)',
      },
      keyframes: {
        rise: {
          '0%': {
            opacity: '0',
            transform: 'translateY(16px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        rise: 'rise 0.35s ease-out',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', '"PingFang SC"', '"Hiragino Sans GB"', '"Microsoft YaHei"', 'sans-serif'],
        display: ['"DIN Condensed"', '"Oswald"', '"Arial Narrow"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
