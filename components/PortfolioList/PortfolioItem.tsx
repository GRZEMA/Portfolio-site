import Image from 'next/image'
import Button from '../UI/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

interface PortfolioItemProps {
	name: string
	id: string
	briefDescription: string
	image: string
}

const PortfolioItem = ({
	briefDescription,
	id,
	name,
	image,
}: PortfolioItemProps): JSX.Element => {
	return (
		<motion.li
			initial={{ scale: 0.7, opacity: 0 }}
			whileInView={{ scale: 1, opacity: 1 }}
			viewport={{ once: true }}
			className='rounded-2xl bg-customGray h-fit w-full text-text'>
			<div className='h-1/2 p-6 sm:p-8 md:p-9 lg:p-10 xl:p-11 2xl:p-12 rounded-2xl overflow-hidden'>
				<div className='relative w-full aspect-[600/450]'>
					<Image src={image} alt={name} fill className='rounded-xl' />
				</div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-100px' }}
				className='flex flex-col items-center text-center h-1/2 pb-4 sm:pb-6 md:pb-7 lg:pb-8 xl:pb-9 2xl:pb-10 2xl:text-4xl xl:text-3xl md:text-2xl text-xl sm:text-2xl pl-4 pr-4 xl:pr-6 xl:pl-6 max-w-prose gap-4 2xl:gap-14 xl:gap-12 lg:gap-10 sm:gap-8'>
				<h4 className='font-bold mt-4'>{name}</h4>
				<p>{briefDescription}</p>
				<Button size='xl' href={`/about/#${id}`}>
					More Details <FontAwesomeIcon icon={faArrowRight} size='xs' />
				</Button>
			</motion.div>
		</motion.li>
	)
}

export default PortfolioItem
