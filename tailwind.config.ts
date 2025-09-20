import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx,json}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0a2540",
        turquoise: "#1abc9c",
        aurora: "#6c5ce7",
        surface: "#0f172a",
        muted: "#94a3b8"
      },
      backgroundImage: {
        "hero-aurora": "radial-gradient(circle at 20% 20%, rgba(26,188,156,0.3), transparent 45%), radial-gradient(circle at 80% 30%, rgba(108,92,231,0.25), transparent 55%), radial-gradient(circle at 50% 80%, rgba(10,37,64,0.6), transparent 60%)"
      },
      keyframes: {
        aurora: {
          "0%": { transform: "translate3d(0px, 0px, 0)" },
          "25%": { transform: "translate3d(-20px, 10px, 0)" },
          "50%": { transform: "translate3d(10px, -20px, 0)" },
          "75%": { transform: "translate3d(20px, 15px, 0)" },
          "100%": { transform: "translate3d(0px, 0px, 0)" }
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        aurora: "aurora 18s ease-in-out infinite alternate",
        "fade-in": "fade-in 1s ease forwards"
      },
      boxShadow: {
        glow: "0 20px 60px -20px rgba(26, 188, 156, 0.35)"
      }
    }
  },
  plugins: [animate]
};

export default config;
