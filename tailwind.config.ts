import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        "ted-red": "#FF2B06",
        "ted-black": "#000000",
        "ted-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
