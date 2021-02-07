module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      display: ["Dancing Script", "cursive"],
      body: ["Raleway", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
