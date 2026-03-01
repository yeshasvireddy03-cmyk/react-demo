/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        45: "45deg",
        90: "90deg",
        135: "135deg",
        180: "180deg",
        270: "270deg",
      },
      borderRadius: {
        large: "14px",
      },
      backgroundImage: (theme) => ({
        "apple-gradient": "linear-gradient(to right, var(--tw-gradient-stops))",
      }),
      gradientColorStops: (theme) => theme("colors"),
      width: {
        xxl: "400px",
      },
      fontSize: {
        micro: "8px",
        xxl: "35px",
        xxs: "9px",
      },
      colors: {
        green: {
          100: "#BBE0C5",
        },
        background: {
          grey: "#E2E8F0",
        },
        secondary: {
          100: "#70757A",
        },
        primary: "black",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover", "focus"],
    },
  },
  important: true,
  plugins: [
    // your other plugins
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          width: "0px",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};