import type { Config } from "tailwindcss";

const config: Config = {
//   darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        jade: {
          DEFAULT: "hsl(var(--jade))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
        },

        card: {
          DEFAULT: "hsl(var(--card))",
        },

        border: "hsl(var(--border))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;