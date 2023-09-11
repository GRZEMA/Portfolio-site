import { motion } from 'framer-motion'

interface TextWithSquaresProps {
	children: React.ReactNode
	classnames: string
}

const TextWithSquares = ({
	children,
	classnames,
}: TextWithSquaresProps): JSX.Element => {
	return (
		<motion.p
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			className={
				classnames +
				' before:content-[""] after:content-[""] relative before:absolute after:absolute before:-left-5 before:top-1/2 after:top-1/2 after:-right-5 flex flex-col before:h-2 after:h-2 before:w-2 after:w-2 lg:before:w-3 lg:before:h-3 lg:before:-left-8 lg:after:w-3 lg:after:h-3 lg:after:-right-8 before:bg-text after:bg-text before:-translate-y-1/2 after:-translate-y-1/2 before:rotate-45 after:rotate-45'
			}>
			{children}
		</motion.p>
	)
}

export default TextWithSquares
