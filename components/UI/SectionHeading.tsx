interface SectionHeadingProps {
	children: React.ReactNode
	id?: string
}

const SectionHeading = ({ children, id }: SectionHeadingProps): JSX.Element => {
	return (
		<h2
			className='font-cormorant w-fit relative before:content-[""] before:bg-customYellow before:h-[3px] before:w-full before:absolute pl-10 pr-2 sm:pl-12 sm:pr-4 md:pl-20 xl:pl-52 xl:pr-6 before:-bottom-2 before:right-0 text-2xl text-customYellow font-bold sm:text-3xl md:text-4xl xl:text-5xl'
			id={id}>
			{children}
		</h2>
	)
}

export default SectionHeading
