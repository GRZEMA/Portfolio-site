import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '../UI/Button'

interface HeroSectionProps {
	title: string
	imageUrl: string
}

const HeroSection = ({ imageUrl, title }: HeroSectionProps): JSX.Element => {
	return (
		<section className='h-screen w-full bg-background pt-20 sm:pt-24 lg:pt-0 max-w-[1920px] relative flex items-center justify-center flex-col'>
			<Image
				src={imageUrl}
				alt={title}
				fill
				style={{ objectFit: 'cover' }}
				quality={100}
			/>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				className='relative px-12 py-8 sm:px-24 sm:py-16 md:px-36 md:py-[6rem] before:content-[""] before:absolute before:top-0 before:left-0 before:w-1/2 before:h-1/2 before:z-20 before:rounded-tl-xl sm:before:rounded-tl-2xl md:before:rounded-tl-3xl before:border-t-[3px] before:border-l-[3px] md:before:border-t-[5px] md:before:border-l-[5px] before:border-customYellow after:absolute after:bottom-0 after:right-0  after:w-1/2 after:h-1/2 after:z-20 after:rounded-br-xl sm:after:rounded-br-2xl md:after:rounded-br-3xl after:border-r-[3px] after:border-b-[3px] md:after:border-b-[5px] md:after:border-r-[5px] after:border-customYellow'>
				<h1 className='z-30 relative text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-cormorant text-customYellow'>
					{title}
				</h1>
			</motion.div>
		</section>
	)
}

export default HeroSection
