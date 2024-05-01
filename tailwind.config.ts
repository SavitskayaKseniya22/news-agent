import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'palette-orange': '#f36326',
        'palette-gray': {
          dark: '#909090',
          light: '#c3c3c3',
        },
        'palette-blue': {
          dark: '#109BE9',
          light: '#CFECFC',
        },
      },

      height: {
        '128': '32rem',
      },
      fontSize: {
        h1: [
          '3.875rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.003em',
            fontWeight: '700',
          },
        ],
        h2: [
          '3rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.005em',
            fontWeight: '500',
          },
        ],
        h3: [
          '2.5rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.005em',
            fontWeight: '500',
          },
        ],
        h4: [
          '2rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.005em',
            fontWeight: '700',
          },
        ],
        h5: [
          '1.5rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.005em',
            fontWeight: '700',
          },
        ],

        'h6-bold': [
          '1rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.005em',
            fontWeight: '700',
          },
        ],
        'h6-semibold': [
          '1rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.005em',
            fontWeight: '500',
          },
        ],
        caption: [
          '0.75rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.008em',
            fontWeight: '500',
          },
        ],
        content: [
          '1rem',
          {
            lineHeight: '150%',
            letterSpacing: '0.005em',
            fontWeight: '300',
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
