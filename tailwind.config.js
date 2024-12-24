/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cust-bg": "hsl(185, 41%, 84%)",
      },
    },
  },
  plugins: [],
};
