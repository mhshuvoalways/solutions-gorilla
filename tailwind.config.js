/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "off-white": "#ffffffcc",
        "rich-black": "#131313",
        "sheer-white": "#FFFFFF1F",
        "deep-purple": "#6b37d9",
      },
    },
  },
  plugins: [],
};
