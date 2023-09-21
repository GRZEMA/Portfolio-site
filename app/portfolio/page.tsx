import HeroSection from '@/components/multi-page-components/HeroSection/HeroSection'
import ProjectSection from '@/components/portfolio-page/ProjectList/ProjectSection'
import { Metadata } from 'next'

export interface ProjectModel {
	name: string
	quickDescription: string
	featuresList: { text: string }[]
	stackList: { text: string }[]
	liveUrl: string
	githubUrl: string
	id: string
	images: { url: string; title: string }[]
}

export const metadata: Metadata = {
	title: "Dawid Krzemiński's Portfolio | Frontend Developer's Showcase",
	description:
		"Explore Dawid Krzemiński's portfolio, featuring a collection of stunning frontend development projects. Discover the skills and creativity behind each creation.",
}

const projects: ProjectModel[] = [
	{
		name: 'meetYaa Events',
		id: 'meetYaaEvents',
		quickDescription:
			"meetYaa Events is a web application built with Next.js and TypeScript for managing and organizing events. This platform allows users to create events, register attendees, signup for events, and more. It's a comprehensive solution for event organizers and attendees alike.",
		featuresList: [
			{ text: 'User authentication and profiles' },
			{ text: 'Event creation with customizable details' },
			{ text: 'Event registration and ticket purchase' },
			{ text: 'Event search and filtering' },
			{ text: "Organizers' event management possibility" },
		],
		stackList: [
			{ text: 'Next.js: Server-side rendering, routing, and API integration' },
			{ text: 'TypeScript: Enhanced type safety and readability' },
			{ text: 'SCSS modules: Efficient and responsive styling' },
			{ text: 'Database: Store user and event data (MongoDB)' },
			{ text: 'Next-Auth: sign-up, log-in, and profile management' },
		],
		liveUrl: 'https://meet-yaa-project.vercel.app/',
		githubUrl: 'https://github.com/GRZEMA/meetYaa-project',
		images: [
			{
				url: '/assets/meetYaa/image1.png',
				title: 'Home Page',
			},
			{
				url: '/assets/meetYaa/image2.png',
				title: 'Featured Events',
			},
			{
				url: '/assets/meetYaa/image3.png',
				title: 'All Events Page',
			},
			{
				url: '/assets/meetYaa/image4.png',
				title: 'All Events Filtered',
			},
			{
				url: '/assets/meetYaa/image5.png',
				title: 'Login Page',
			},
			{
				url: '/assets/meetYaa/image6.png',
				title: 'Single Event Page',
			},
			{
				url: '/assets/meetYaa/image7.png',
				title: 'Event Creation Page',
			},
			{
				url: '/assets/meetYaa/image8.png',
				title: 'User Profile Page',
			},
			{
				url: '/assets/meetYaa/image9.png',
				title: 'Event Management Modal',
			},
		],
	},
]

const PortfolioPage = (): JSX.Element => {
	return (
		<main className='pb-5 bg-background lg:pb-10 text-text'>
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
