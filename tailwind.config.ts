import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        ink: "#080b12",
        panel: "#101522",
        accent: "#8b9cff",
      },
      boxShadow: {
        glow: "0 0 45px rgba(139, 156, 255, 0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
