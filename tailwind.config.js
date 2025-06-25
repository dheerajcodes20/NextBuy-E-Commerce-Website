/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "oklch(0.541 0.281 293.009)",
        secondary: "oklch(0.274 0.006 286.033)",
        background: "oklch(0.141 0.005 285.823)",
        foreground: "oklch(0.985 0 0)",
        destructive: "oklch(0.704 0.191 22.216)",
        muted: "oklch(0.274 0.006 286.033)",
        accent: "oklch(0.274 0.006 286.033)",
      }
    },
  },
  plugins: [],
}
