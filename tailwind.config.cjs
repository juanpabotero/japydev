/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	exclude: ['./src/content/blog/**/*.{md,mdx}'],
	theme: {
		extend: {},
	},
	plugins: [],
}
