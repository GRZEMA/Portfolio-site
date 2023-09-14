'use client'

import ContactFormSection from '@/components/ContactFormSection/ContactFormSection'
import FindMeThereSection from '@/components/FindMeThereSection/FindMeThereSection'
import HeroSection from '@/components/HeroSection/HeroSection'

const ContactPage = () => {
	return (
		<>
			<head>
				<title>Contact Dawid Krzemiński | Reach Out for Collaborations</title>
				<meta
					name='description'
					content='Get in touch with Dawid Krzemiński to discuss exciting collaboration opportunities. Contact me for frontend development, UI/UX design, and more.'
				/>
			</head>
			<main className='pb-5 bg-background lg:pb-10'>
				<HeroSection
					linkId='get-in-touch'
					title='Contact Me'
					imageUrl='/assets/contactBg.png'
				/>
				<ContactFormSection />
				<FindMeThereSection />
			</main>
		</>
	)
}

export default ContactPage
