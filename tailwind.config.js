/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          rm: {
            portal: "#33FF99",
            accent: "#F2D03A",
            neon:   "#41EAD4",
            dark:   "#0B0C10",
            text:   "#C5C6C7",
          },
        },
        fontFamily: {
          hero: ["Orbitron", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  