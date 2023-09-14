import { motion } from 'framer-motion'

interface AnimatedListProps {
	items: { text: string; span?: string; link?: boolean; email?: boolean }[]
}

const AnimatedList = ({ items }: AnimatedListProps): JSX.Element => {
	return (
		<ul className='self-start space-y-2 md:space-y-4 lg:space-y-6 max-w-prose 2xl:max-w-[85ch] sm:text-2xl lg:text-3xl xl:text-4xl'>
			{items.map((item) => (
				<motion.li
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					className='relative before:absolute before:w-2 before:h-2 md:before:h-3 md:before:w-3 before:rotate-45 before:bg-text before:left-0 pl-4 md:pl-8 before:top-1/2 before:-translate-y-1/2 hover:text-customYellow transition-colors duration-300'
					key={item.span ? item.span : item.text}>
					{item.span ? (
						<span className='font-bold text-customYellow'>{item.span} </span>
					) : null}
					{item.link ? (
						<a href={item.text} target='_blank'>
							{item.text}
						</a>
					) : item.email ? (
						<a href={'mailto:' + item.text} target='_blank'>
							{item.text}
						</a>
					) : (
						item.text
					)}
				</motion.li>
			))}
		</ul>
	)
}

export default AnimatedList
