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
        "kharnisa-imam-gold": "#C9B037",
        "kharnisa-imam-silver": "#F2F2F2",
        "may-kamal-american-silver": "#CECECE",
        "may-kamal-sonic-silver": "#797979",
        "may-kamal-platinum": "#E5E5E5",
        "nindya-andhika-gold": "#F5F2EC",
        "rosy-alfan-blue": "#1A374D",
        "sari-aby-dark-orange": "#EF7D00",
        "sari-aby-soft-orange": "#FBE6D3",
        main: "#DBAC94",
        dark: "#604A3E",
        light: "#F8E9DB",
      },
      height: {
        128: "32rem",
        144: "36rem",
      },
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      display: ["Dancing Script", "cursive"],
      body: ["Raleway", "sans-serif"],
      noto: ["Noto Serif TC", "serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
