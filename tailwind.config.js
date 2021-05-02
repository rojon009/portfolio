module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grish: "#00f260",
        dark: {
          50: "#116116116",
          100: "#f7f7f7",
          200: "#bababa",
          300: "#7d7d7d",
          400: "#3d3d3d",
          500: "#000000",
          600: "#080808",
          700: "#0d0d0d",
          800: "#141414",
          900: "#1a1a1a",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
