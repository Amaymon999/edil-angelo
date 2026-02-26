import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "SF Pro Display", "SF Pro Text", "Segoe UI", "Roboto", "Helvetica", "Arial", "Apple Color Emoji", "Segoe UI Emoji"]
      },
      boxShadow: {
        soft: "0 20px 50px rgba(0,0,0,0.45)",
        ring: "0 0 0 1px rgba(255,255,255,0.06)"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
