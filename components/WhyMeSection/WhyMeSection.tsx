'use client'

import AnimatedList from '../ProjectList/AnimatedList'
import SectionHeading from '../UI/SectionHeading'

const listItems = [
	{
		span: 'Expertise:',
		text: 'With a strong foundation in frontend development, I bring technical prowess to transform ideas into captivating digital experiences.',
	},
	{
		span: 'Innovation:',
		text: 'My passion for staying at the cutting edge of technology ensures your projects benefit from the latest trends and best practices.',
	},
	{
		span: 'User-Centric Approach:',
		text: 'I prioritize the user experience, crafting interfaces that are intuitive, accessible, and engaging.',
	},
	{
		span: 'Effective Communication:',
		text: "Open and transparent communication means you're always in the loop, from project inception to delivery.",
	},
	{
		span: 'Problem Solver:',
		text: 'I thrive on challenges, tackling issues head-on to find creative solutions and optimize performance.',
	},
	{
		span: 'Timely Delivery:',
		text: 'Punctuality is my commitment. Your project milestones will be met as planned, every time.',
	},
	{
		span: 'Collaborative Spirit:',
		text: 'Your ideas and feedback are valued. I work closely with you to turn your vision into reality.',
	},
	{
		span: 'Quality Assurance:',
		text: 'Rigorous testing and code reviews ensure the highest quality results, minimizing errors and maximizing efficiency.',
	},
	{
		span: 'Adaptability:',
		text: 'The digital landscape evolves, and I evolve with it. Count on me to keep your projects in sync with industry shifts.',
	},
]

const WhyMeSection = () => {
	return (
		<section className='h-full w-full pb-6 max-w-[1920px]'>
			<SectionHeading id='offer'>Why me?</SectionHeading>
			<div className='container max-w-[1400px] flex flex-col items-center pt-12 md:pt-20 space-y-6 md:space-y-8 lg:space-y-10 px-4 pl-8 pb-6 text-text'>
				<AnimatedList items={listItems} />
			</div>
		</section>
	)
}

export default WhyMeSection
