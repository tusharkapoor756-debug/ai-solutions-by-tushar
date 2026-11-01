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
        heading: ["var(--font-jakarta)", "var(--font-outfit)", "var(--font-inter)", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-outfit)", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        // Airo HSL token system (matches CSS variables)
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        // Deep Charcoal / Black Backgrounds
        void: "#0C0D0E",
        surface: "#131518",
        raised: "#17191C",
        panel: "#1F2329",

        // Tushar Labs Original Brand Accent: Electric Orange
        brand: {
          orange: "#FF6B00",
          bright: "#FF5500",
          hover: "#E64D00",
          dim: "rgba(255, 107, 0, 0.10)",
          glow: "rgba(255, 107, 0, 0.22)",
        },

        // Electric alias mapped to brand orange system
        electric: {
          orange: "#FF6B00",
          bright: "#FF5500",
          dim: "rgba(255, 107, 0, 0.10)",
        },

        // Text Hierarchy: White & Warm Off-White to Subtle Grey
        prose: {
          primary: "#FFFFFF",
          paper: "#F7F5F0",
          secondary: "#B4B9C2",
          dim: "#707682",
          muted: "#3D4148",
        },

        // Studio Tokens
        studio: {
          orange: "#FF6B00",
          "orange-hover": "#E64D00",
          "orange-tint": "rgba(255, 107, 0, 0.08)",
          sand: "#EFECE6",
          stone: "#24272C",
          border: "#1F2329",
          "border-light": "#E5E1D8",
        },

        // Legacy studio mapping
        canvas: "#131518",
        paper: "#F7F5F0",
        ink: {
          900: "#0C0D0E",
          800: "#17191C",
          700: "#24272C",
          600: "#3D4148",
          400: "#707682",
          200: "#B4B9C2",
          100: "#E3E5E8",
        },
      },
      letterSpacing: {
        editorial: "-0.04em",
        tightest: "-0.055em",
        eyebrow: "0.16em",
        wide: "0.08em",
      },
      borderWidth: {
        "1.5": "1.5px",
      },
      backgroundImage: {
        "gradient-radial-orange":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255, 107, 0, 0.12), transparent)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "slide-in-top": "slideInTop 0.2s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        slideInTop: {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
