'use client'

import Image from 'next/image'
import Button from '../../multi-page-components/UI/Button'
import { motion } from 'framer-motion'

const WelcomeSection = (): JSX.Element => {
	return (
		<section className='h-screen w-full bg-background pt-20 sm:pt-24 lg:pt-0 max-w-[1920px]'>
			<div className='wrapper flex flex-col h-full w-full items-center xl:items-end lg:flex-row'>
				<div className='img-box relative aspect-square h-full lg:max-h-[70%] xl:max-h-[90%] bg-darkGray rounded-xl lg:rounded-l-none xl:rounded-br-none'>
					<Image
						src='/assets/image-of-me.webp'
						alt='Image of Dawid Krzemiński'
						fill
						loading='eager'
						priority={true}
					/>
				</div>
				<motion.div
					className='welcome flex flex-col mt-6 text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl justify-around h-full items-center lg:h-4/5 lg:items-center lg:w-1/2 xl:justify-around xl:pb-12 pr-4 pl-4 xl:w-full'
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}>
					<div className='text-box flex flex-col space-y-6 lg:space-y-10 text-center'>
						<h1>
							I&apos;M{' '}
							<span className='text-3xl lg:text-5xl 2xl:text-7xl font-cormorant text-customYellow'>
								Dawid Krzemiński
							</span>
						</h1>
						<p>Your Friendly Frontend Developer</p>
						<p>
							Crafting Seamless User <br />
							Experiences Through Code
						</p>
					</div>
					<Button size='2xl' href='#about' customClasses='animate-bounce'>
						Let&apos;s get acquainted!
					</Button>
				</motion.div>
			</div>
		</section>
	)
}

export default WelcomeSection
