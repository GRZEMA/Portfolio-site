import { motion } from 'framer-motion'

const AnimatedList = ({ items }: { items: string[] }): JSX.Element => {
	return (
		<ul className='self-start space-y-2 md:space-y-4 max-w-prose 2xl:max-w-[85ch] sm:text-2xl lg:text-3xl xl:text-4xl'>
			{items.map((item) => (
				<motion.li
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					className='relative before:absolute before:w-2 before:h-2 before:rotate-45 before:bg-text before:left-0 pl-4 md:pl-6 before:top-1/2 before:-translate-y-1/2'
					key={item}>
					{item}
				</motion.li>
			))}
		</ul>
	)
}

export default AnimatedList
