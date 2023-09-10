import SectionHeading from '../UI/SectionHeading'

const AboutSection = (): JSX.Element => {
	return (
		<section className='h-full w-full min-h-screen pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 2xl:pt-16'>
			<SectionHeading id='about'>About</SectionHeading>
			<div className='container p-4 max-w-[1920px] flex flex-col items-center pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8 space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-14 2xl:space-y-16'>
				<p className='max-w-prose 2xl:max-w-[85ch] text-xl sm:text-2xl lg:text-3xl xl:text-4xl'>
					Hello! I&apos;m a 20-year-old beginner frontend developer from Poland,
					and I&apos;m excited to share a bit about myself. I have a passion for
					crafting intuitive and visually appealing web interfaces that enhance
					the user experience. Over time, I have gained valuable experience
					working with a range of technologies, and I&apos;m continuously
					expanding my skill set.
				</p>
				<h3 className='font-cormorant  text-customYellow font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl'>
					My Skills
				</h3>
			</div>
		</section>
	)
}

export default AboutSection
