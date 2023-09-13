'use client'

import HeroSection from '@/components/HeroSection/HeroSection'
import OfferSection from '@/components/OfferSection/OfferSection'

const ServicesPage = () => {
	return (
		<main className='pb-5 bg-background lg:pb-10'>
			<HeroSection
				title='Services'
				imageUrl='/assets/servicesBg.png'
				linkId='offer'
			/>
			<OfferSection />
		</main>
	)
}

export default ServicesPage
