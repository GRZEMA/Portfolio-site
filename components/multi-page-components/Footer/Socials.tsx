import {
	faFacebook,
	faWhatsapp,
	faTwitter,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Socials = (): JSX.Element => {
	const socialClasses = 'Social relative w-10 h-10 sm:w-12 sm:h-12'
	return (
		<div className='flex gap-4 sm:gap-8 bg-background p-4 sm:pl-8 sm:pr-8 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
			<motion.div
				initial={{ y: 50, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}>
				<Link
					className={socialClasses}
					href='https://www.facebook.com/dawid.krzeminski.355/'
					target='_blank'>
					<FontAwesomeIcon
						icon={faFacebook}
						className='text-text text-4xl md:text-5xl hover:text-customYellow transition-all hover:scale-105 duration-300'
					/>
				</Link>
			</motion.div>
			<motion.div
				initial={{ y: 50, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.05 }}
				viewport={{ once: true }}>
				<Link
					className={socialClasses}
					href='https://twitter.com/GRZEMAA'
					target='_blank'>
					<FontAwesomeIcon
						icon={faTwitter}
						className='text-text text-4xl md:text-5xl hover:text-customYellow transition-all hover:scale-105 duration-300'
					/>
				</Link>
			</motion.div>
			<motion.div
				initial={{ y: 50, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.1 }}
				viewport={{ once: true }}>
				<Link
					className={socialClasses}
					href='https://www.linkedin.com/in/dawid-krzemi%C5%84ski-108961209/'
					target='_blank'>
					<FontAwesomeIcon
						icon={faLinkedin}
						className='text-text text-4xl md:text-5xl hover:text-customYellow transition-all hover:scale-105 duration-300'
					/>
				</Link>
			</motion.div>
			<motion.div
				initial={{ y: 50, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.15 }}
				viewport={{ once: true }}>
				<Link
					className={socialClasses}
					href='https://wa.link/wb9y7h'
					target='_blank'>
					<FontAwesomeIcon
						icon={faWhatsapp}
						className='text-text text-4xl md:text-5xl hover:text-customYellow transition-all hover:scale-105 duration-300'
					/>
				</Link>
			</motion.div>
		</div>
	)
}

export default Socials
