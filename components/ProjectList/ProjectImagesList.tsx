import { ProjectModel } from '@/app/portfolio/page'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const ProjectImagesList = ({
	project,
}: {
	project: ProjectModel
}): JSX.Element => {
	return (
		<ul className='grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-16 px-4'>
			<motion.li
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				className='flex items-center justify-center gap-1 text-customYellow'>
				<span className='text-text font-bold'>Live:</span>
				<Link href={project.liveUrl}>{project.name}</Link>
			</motion.li>
			<motion.li
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				className='flex items-center justify-center gap-1 text-customYellow'>
				<span className='text-text font-bold'>Code:</span>
				<Link href={project.githubUrl}>GitHub repository</Link>
			</motion.li>
			{project.imagesUrl.map((image) => (
				<motion.li
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					whileHover={{ scale: 1.05 }}
					viewport={{ once: true }}
					className='relative flex items-center justify-center w-full max-w-full aspect-[7/4]'
					key={image}>
					<Image src={image} alt='Image from live meetYaa Events site' fill />
				</motion.li>
			))}
		</ul>
	)
}

export default ProjectImagesList
