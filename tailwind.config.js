/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(0 0% 100%)",
        foreground: "hsl(222.2 47.4% 11.2%)",
        muted: "hsl(210 40% 96.1%)",
        'muted-foreground': "hsl(215.4 16.3% 46.9%)",
      },
      borderRadius: {
        xl: "0.75rem",
        '2xl': "1rem"
      },
      boxShadow: {
        card: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)"
      }
    },
  },
  plugins: [],
}