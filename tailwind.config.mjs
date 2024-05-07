/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Josefin Sans, sans-serif' ]
		},
		extend: {
			colors: {
				colorRose: '#e38476',
				colorBlue: '#58a1c6',
				colorBlueDark: '#28338b',
				colorBeig: '#ffcd9c',
				colorPurple: '#15002e'

			}
		},
	},
	plugins: [],
}
