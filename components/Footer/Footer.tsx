'use client'

import Link from 'next/link'
import Socials from './Socials'
import TextWithSquares from '../UI/TextWithSquares'
import { motion } from 'framer-motion'

const Footer = (): JSX.Element => {
	return (
		<footer className='w-full border-t-[3px] md:border-t-[5px] border-customYellow relative bg-background'>
			<Socials />
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, margin: '-100px' }}
				className='container max-w-prose w-full flex flex-col items-center justify-center text-xl sm:text-2xl lg:text-3xl text-center mt-10 space-y-4 pb-5 pr-5 pl-5'>
				<p>
					Feel free to contact me via my socials or{' '}
					<span className='text-customYellow font-bold'>
						<Link href='/contact'>here</Link>
					</span>
					!
				</p>
				<p>
					I&apos;m also available through my email:{' '}
					<span className='text-customYellow'>
						<Link href='mailto:dawidkrzmnsk@gmail.com'>
							dawidkrzmnsk@gmail.com
						</Link>
					</span>
				</p>
				<TextWithSquares classnames='font-cormorant'>
					<span>Thanks for scrolling and</span>
					<span className='uppercase font-bold'>have a nice day!</span>
				</TextWithSquares>
			</motion.div>
		</footer>
	)
}

export default Footer
