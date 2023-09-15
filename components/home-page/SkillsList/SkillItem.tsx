import Image from 'next/image'
import { motion } from 'framer-motion'

interface SkillItemProps {
	images: string[] | null
	name: string
}

const SkillItem = ({ images, name }: SkillItemProps): JSX.Element => {
	return (
		<motion.li
			initial={{ opacity: 0, scale: 0.7 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true, margin: '-50px' }}
			className='flex flex-col items-center justify-center bg-customGray w-[100px] h-[100px] rounded-xl sm:w-[130px] sm:h-[130px] md:p-2 lg:w-[180px] lg:h-[180px] xl:w-[220px] xl:h-[220px] 2xl:w-[250px] 2xl:h-[250px] hover:bg-lightGray transition-colors duration-300'>
			{images !== null ? (
				images.length > 1 ? (
					<div className='w-4/5 h-3/5 flex items-center justify-center gap-2'>
						<div className='image relative w-1/2 h-full'>
							<Image src={images[0]} alt={name} fill />{' '}
						</div>
						<div className='image relative w-1/2 h-full'>
							<Image src={images[1]} alt={name} fill />
						</div>
					</div>
				) : (
					<div className='w-3/5 h-3/5 flex items-center justify-center gap-2'>
						<div className='image relative w-full h-full'>
							<Image src={images[0]} alt={name} fill />
						</div>
					</div>
				)
			) : null}
			<div>
				<p className='md:p-2 text-sm sm:text-base lg:text-xl xl:text-2xl'>
					{name}
				</p>
			</div>
		</motion.li>
	)
}

export default SkillItem
