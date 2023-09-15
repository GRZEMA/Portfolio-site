import ContactFormSection from '@/components/contact-page/ContactFormSection/ContactFormSection'
import FindMeThereSection from '@/components/contact-page/FindMeThereSection/FindMeThereSection'
import HeroSection from '@/components/multi-page-components/HeroSection/HeroSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Contact Dawid Krzemiński | Reach Out for Collaborations',
	description:
		'Get in touch with Dawid Krzemiński to discuss exciting collaboration opportunities. Contact me for frontend development, UI/UX design, and more.',
}

const ContactPage = () => {
	return (
		<main className='pb-5 bg-background lg:pb-10 text-text'>
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
