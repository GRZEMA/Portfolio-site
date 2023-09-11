import PortfolioItem from './PortfolioItem'

export const portfolioItems = [
	{
		name: 'meetYaa Events',
		briefDescription:
			'A web application built with Next.js and TypeScript for managing and organizing events.',
		id: 'meetYaaEvents',
		image: '/assets/meetYaaEvents.png',
	},
]

const PortfolioList = (): JSX.Element => {
	return (
		<ul className='w-full p-6 mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-7 grid grid-cols-1 md:grid-cols-2 items-center'>
			{portfolioItems.map((item) => (
				<div key={item.id} className='flex items-center justify-center sm:p-4'>
					<PortfolioItem
						id={item.id}
						name={item.name}
						briefDescription={item.briefDescription}
						image={item.image}
					/>
				</div>
			))}
		</ul>
	)
}

export default PortfolioList
