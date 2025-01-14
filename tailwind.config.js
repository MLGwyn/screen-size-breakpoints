/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {playwrite:["Playwrite VN"], doto:["Doto"], arsenal: ["Arsenal SC"], faculty: ["Faculty Glyphic"]}
    },
  },
  plugins: [],
};
