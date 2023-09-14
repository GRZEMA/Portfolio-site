'use client'

import SkillsList from '../SkillsList/SkillsList'
import AnimatedParagraph from '../UI/AnimatedParagraph'
import SectionHeading from '../UI/SectionHeading'
import SectionSubHeading from '../UI/SectionSubHeading'
import TextWithSquares from '../UI/TextWithSquares'

const AboutSection = (): JSX.Element => {
	return (
		<section className='h-full w-full min-h-screen pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 2xl:pt-16 max-w-[1920px]'>
			<SectionHeading id='about'>About</SectionHeading>
			<div className='container max-w-[1400px] p-4 flex flex-col items-center pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8 space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-14 2xl:space-y-16'>
				<AnimatedParagraph>
					Hello! I&apos;m a 20-year-old beginner frontend developer from Poland,
					and I&apos;m excited to share a bit about myself. I have a passion for
					crafting intuitive and visually appealing web interfaces that enhance
					the user experience. Over time, I have gained valuable experience
					working with a range of technologies, and I&apos;m continuously
					expanding my skill set.
				</AnimatedParagraph>
				<SectionSubHeading>My Skills</SectionSubHeading>
				<SkillsList />
				<TextWithSquares classnames='font-dancing text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>
					Passion Fuels Every Line of Code
				</TextWithSquares>
			</div>
		</section>
	)
}

export default AboutSection
