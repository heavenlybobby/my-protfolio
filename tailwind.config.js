// filepath: c:\Users\ADMIN\Desktop\protfolio\my-protfolio\tailwind.config.js
import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('./src/assets/images/hero-bg.jpg')",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
});
