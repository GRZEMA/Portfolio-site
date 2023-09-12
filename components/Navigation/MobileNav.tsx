import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

interface MobileNavProps {
	closeNav: () => void
}

const MobileNav = ({ closeNav }: MobileNavProps): JSX.Element => {
	const liClasses =
		'hover:text-customYellow transition-colors duration-300 before:content-[""] relative before:absolute before:w-1 before:h-0 before:-left-4 hover:before:h-full before:bg-customYellow before:transition-height before:bottom-1/2 before:translate-y-1/2'

	const closeNavHandler = (
		e: React.MouseEvent<HTMLUListElement, MouseEvent>
	) => {
		const target = e.target as HTMLElement

		if (target.tagName === 'A' || target.tagName === 'BUTTON') {
			closeNav()
		}
		return
	}

	return (
		<motion.div
			className='bg-background inset-0 fixed flex justify-center items-center'
			initial={{ x: '100%' }}
			animate={{ x: '0' }}
			exit={{ x: '100%' }}
			transition={{ type: 'just' }}>
			<ul className='text-4xl space-y-6' onClick={closeNavHandler}>
				<li className={liClasses}>
					<Link href='/'>Home</Link>
				</li>
				<li className={liClasses}>
					<Link href='/#about'>About</Link>
				</li>
				<li className={liClasses}>
					<Link href='/portfolio'>Portfolio</Link>
				</li>
				<li className={liClasses}>
					<Link href='/services'>Services</Link>
				</li>
				<li className={liClasses}>
					<Link href='/contact'>Contact</Link>
				</li>
			</ul>
			<motion.button
				className='close-icon fixed p-6 top-0 right-0'
				onClick={closeNav}
				initial={{ rotate: 0 }}
				animate={{ rotate: 360 }}
				transition={{ delay: 0.3 }}>
				<FontAwesomeIcon
					icon={faXmark}
					className='h-8 w-8 sm:h-10 sm:w-10 text-customYellow cursor-pointer'
				/>
			</motion.button>
		</motion.div>
	)
}

export default MobileNav
