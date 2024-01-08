import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        reg: ['var(--font-dank-mono-reg)'],
        ital: ['var(--font-dank-mono-ital)'],
      },
    },
  },
  plugins: [],
};
export default config;
