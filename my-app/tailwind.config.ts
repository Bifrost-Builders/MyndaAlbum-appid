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
        'ProjectWhite': 'FEFCFB',
        'Blue': '034078',
        'DarkBlue': '0A1128',
      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(20rem, 1fr))',
      }
    },
  },
  plugins: [],
};
export default config;
