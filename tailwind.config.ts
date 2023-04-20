import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        a: "#F89C6B",
        b: "#F6E8DD",
        c: "#3A597B",
        d: "#79CAC4",
        e: "#89023E",
      },
      fontFamily: {
        loubag: ["var(--font-loubag)", "sans-serif"],
        pop: ["'Poppins', sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
