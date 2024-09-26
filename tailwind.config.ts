import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "rgba(var(--primary), <alpha-value>)",
          foreground: "var(--bg-primary)",
        },
        secondary: {
          DEFAULT: "rgba(var(--secondary), <alpha-value>)",
          foreground: "var(--bg-secondary)",
        },
        jikoo: {
          red: "rgba(var(--secondary-2), <alpha-value>)",
          order: "#5206B5",
          orange: "#D24305",
          footer: "var(--footer)",
          error: "#DD524D",
          "brand-green": "#009933",
        },
        state: {
          "success-50": "#E7F6EC",
          "success-75": "#B5E3C4",
          "success-200": "#5FC381",
          "success-600": "#04802E",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        grey: {
          "75": "#F7F9FC",
          "200": "#E4E7EC",
          "400": "#98A2B3",
          "500": "#667185",
          "700": "#344054",
          "900": "#101928",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        dm: "10px",
      },
      screens: {
        sm400: "400px",
        sm500: "500px",
        sm600: "600px",
        sm700: "700px",
      },
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        "dm-sans": ["DM Sans", "Arial", "sans-serif"],
        "sf-pro": ["SF Pro Display", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
    // require("daisyui"),
    // nextui(),
  ],
} satisfies Config;

export default config;
