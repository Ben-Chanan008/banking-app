/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,tsx,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'sans-serif']
			},
			gridTemplateColumns: {
				'50/1/1': '50px 2fr 1fr',
				'3/1': '2.3fr 1fr'
			}
			// borderBottom: {
			//   '1':
			// }
		},
	},
	plugins: [],
}

