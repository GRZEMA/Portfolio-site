import Link from 'next/link'

interface ButtonProps {
	children: React.ReactNode
	href: string
	size: string
}

const Button = ({ children, size, href }: ButtonProps): JSX.Element => {
	let classes
	if (size === 'xl') {
		classes = 'text-2xl sm:text-3xl pt-2 pb-2 pr-4 pl-4'
	}
	if (size === '2xl') {
		classes =
			'text-2xl sm:text-3xl pt-2 pb-2 pr-4 pl-4 lg:pt-4 lg:pb-4 lg:pr-8 lg:pl-8 xl:text-4xl'
	}

	return (
		<Link
			href={href}
			className={
				classes +
				' rounded-xl bg-customYellow max-w-fit text-background font-normal w-full xl:justify-self-end'
			}>
			{children}
		</Link>
	)
}

export default Button
