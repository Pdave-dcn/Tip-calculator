/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cust-strong-cyan": "hsl(172, 67%, 45%)",
        "cust-hvr": "hsl(172, 76.80%, 54.30%)",
        "cust-very-dark-grayish-cyan": "hsl(183, 100%, 15%)",
        "cust-dark-grayish-cyan": "hsl(186, 14%, 43%)",
        "cust-grayish-cyan": "hsl(184, 14%, 56%)",
        "cust-light-grayish-cyan": "hsl(185, 41%, 84%)",
        "cust-very-light-grayish-cyan": "hsl(189, 41%, 97%)",
      },
      fontFamily: {
        spaceMono: ["'Space Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
