'use client'

import ContactMeSection from '@/components/ContactMeSection/ContactMeSection'
import HeroSection from '@/components/HeroSection/HeroSection'
import OfferSection from '@/components/OfferSection/OfferSection'
import WhyMeSection from '@/components/WhyMeSection/WhyMeSection'

const ServicesPage = () => {
	return (
		<main className='pb-5 bg-background lg:pb-10'>
			<HeroSection
				title='Services'
				imageUrl='/assets/servicesBg.png'
				linkId='offer'
			/>
			<OfferSection />
			<WhyMeSection />
			<ContactMeSection />
		</main>
	)
}

export default ServicesPage
