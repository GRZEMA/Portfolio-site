import PortfolioList from '../PortfolioList/PortfolioList'
import SectionHeading from '../UI/SectionHeading'

const PortfolioSection = (): JSX.Element => {
	return (
		<section className='h-full w-full min-h-screen pt-6 pb-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 2xl:pt-16 max-w-[1920px]'>
			<SectionHeading id='about'>Portfolio</SectionHeading>
			<div className='container'>
				<PortfolioList />
			</div>
		</section>
	)
}

export default PortfolioSection
