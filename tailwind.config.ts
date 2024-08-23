import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'base-bg': '#0b0f19',
        'second-bg': '#181818',
        'dark-bg': '#222222',
        'gray-bg': '#c4c4c4',
        'gray-txt': '#909090',
        text: '#e5e3e3',
        salad: '#D3E97A',
        error: '#ff6a00',
        success: '#a8df71',
        info: '#00bdbd',
      },
    },
  },
  plugins: [],
};
export default config;
