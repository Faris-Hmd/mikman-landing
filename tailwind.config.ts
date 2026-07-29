import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary-rgb) / <alpha-value>)",
        "primary-dark": "rgb(var(--color-primary-dark-rgb) / <alpha-value>)",
        "primary-light": "rgb(var(--color-primary-light-rgb) / <alpha-value>)",
        accent: "rgb(var(--color-accent-rgb, 99 102 241) / <alpha-value>)",
        bg: "var(--color-bg)",
        "bg-alt": "var(--color-bg-alt)",
        surface: "var(--color-surface)",
        "surface-hover": "var(--color-surface-hover)",
        "surface-card": "var(--color-surface-card)",
        "nav-bg": "var(--color-nav-bg)",
        border: "var(--color-border)",
        "border-hover": "var(--color-border-hover)",
        "text-primary": "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        "text-subtle": "var(--color-text-subtle)",
        "hero-fade": "var(--color-hero-fade)",
      },
      fontFamily: {
        cairo: ["Cairo", "system-ui", "-apple-system", "sans-serif"],
        nunito: ["Nunito", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        hero: "var(--text-hero)",
        "h2-size": "var(--text-h2)",
        "h3-size": "var(--text-h3)",
        "body-size": "var(--text-body)",
        "small-size": "var(--text-small)",
      },
      boxShadow: {
        'glow-sm': '0 0 15px var(--color-primary-glow)',
        'glow-md': '0 0 30px var(--color-primary-glow)',
        'glow-lg': '0 0 50px var(--color-primary-glow)',
        'card': '0 10px 30px -10px var(--color-card-shadow)',
      },
    },
  },
  plugins: [],
};
export default config;