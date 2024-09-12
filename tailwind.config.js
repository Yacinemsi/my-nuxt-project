/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundColor: {
        header: "#0B081C",
      },

      colors: {
        customGray: "#ECECEC",
        violet: "#0C0324",
      },
      screens: {
        sm: "700px",
      },
      boxShadow: {
        custom:
          "0px 0.5px 0px 0px rgba(255, 255, 255, 0.50) inset, 0px -2px 10px 0px rgba(233, 223, 255, 0.30), 0px -2px 40px 0px rgba(187, 155, 255, 0.15)",
      },
    },
  },
  plugins: [],
};
