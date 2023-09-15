import { motion } from 'framer-motion'

const SectionSubHeading = ({
	children,
}: {
	children: React.ReactNode
}): JSX.Element => {
	return (
		<motion.h3
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			className='font-cormorant  text-customYellow font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl'>
			{children}
		</motion.h3>
	)
}

export default SectionSubHeading
