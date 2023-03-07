/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1A232B",
        second: "#7EE4FF",
        third: "#212D38",
      },
      fontFamily: {
        Oswald: "oswald, sans-serif"
      },
    },
  },
  plugins: [],
}
