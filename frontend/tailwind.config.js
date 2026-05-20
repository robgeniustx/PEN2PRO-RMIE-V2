/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          bg:      "#080C14",
          surface: "#0F1520",
          border:  "#1A2D50",
          inner:   "#1A2235",
          gold:    "#D4A017",
          orange:  "#FF8A00",
          blue:    "#1E88E5",
          teal:    "#00C9B1",
          green:   "#059669",
          purple:  "#7C3AED",
        },
      },
      animation: {
        "fade-up":         "fadeUp 0.6s ease both",
        "fade-up-delay":   "fadeUp 0.6s 0.15s ease both",
        "fade-up-delay-2": "fadeUp 0.6s 0.3s ease both",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
