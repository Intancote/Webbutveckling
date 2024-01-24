/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["*.html", "**/*.html"],
  theme: {
    extend: {
      screens: {
        'max-sm': {'max': '639px'},
        'max-md': {'max': '767px'},
        'max-lg': {'max': '1023px'},
        'max-xl': {'max': '1279px'},
        'max-2xl': {'max': '1535px'},
      },
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