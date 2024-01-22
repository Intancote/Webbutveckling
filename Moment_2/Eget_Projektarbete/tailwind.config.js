/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["*.html", "**/*.html"],
  theme: {
    extend: {
      transitionDuration: {
        430: "430ms",
      },
      padding: {
        37: "9.25rem"
      },
      height: {
        88: "22rem"
      },
      width: {
        144: "36rem"
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