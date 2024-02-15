import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#700C2F',
        'secondary': '#F5F5F5',
        'tertiary': '#803F53',
      },
    }
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
