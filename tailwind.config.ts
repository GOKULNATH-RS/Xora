import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        action: "#CAFF00",
        black:{
          500: "#0a0a0a",
          600: "#030303",
          700: "#070707"
        }
      },
    },
    fontFamily: {
      powerGrotesk: ['var(--font-powerGrotesk)']
    }
  },
  plugins: [],
};
export default config;
