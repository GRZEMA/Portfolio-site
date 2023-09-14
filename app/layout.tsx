import './globals.css'
import {
	Roboto_Condensed,
	Cormorant_Garamond,
	Dancing_Script,
} from 'next/font/google'
import Navigation from './Navigation'
import Footer from '@/components/Footer/Footer'
import NextTopLoader from 'nextjs-toploader'
import { Metadata } from 'next'

const roboto_condensed = Roboto_Condensed({
	subsets: ['latin'],
	display: 'swap',
	weight: ['300', '400', '700'],
	variable: '--font-roboto-condensed',
})

const cormorant_garmond = Cormorant_Garamond({
	subsets: ['latin'],
	display: 'swap',
	weight: ['700', '400'],
	variable: '--font-cormorant-garmond',
})
const dancing_script = Dancing_Script({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
	variable: '--font-dancing-script',
})

export const metadata: Metadata = {
	title: 'Dawid Krzemiński | Frontend Developer and UI/UX Enthusias',
	description:
		'Welcome to the home of Dawid Krzemiński, a passionate frontend developer known for creating engaging web experiences. Explore my portfolio and services.',
	icons: '/assets/logo-portfolio.png',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='en'
			className={`${roboto_condensed.variable} ${dancing_script.variable} ${cormorant_garmond.variable} scroll-smooth`}>
			<body className='font-roboto font-extralight max-w-full bg-background'>
				<Navigation />
				<NextTopLoader color='#FAE69E' showSpinner={false} />
				{children}
				<Footer />
			</body>
		</html>
	)
}
