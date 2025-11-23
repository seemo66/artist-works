// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app.vue',
    './app/**/*.{vue,js,ts}', // <- scan everything under app
    './pages/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: '#1B1B1B',
        pink: '#960766',
        lighterGrey: '#EBEBEB',
        lightGrey: '#D3D6DF',
        mediumGrey: '#767676',
        blue: '#4285F4',
      },
    },
  },
  plugins: [],
};

export default config;
