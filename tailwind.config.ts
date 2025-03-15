import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0A0A0F',    // Fond principal très sombre
          secondary: '#111119',   // Fond secondaire
        },
        accent: {
          blue: {
            DEFAULT: '#1E90FF',   // Bleu vif pour les accents
            dark: '#0B4D7A',      // Bleu profond
          },
          silver: {
            light: '#C0C0C0',     // Argent clair
            dark: '#717785',      // Argent foncé
          }
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
