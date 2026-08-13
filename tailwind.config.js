import { themeConfig } from './src/config/themeConfig.ts'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: themeConfig.colors.primary,
        secondary: themeConfig.colors.secondary,
        accent: themeConfig.colors.accent,
        background: themeConfig.colors.background,
        'surface-text': themeConfig.colors.surfaceText,
      },
      fontFamily: {
        main: themeConfig.fonts.main.map((font) =>
          font.includes(' ') ? `"${font}"` : font,
        ),
        sans: [...themeConfig.fonts.sans],
      },
    },
  },
  plugins: [],
}
