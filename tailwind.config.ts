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
          light: '#9b9b9b',
        },
        'palette-blue': {
          dark: '#109BE9',
          light: '#CFECFC',
        },
      },
      width: {
        '320': '80rem',
      },
      height: {
        '128': '32rem',
      },
      fontSize: {
        h1: [
          '3.875rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.3%',
            fontWeight: '700',
          },
        ],
        h4: [
          '2rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.5%',
            fontWeight: '700',
          },
        ],
        h5: [
          '1.5rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.5%',
            fontWeight: '700',
          },
        ],

        'h6-bold': [
          '1rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.5%',
            fontWeight: '700',
          },
        ],
        'h6-semibold': [
          '1rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.5%',
            fontWeight: '500',
          },
        ],
        caption: [
          '0.75rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.8%',
            fontWeight: '500',
          },
        ],
        content: [
          '1rem',
          {
            lineHeight: '125%',
            letterSpacing: '0.5%',
            fontWeight: '300',
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
