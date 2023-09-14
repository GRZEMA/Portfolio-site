import AboutSection from '@/components/AboutSection/AboutSection'
import WelcomeSection from '@/components/WelcomeSection/WelcomeSection'
import PortfolioSection from '@/components/PortfolioSection/PortfolioSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Dawid Krzemiński | Frontend Developer and UI/UX Enthusias',
	description:
		'Welcome to the home of Dawid Krzemiński, a passionate frontend developer known for creating engaging web experiences. Explore my portfolio and services.',
	icons: '/assets/logo-portfolio.png',
}

export default function Home() {
	return (
		<main className='pb-5 bg-background lg:pb-10 flex flex-col items-center text-text'>
			<WelcomeSection />
			<AboutSection />
			<PortfolioSection />
		</main>
	)
}
