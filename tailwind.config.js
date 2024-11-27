/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "theme-white": "hsl(0, 0%, 100%)",
        "theme-light-pink": "hsl(275, 100%, 97%)",
        "theme-grayish-purple": "hsl(292, 16%, 49%)",
        "theme-dark-purple": "hsl(292, 42%, 14%)",
      },
    },

    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
