/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "off-white": "#ffffffcc",
        "deep-purple": "#6b37d9",
        "transparent-white": "#FFFFFF1E",
      },
    },
  },
  plugins: [],
};
