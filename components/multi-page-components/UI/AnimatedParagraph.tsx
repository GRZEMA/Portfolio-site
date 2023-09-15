import { motion } from 'framer-motion'

const AnimatedParagraph = ({
	children,
}: {
	children: React.ReactNode
}): JSX.Element => {
	return (
		<motion.p
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			className='max-w-prose 2xl:max-w-[85ch] text-xl sm:text-2xl lg:text-3xl xl:text-4xl'>
			{children}
		</motion.p>
	)
}

export default AnimatedParagraph
