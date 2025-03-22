import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#101010',
        darkModeBlack: '#101010',
        drodatDarkGray: '#141414',
        drodatWhite2: '#f9f9fb',
        drodatOrange: '#FF4D00',
        drodatLightGray: '#fafafa',
        weatherBlue100: '#4c88cc',
        weatherBlue500: '#0060bc',
        weatherBlue300: '#62acfd',
        weatherBlue: '#62acfd',
        weatherBlueLight: '#79A2D3',
        weatherBlueBg: '#0191d0',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        'destructive-foreground': 'var(--destructive-foreground)',
        border: 'var(--border)',
      },
      fontFamily: {
        'sfpro-thin': ['SF Pro Display', 'sans-serif'],
        'sfpro-extralight': ['SF Pro Display', 'sans-serif'],
        'sfpro-light': ['SF Pro Display', 'sans-serif'],
        'sfpro-regular': ['SF Pro Display', 'sans-serif'],
        'sfpro-medium': ['SF Pro Display', 'sans-serif'],
        'sfpro-semibold': ['SF Pro Display', 'sans-serif'],
        'sfpro-bold': ['SF Pro Display', 'sans-serif'],
        'sfpro-heavy': ['SF Pro Display', 'sans-serif'],
        'sfpro-black': ['SF Pro Display', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
    },
  },
  plugins: [animatePlugin],
} satisfies Config;

export default config;
