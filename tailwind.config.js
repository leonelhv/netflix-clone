/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('assets/img/bg-login.jpg')",
      },
      colors: {
        netflix: "#e50914",
        gris: "#141414",
      },
      backgroundColor: {
        netflix: "#e50914",
        gris: "#141414",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
