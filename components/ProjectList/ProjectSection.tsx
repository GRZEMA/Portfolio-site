import Link from 'next/link'
import SectionHeading from '../UI/SectionHeading'
import SectionSubHeading from '../UI/SectionSubHeading'
import { ProjectModel } from '@/app/portfolio/page'
import { motion } from 'framer-motion'
import TextWithSquares from '../UI/TextWithSquares'
import Button from '../UI/Button'
import AnimatedList from './AnimatedList'
import ProjectImagesList from './ProjectImagesList'

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
				<AnimatedList items={project.featuresList} />
				<SectionSubHeading>Tech Stack</SectionSubHeading>
				<AnimatedList items={project.stackList} />
				<ProjectImagesList project={project} />
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
