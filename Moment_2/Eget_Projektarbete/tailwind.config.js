/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["*.html", "**/*.html"],
  theme: {
    extend: {
      transitionDuration: {
        430: "430ms",
      },
      fontFamily: {
        candara: ["Candara"],
      },
      backgroundColor: {
        puccin_frappé: {
          DEFAULT: "#2A2E3D",
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@catppuccin/tailwindcss")],
};