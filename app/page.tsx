'use client'

import AboutSection from '@/components/AboutSection/AboutSection'
import WelcomeSection from '@/components/WelcomeSection/WelcomeSection'
import PortfolioSection from '@/components/PortfolioSection/PortfolioSection'

export default function Home() {
	return (
		<main className='pb-5 bg-background lg:pb-10 flex flex-col items-center'>
			<WelcomeSection />
			<AboutSection />
			<PortfolioSection />
		</main>
	)
}
