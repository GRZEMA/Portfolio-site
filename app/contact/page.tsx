import HeroSection from '@/components/HeroSection/HeroSection'

const ContactPage = () => {
	return (
		<main className='pb-5 bg-background lg:pb-10'>
			<HeroSection
				linkId='get-in-touch'
				title='Contact Me'
				imageUrl='/assets/contactBg.png'
			/>
		</main>
	)
}

export default ContactPage
