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
        gray: "#ECECECA6",
        violet: "#0C0324",
      },
      screens: {
        sm: "682px",
      },
    },
  },
  plugins: [],
};
