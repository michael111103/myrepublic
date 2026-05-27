/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      colors: {
        brand: {
          purple: "#7C3AED",
          violet: "#5B21B6",
          light: "#A78BFA",
          glow: "#C4B5FD",
        },
        neon: {
          green: "#22C55E",
          cyan: "#06B6D4",
          lime: "#84CC16",
        },
        dark: {
          900: "#04020F",
          800: "#080416",
          700: "#0D0824",
          600: "#130E30",
        },
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        shimmer: "shimmer 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee 30s linear infinite reverse",
        "signal-wave": "signalWave 2s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        borderGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(124, 58, 237, 0.9), 0 0 80px rgba(124, 58, 237, 0.4)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        signalWave: {
          "0%, 100%": { transform: "scaleY(0.3)", opacity: "0.4" },
          "50%": { transform: "scaleY(1)", opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-gradient":
          "radial-gradient(at 40% 20%, #7C3AED 0px, transparent 50%), radial-gradient(at 80% 0%, #5B21B6 0px, transparent 50%), radial-gradient(at 0% 50%, #06B6D4 0px, transparent 50%), radial-gradient(at 80% 50%, #4338CA 0px, transparent 50%), radial-gradient(at 0% 100%, #7C3AED 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};
