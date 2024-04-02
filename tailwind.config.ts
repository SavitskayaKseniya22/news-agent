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
    },
  },
  plugins: [],
};
export default config;
