import Link from 'next/link'
import SectionHeading from '../UI/SectionHeading'
import SectionSubHeading from '../UI/SectionSubHeading'
import { ProjectModel } from '@/app/portfolio/page'
import { motion } from 'framer-motion'
import Image from 'next/image'
import TextWithSquares from '../UI/TextWithSquares'
import Button from '../UI/Button'

interface ProjectItemProps {
	project: ProjectModel
}

const ProjectSection = ({ project }: ProjectItemProps): JSX.Element => {
	return (
		<section className='flex flex-col w-full pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 2xl:pt-16'>
			<SectionHeading id={project.id}>{project.name}</SectionHeading>
			<div className='container max-w-[1400px] flex flex-col items-center pt-8 2xl:pt-8 space-y-6 md:space-y-8 lg:space-y-10 px-4 pl-8 pb-6 text-text'>
				<SectionSubHeading>Quick description</SectionSubHeading>
				<motion.p
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='self-start max-w-prose 2xl:max-w-[85ch] sm:text-2xl lg:text-3xl xl:text-4xl'>
					{project.quickDescription}
				</motion.p>
				<SectionSubHeading>Features</SectionSubHeading>
				<ul className='self-start space-y-2 md:space-y-4 max-w-prose 2xl:max-w-[85ch] sm:text-2xl lg:text-3xl xl:text-4xl'>
					{project.featuresList.map((feature) => (
						<motion.li
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className='relative before:absolute before:w-2 before:h-2 before:rotate-45 before:bg-text before:left-0 pl-4 md:pl-6 before:top-1/2 before:-translate-y-1/2'
							key={feature}>
							{feature}
						</motion.li>
					))}
				</ul>
				<SectionSubHeading>Tech Stack</SectionSubHeading>
				<ul className='self-start space-y-2 md:space-y-4 max-w-prose 2xl:max-w-[85ch] sm:text-2xl lg:text-3xl xl:text-4xl'>
					{project.stackList.map((stack) => (
						<motion.li
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className='relative before:absolute before:w-2 before:h-2 before:rotate-45 before:bg-text before:left-0 pl-4 md:pl-6 before:top-1/2 before:-translate-y-1/2'
							key={stack}>
							{stack}
						</motion.li>
					))}
				</ul>
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
							viewport={{ once: true }}
							className='relative flex items-center justify-center w-full max-w-full aspect-[7/4]'
							key={image}>
							<Image
								src={image}
								alt='Image from live meetYaa Events site'
								fill
							/>
						</motion.li>
					))}
				</ul>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='flex flex-col items-center text-center space-y-4 md:space-y-8 py-4 md:py-8'>
					<TextWithSquares classnames='font-dancing text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>
						Stay updated! More projects comes soon!
					</TextWithSquares>
					<p className='text-xl sm:text-2xl lg:text-3xl'>
						Did you like my projects and <br />
						wanna collaborate?
					</p>
					<Button href='/contact' size='2xl'>
						Contact me Here!
					</Button>
				</motion.div>
			</div>
		</section>
	)
}

export default ProjectSection
