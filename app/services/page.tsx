import ContactMeSection from '@/components/ContactMeSection/ContactMeSection'
import HeroSection from '@/components/HeroSection/HeroSection'
import OfferSection from '@/components/OfferSection/OfferSection'
import WhyMeSection from '@/components/WhyMeSection/WhyMeSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Services by Dawid Krzemiński | Frontend Development Expertise',
	description:
		'Discover the range of services offered by Dawid Krzemiński, a seasoned frontend developer. Elevate your web projects with expertise in HTML, CSS, JavaScript, and more.',
}

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
