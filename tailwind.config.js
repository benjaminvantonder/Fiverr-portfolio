/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: "var(--bg)",
        "surface-alt": "var(--bg-alt)",
        "surface-card": "var(--bg-card)",
        foreground: "var(--text)",
        "foreground-muted": "var(--text-muted)",
        boundary: "var(--border)",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
