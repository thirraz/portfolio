/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		colors: {
			"purple-950": "#050012",
			"purple-900": "#110D1D",
			"purple-700": "#0B0028",
			"purple-500": "#6243B4",
			"pink-400": "#EC86EE",
			white: "#f0f0f0",
			black: "#161616",
			gray: "#9E9E9E",
			"gray-900": "#252525",
			"gray-950": "#110D1D"
		},
		fontFamily: {
			serif: "'Source Serif 4', serif",
			sans: "'Nunito Sans', sans-serif"
		},
		extend: {
			keyframes: {
				"border-spin": {
					"100%": {
						transform: "rotate(-360deg)"
					}
				},
				"move-text": {
					"100%": {
						transform: "translateX(-50%)"
					}
				}
			},
			animation: {
				"border-spin": "border-spin 9s linear infinite",
				marquee: "move-text 7s linear infinite"
			}
		}
	},
	plugins: []
}
