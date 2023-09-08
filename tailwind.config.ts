import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				roboto: ['var(--font-roboto-condensed)'],
				dancing: ['var(--font-dancing-script)'],
				cormorant: ['var(--font-cormorant-garmond)'],
			},
			colors: {
				customYellow: '#FAE69E',
				text: '#D9D9E3',
				background: '#202123',
				lightGray: '#6C7085',
				customGray: '#444654',
				darkGray: '#343541',
			},
			transitionProperty: {
				height: 'height',
			},
		},
	},
	plugins: [],
}
export default config
