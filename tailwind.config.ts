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
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        accent: "var(--color-accent)",
        surface: "var(--color-surface)",
        "text-primary": "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
      },
      fontSize: {
        hero: "var(--text-hero)",
        "h2-size": "var(--text-h2)",
        "h3-size": "var(--text-h3)",
        "body-size": "var(--text-body)",
        "small-size": "var(--text-small)",
      },
    },
  },
  plugins: [],
};
export default config;