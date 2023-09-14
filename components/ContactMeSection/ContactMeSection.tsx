'use client'

import AnimatedParagraph from '../UI/AnimatedParagraph'
import Button from '../UI/Button'
import TextWithSquares from '../UI/TextWithSquares'

const ContactMeSection = () => {
	return (
		<section className='h-full w-full pt-6 pb-6 max-w-[1920px]'>
			<div className='container max-w-[1400px] flex flex-col items-center space-y-6 md:space-y-8 lg:space-y-10 px-4 pl-8 pb-6 text-text text-center'>
				<TextWithSquares classnames='font-dancing text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl max-w-[80%] md:max-w-[60%]'>
					Choosing the right developer can make all the difference. Let&apos;s
					work together to bring your projects to life!
				</TextWithSquares>
				<AnimatedParagraph>
					Ready to Collaborate? Let&apos;s Inspire Together.
				</AnimatedParagraph>
				<Button size='2xl' href='/contact'>
					Contact Me Here!
				</Button>
			</div>
		</section>
	)
}

export default ContactMeSection
