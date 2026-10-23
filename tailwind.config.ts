import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#142A43",
          light: "#1E3B5C",
          dark: "#0B1929",
          900: "#07111C",
        },
        gold: {
          DEFAULT: "#B99762",
          light: "#D4B685",
          dark: "#967543",
          muted: "rgba(185, 151, 98, 0.15)",
        },
        ivory: {
          DEFAULT: "#F6F3ED",
          dark: "#ECE7DC",
          light: "#FAF8F5",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F9FAFB",
          muted: "#F3F4F6",
        },
        text: {
          primary: "#1B2430",
          secondary: "#657181",
          muted: "#94A3B8",
          onDark: "#FFFFFF",
          onDarkMuted: "#CBD5E1",
        },
        border: {
          DEFAULT: "#E5E7EB",
          dark: "rgba(255, 255, 255, 0.12)",
          gold: "rgba(185, 151, 98, 0.3)",
        },
        status: {
          success: "#26734D",
          error: "#B42318",
          warning: "#B54708",
          info: "#026AA2",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1360px",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(11, 25, 41, 0.05)",
        card: "0 10px 30px -5px rgba(11, 25, 41, 0.08)",
        floating: "0 20px 40px -10px rgba(11, 25, 41, 0.15)",
        gold: "0 8px 24px -4px rgba(185, 151, 98, 0.25)",
      },
      borderRadius: {
        brand: "10px",
        card: "14px",
      },
    },
  },
  plugins: [],
};

export default config;
