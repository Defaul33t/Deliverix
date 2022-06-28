module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      screens: {
        xxl: "1600px",
        "3xl": "1920px",
      },
      maxWidth: {
        xvs: "14rem",
      },
      colors: {
        "main-orange": "#F47621",
        "main-green": "#538504",
        "main-dark": "#393939",
        "gray-ad": "#ADADAD",
      },
    },
  },
  plugins: [],
};
