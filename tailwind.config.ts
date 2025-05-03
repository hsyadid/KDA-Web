import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./modules/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        syne: ['"Syne"', 'sans-serif'],
      },
      colors: {
        green: {
          1: '#082C2A',
          2: '#194B49',
          3: '#215A58',
          4: '#4F6563',
          5: '##879087',
        },
        'yellow': '#FFBD59',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
