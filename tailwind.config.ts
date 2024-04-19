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
        "base-bg": "#0b0f19",
        "second-bg": "#181818",
        "dark-bg": "#222222",
        "gray-bg": "#c4c4c4",
        "gray-txt": "#909090",
        "salad": "#D3E97A"

      },
    },
  },
  plugins: [],
};
export default config;
