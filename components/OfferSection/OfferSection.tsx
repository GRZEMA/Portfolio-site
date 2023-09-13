import SectionHeading from '@/components/UI/SectionHeading'
import OfferImagesList from './OfferImagesList'

const imagesData = [
	{
		img: '/assets/offerImages/image1.png',
		title: 'Web Development',
		description:
			'Create visually appealing and responsive websites using HTML, CSS, and JavaScript. Offer expertise in building websites from scratch or improving existing ones.',
	},
	{
		img: '/assets/offerImages/image2.png',
		title: 'Modern Frameworks',
		description:
			'Specialize in popular frontend frameworks like React or / and Next.Js to build dynamic and interactive web applications.',
	},
	{
		img: '/assets/offerImages/image3.png',
		title: 'Responsive Design',
		description:
			'Ensure that websites and web apps adapt gracefully to different screen sizes and devices, enhancing accessibility and user experience.',
	},
	{
		img: '/assets/offerImages/image4.png',
		title: 'SEO Optimization',
		description:
			' Follow SEO Trends: Stay current with search engine optimization techniques',
	},
	{
		img: '/assets/offerImages/image5.png',
		title: 'Database Integration',
		description:
			' Unlock Seamless Data Integration. Harness the power of evolving database technologies for efficient and dynamic data management.',
	},
	{
		img: '/assets/offerImages/image6.png',
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
			</div>
		</section>
	)
}

export default OfferSection
