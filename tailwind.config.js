import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content(),
  ],
  theme: {
		extend: {
			colors: {
				color: {
					primary: "#1A1621",
					secondary: "#7953B3",
					light: "#ffffff",
					dark: "#757379",
					red: "#E74C3C",
					green: "#2ECC71",
				},
			},
		},
	},
  plugins: [flowbite.plugin(),],
}

