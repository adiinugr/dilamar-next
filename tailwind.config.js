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
        brown: {
          primary: "#8A5010",
          light: "#E89438",
          lighter: "#F1BF87",
          dark: "#452808"
        }
      },
      height: {
        128: "32rem",
        144: "36rem"
      },
      boxShadow: {
        "blur-16": "0px 0px 16px 0px rgba(0,0,0,0.25)",
        "blur-20": "0px 0px 20px rgba(69, 40, 8, 0.2)"
      }
    },
    fontFamily: {
      sans: ["Cabin", "sans-serif"],
      display: ["Dancing Script", "cursive"],
      body: ["Cabin", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      sacramento: ["Sacramento", "cursive"],
      shadows: ["Shadows Into Light", "cursive"],
      yellowtail: ["Yellowtail", "cursive"]
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
