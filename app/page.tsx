'use client'

import AboutSection from '@/components/AboutSection/AboutSection'
import HeroSection from '@/components/HeroSection/HeroSection'

export default function Home() {
	return (
		<main className='pb-5 bg-background lg:pb-10 flex flex-col items-center'>
			<HeroSection />
			<AboutSection />
		</main>
	)
}
