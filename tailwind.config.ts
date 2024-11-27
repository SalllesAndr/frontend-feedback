import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
    extend: {
      backgroundImage: {
				'wave': "url('/background/wave.svg')",
			},
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
				poppins: ["Poppins", ...fontFamily.sans],
			},
			fontSize: {
				xs: ".75rem",
				sm: ".875rem",
				base: "1rem",
				lg: "1.125rem",
				xl: "1.25rem",
				"2xl": "1.5rem",
				"3xl": "1.875rem",
				"4xl": "2.25rem",
				"5xl": "3rem",
				"6xl": "4rem",
				"7xl": "5rem",
			},
      colors: {
        		"fb-pink-500": "#E20074",
				"fb-pink-400": "#EA469A",
				"fb-pink-300": "#E51982",

				"fb-black-400": "#000000",
        		"fb-black-300": "#262626",
        		"fb-black-200": "#232222",
				"fb-black-100": "#2A2A32",

        		"fb-gray-500": "#404040",
				"fb-gray-400": "#666666",
				"fb-gray-100": "#DADADA",

        		"fb-white-200": "#F2F2F2",
				"fb-white-100": "#FFFFFF",

				"fb-green-500": "#6E9319",
				"fb-green-400": "#87AE2D",
				"fb-green-300": "#A2D729",
				"fb-green-100": "#9EE493",

				"fb-red-400": "#991B1B",
				"fb-red-300": "#B91C1C",
				"fb-red-200": "#DC2626",
				"fb-red-100": "#EF4444",

        border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
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
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
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
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
        height: {
          "grid-rows-sidebar": "calc(100vh - 4rem)",
          "table": "calc(100vh - 22rem)",
        },
        width: {
          "authenticated": "calc(100vw - 12rem)",
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
