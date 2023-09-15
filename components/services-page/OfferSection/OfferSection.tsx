'use client'

import SectionHeading from '@/components/multi-page-components/UI/SectionHeading'
import OfferImagesList from './OfferImagesList'
import TextWithSquares from '../../multi-page-components/UI/TextWithSquares'

const imagesData = [
	{
		img: '/assets/web-development.png',
		title: 'Web Development',
		description:
			'Create visually appealing and responsive websites using HTML, CSS, and JavaScript. Offer expertise in building websites from scratch or improving existing ones.',
	},
	{
		img: '/assets/modern-frameworks.png',
		title: 'Modern Frameworks',
		description:
			'Specialize in popular frontend frameworks like React or / and Next.Js to build dynamic and interactive web applications.',
	},
	{
		img: '/assets/responsive-design.png',
		title: 'Responsive Design',
		description:
			'Ensure that websites and web apps adapt gracefully to different screen sizes and devices, enhancing accessibility and user experience.',
	},
	{
		img: '/assets/seo-optimization.png',
		title: 'SEO Optimization',
		description:
			' Follow SEO Trends: Stay current with search engine optimization techniques',
	},
	{
		img: '/assets/database-integration.png',
		title: 'Database Integration',
		description:
			' Unlock Seamless Data Integration. Harness the power of evolving database technologies for efficient and dynamic data management.',
	},
	{
		img: '/assets/web-animations.png',
		title: 'Web Animations',
		description:
			' Create engaging animations and transitions to enhance user interaction and improve the overall user experience.',
	},
]

const OfferSection = (): JSX.Element => {
	return (
		<section className='h-full w-full pt-6 pb-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 2xl:pt-16 max-w-[1920px]'>
			<SectionHeading id='offer'>Offer</SectionHeading>
			<div className='container max-w-[1400px] flex flex-col items-center pt-12 md:pt-20 space-y-6 md:space-y-8 lg:space-y-10 px-4 pl-8 pb-6 text-text'>
				<OfferImagesList imagesData={imagesData} />
				<TextWithSquares classnames='font-dancing text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl max-w-[80%] md:max-w-[60%]'>
					At the heart of every successful project is the right collaborator.
					Here&apos;s why I stand out
				</TextWithSquares>
			</div>
		</section>
	)
}

export default OfferSection
