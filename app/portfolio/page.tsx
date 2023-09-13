'use client'

import HeroSection from '@/components/HeroSection/HeroSection'
import ProjectSection from '@/components/ProjectList/ProjectSection'

export interface ProjectModel {
	name: string
	quickDescription: string
	featuresList: string[]
	stackList: string[]
	liveUrl: string
	githubUrl: string
	imagesUrl: string[]
	id: string
}

const projects: ProjectModel[] = [
	{
		name: 'meetYaa Events',
		id: 'meetYaaEvents',
		quickDescription:
			"meetYaa Events is a web application built with Next.js and TypeScript for managing and organizing events. This platform allows users to create events, register attendees, signup for events, and more. It's a comprehensive solution for event organizers and attendees alike.",
		featuresList: [
			'User authentication and profiles',
			'Event creation with customizable details',
			'Event registration and ticket purchase',
			'Event search and filtering',
			"Organizers' event management possibility",
		],
		stackList: [
			'Next.js: Server-side rendering, routing, and API integration',
			'TypeScript: Enhanced type safety and readability',
			'SCSS modules: Efficient and responsive styling',
			'Database: Store user and event data (MongoDB)',
			'Next-Auth: sign-up, log-in, and profile management',
		],
		liveUrl: 'https://meet-yaa-project.vercel.app/',
		githubUrl: 'https://github.com/GRZEMA/meetYaa-project',
		imagesUrl: [
			'/assets/meetYaa/image1.png',
			'/assets/meetYaa/image2.png',
			'/assets/meetYaa/image3.png',
			'/assets/meetYaa/image4.png',
			'/assets/meetYaa/image5.png',
			'/assets/meetYaa/image6.png',
			'/assets/meetYaa/image7.png',
			'/assets/meetYaa/image8.png',
			'/assets/meetYaa/image9.png',
		],
	},
]

const PortfolioPage = (): JSX.Element => {
	return (
		<main className='pb-5 bg-background lg:pb-10'>
			<HeroSection
				title='Portoflio'
				imageUrl='/assets/portfolioBg.jpg'
				linkId={projects[0].id}
			/>
			{projects.map((project) => (
				<ProjectSection project={project} key={project.name} />
			))}
		</main>
	)
}

export default PortfolioPage
