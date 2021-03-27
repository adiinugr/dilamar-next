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
        "nurul-color1": "#CEA300",
        "nurul-color2": "#FFFF9F",
        "nurul-color3": "#E9A2A3",
        "nurul-color4": "#A25576",
        "nurul-gold": "#D19515",
        "kharnisa-imam-rosegold": "#B76E79",
      },
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      display: ["Dancing Script", "cursive"],
      body: ["Raleway", "sans-serif"],
      noto: ["Noto Serif TC", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
