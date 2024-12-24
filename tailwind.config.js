/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cust-bg": "hsl(185, 41%, 84%)",
        "cust-input-bg": "hsl(189, 41%, 97%)",
        "cust-button-bg": "hsl(183, 100%, 15%)",
        "cust-strong-cyan": "hsl(172, 67%, 45%)",
      },
    },
  },
  plugins: [],
};
