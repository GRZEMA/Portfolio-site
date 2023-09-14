'use client'

import AnimatedList from '../ProjectList/AnimatedList'
import SectionHeading from '../UI/SectionHeading'
import TextWithSquares from '../UI/TextWithSquares'

const socials = [
	{ span: 'Email:', text: 'dawidkrzmnsk@gmail.com', email: true },
	{ span: 'Twitter:', text: 'https://twitter.com/GRZEMAA', link: true },
	{ span: 'WhatsApp:', text: 'https://wa.link/tfq2vf', link: true },
	{
		span: 'LinkedIn:',
		text: 'https://www.linkedin.com/in/dawid-krzemi%C5%84ski-108961209/',
		link: true,
	},
]

const FindMeThereSection = (): JSX.Element => {
	return (
		<section className='flex flex-col w-full pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 2xl:pt-16'>
			<SectionHeading id='find-me-there'>Find Me There!</SectionHeading>
			<div className='container max-w-[1400px] flex flex-col items-center space-y-6 md:space-y-8 lg:space-y-10 px-4 pl-8 pb-6 text-text pt-12 md:pt-20'>
				<AnimatedList items={socials} />
				<TextWithSquares classnames='font-dancing text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl max-w-[80%] md:max-w-[60%] py-8'>
					Eagerly Awaiting Your Reach – Let&apos;s Connect!
				</TextWithSquares>
			</div>
		</section>
	)
}

export default FindMeThereSection
