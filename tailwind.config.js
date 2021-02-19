module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "suta-lapis-lazuli": "#1a5881",
        "suta-seashell": "#fbf4ec",
        "suta-quick-silver": "#a8a3a3",
        "suta-gunmetal": "#222730",
        "suta-light-orange": "#f3cca2",
        "suta-blue": "#8094BD",
      },
    },
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
