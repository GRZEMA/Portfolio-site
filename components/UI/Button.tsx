import Link from 'next/link'

interface ButtonProps {
	children: React.ReactNode
	href?: string
	action?: () => void
	size: string
	customClasses?: string
}

const Button = ({
	children,
	size,
	href,
	action,
	customClasses,
}: ButtonProps): JSX.Element => {
	let classes
	if (size === 'xl') {
		classes =
			'text-sm sm:text-base md:text-xl lg:text-2xl pt-2 pb-2 pr-4 pl-4 lg:pt-3 lg:pb-3 lg:pr-6 lg:pl-6 xl:text-3xl xl:pt-4 xl:pb-4 font-bold rounded-lg'
	}
	if (size === '2xl') {
		classes =
			'text-2xl sm:text-3xl pt-2 pb-2 pr-4 pl-4 lg:pt-4 lg:pb-4 lg:pr-8 lg:pl-8 xl:text-4xl rounded-xl'
	}

	if (href) {
		return (
			<Link
				href={href}
				className={
					classes +
					' bg-customYellow max-w-fit text-background w-full xl:justify-self-end before:content-[""] after:content-[""] before:w-[120%] after:w-[120%] before:h-1/2 after:h-1/2 before:absolute after:absolute before:top-0 after:bottom-0 before:bg-[#C6AF60] after:bg-[#C6AF60] before:left-full after:right-full overflow-hidden relative hover:before:-translate-x-full hover:after:translate-x-full before:transition-transform after:transition-transform before:duration-500 after:duration-500 font-normal ' +
					customClasses
				}>
				<span className='z-10 relative'>{children}</span>
			</Link>
		)
	}

	if (action) {
		return (
			<button
				onClick={action}
				className={
					classes +
					' bg-customYellow max-w-fit text-background w-full xl:justify-self-end before:content-[""] after:content-[""] before:w-full after:w-full before:h-1/2 after:h-1/2 before:absolute after:absolute before:top-0 after:bottom-0 before:bg-[#C6AF60] after:bg-[#C6AF60] before:left-full after:right-full overflow-hidden relative hover:before:-translate-x-full hover:after:translate-x-full before:transition-transform after:transition-transform before:duration-500 after:duration-500 font-normal ' +
					customClasses
				}>
				<span className='z-10 relative'>{children}</span>
			</button>
		)
	}

	return <p>No action or href provided</p>
}

export default Button
