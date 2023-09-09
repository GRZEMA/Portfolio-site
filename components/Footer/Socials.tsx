import Image from 'next/image'

const Socials = (): JSX.Element => {
	const socialClasses = 'Social relative w-10 h-10 sm:w-12 sm:h-12'
	return (
		<div className='flex gap-4 sm:gap-8 bg-background p-4 sm:pl-8 sm:pr-8 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
			<div className={socialClasses}>
				<Image src='./assets/facebook.svg' alt='' fill />
			</div>
			<div className={socialClasses}>
				<Image src='./assets/twitter.svg' alt='' fill />
			</div>
			<div className={socialClasses}>
				<Image src='./assets/linkedin-in.svg' alt='' fill />
			</div>
			<div className={socialClasses}>
				<Image src='./assets/whatsapp.svg' alt='' fill />
			</div>
		</div>
	)
}

export default Socials
