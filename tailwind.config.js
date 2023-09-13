/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        coverImage: "url(/src/assets/bg.svg)",
      },
    },
  },
  plugins: [],
};
