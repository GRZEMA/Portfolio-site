import Image from 'next/image'

const Logo: React.FC = () => {
	return (
		<div className='logo flex items-center'>
			<div className='image-box relative w-8 h-8 sm:h-10 sm:w-10'>
				<Image src='/assets/logo-portfolio.png' alt='' fill />
			</div>
			<p className='font-roboto pl-2 text-xl sm:text-2xl text-customYellow font-bold'>
				Dawid Krzemiński
			</p>
		</div>
	)
}

export default Logo
