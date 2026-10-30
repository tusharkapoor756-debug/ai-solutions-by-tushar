import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        heading: ["var(--font-outfit)", "var(--font-inter)", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        background: "#0C0D0E", // Deep studio charcoal-black
        canvas: "#131518",     // Dark tone card/canvas
        paper: "#F7F5F0",      // Warm off-white
        "paper-muted": "#EBE8DF",
        ink: {
          900: "#0C0D0E",
          800: "#17191C",
          700: "#24272C",
          600: "#3D4148",
          400: "#707682",
          200: "#B4B9C2",
          100: "#E3E5E8",
        },
        studio: {
          orange: "#FF5500",    // Electric orange controlled accent
          "orange-hover": "#E64D00",
          "orange-tint": "rgba(255, 85, 0, 0.08)",
          sand: "#EFECE6",
          stone: "#2B2E33",
          border: "#1F2329",
          "border-light": "#E5E1D8",
        },
      },
      letterSpacing: {
        editorial: "-0.035em",
        tightest: "-0.05em",
        eyebrow: "0.18em",
      },
      borderWidth: {
        '1.5': '1.5px',
      },
    },
  },
  plugins: [],
};

export default config;
