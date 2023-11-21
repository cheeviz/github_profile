import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "2px 6px 4px 0px rgba(0, 0, 0, 0.25)",
        "4xl": "10px 13px 10.399999618530273px rgba(0, 0, 0, 0.25)"
      },
      colors: {
        white: "#fff",
        black: "#000000",
        "light-black": "#262626",
        red: {
          "100": "#fc0303",
          "200": "#8c0000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
