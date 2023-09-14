'use client'

import ContactFormSection from '@/components/ContactFormSection/ContactFormSection'
import FindMeThereSection from '@/components/FindMeThereSection/FindMeThereSection'
import HeroSection from '@/components/HeroSection/HeroSection'

const ContactPage = () => {
	return (
		<main className='pb-5 bg-background lg:pb-10'>
			<HeroSection
				linkId='get-in-touch'
				title='Contact Me'
				imageUrl='/assets/contactBg.png'
			/>
			<ContactFormSection />
			<FindMeThereSection />
		</main>
	)
}

export default ContactPage
