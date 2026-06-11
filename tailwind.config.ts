import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core space palette
        void:      "#030712",   // deepest black
        nebula:    "#0d0f1a",   // dark blue-black
        cosmos:    "#111827",   // node backgrounds
        // Accent spectrum
        pulsar:    "#06b6d4",   // cyan glow
        quasar:    "#6d28d9",   // deep violet
        nova:      "#8b5cf6",   // mid violet
        aurora:    "#a78bfa",   // soft lavender
        starlight: "#f59e0b",   // warm gold
        // Text
        stardust:  "#e2e8f0",   // primary text
        comet:     "#94a3b8",   // secondary text
        asteroid:  "#475569",   // muted text
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        mono:    ["JetBrains Mono", "Fira Code", "monospace"],
        body:    ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "space-gradient": "radial-gradient(ellipse at 20% 50%, #1e1b4b 0%, #030712 50%, #0a0a0f 100%)",
        "node-gradient":  "linear-gradient(135deg, #111827 0%, #1e1b4b 100%)",
        "glow-cyan":      "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
        "glow-violet":    "radial-gradient(circle, rgba(109,40,217,0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        "glow-sm":  "0 0 10px rgba(6,182,212,0.3)",
        "glow-md":  "0 0 20px rgba(6,182,212,0.4), 0 0 40px rgba(109,40,217,0.2)",
        "glow-lg":  "0 0 30px rgba(6,182,212,0.5), 0 0 60px rgba(109,40,217,0.3)",
        "glow-gold":"0 0 20px rgba(245,158,11,0.4)",
        "node":     "0 4px 6px -1px rgba(0,0,0,0.5), 0 0 20px rgba(109,40,217,0.2)",
      },
      animation: {
        "pulse-slow":    "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
        "float":         "float 6s ease-in-out infinite",
        "shimmer":       "shimmer 2s linear infinite",
        "orbit":         "orbit 20s linear infinite",
        "twinkle":       "twinkle 3s ease-in-out infinite",
        "drift":         "drift 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        orbit: {
          "0%":   { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%":      { opacity: "0.3", transform: "scale(0.8)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%":      { transform: "translate(10px, -10px) rotate(1deg)" },
          "66%":      { transform: "translate(-8px, 8px) rotate(-1deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
