import { motion } from 'framer-motion'
import Image from 'next/image'

interface OfferImagesListProps {
	imagesData: { img: string; title: string; description: string }[]
}

const OfferImagesList = ({ imagesData }: OfferImagesListProps) => {
	return (
		<ul className='grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-16 px-4'>
			{imagesData.map((image) => (
				<motion.li
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					className='relative flex items-center justify-center w-full max-w-full aspect-[7/5] group'
					key={image.title}>
					<motion.div className='front-card absolute inset-0 flex items-center justify-center font-cormorant font-bold text-2xl sm:text-4xl md:text-3xl lg:text-4xl 2xl:text-5xl asbolute opacity-100 group-hover:opacity-0 group-hover:-rotate-y-180 rotate-y-0 rounded-3xl overflow-hidden transition-all duration-1000'>
						<Image src={image.img} alt={image.title} fill />
						<h4 className='relative'>{image.title}</h4>
					</motion.div>
					<motion.div className='back-card absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:rotate-y-0 -rotate-y-180 bg-customGray rounded-3xl transition-all duration-1000 flex items-center justify-center p-12 text-base sm:text-3xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center'>
						{image.description}
					</motion.div>
				</motion.li>
			))}
		</ul>
	)
}

export default OfferImagesList
