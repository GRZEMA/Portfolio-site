'use client'

import { useRef } from 'react'
import Button from '../UI/Button'
import SectionHeading from '../UI/SectionHeading'
import { motion } from 'framer-motion'

const ContactFormSection = (): JSX.Element => {
	const firstNameRef = useRef<HTMLInputElement>(null)
	const lastNameRef = useRef<HTMLInputElement>(null)
	const emailRef = useRef<HTMLInputElement>(null)
	const phoneRef = useRef<HTMLInputElement>(null)

	const inputsInWrapper = [
		{
			type: 'text',
			placeholder: 'First Name',
			id: 'first-name',
			ref: firstNameRef,
		},
		{
			type: 'text',
			placeholder: 'Last Name',
			id: 'last-name',
			ref: lastNameRef,
		},
		{ type: 'email', placeholder: 'Email', id: 'email', ref: emailRef },
		{
			type: 'number',
			placeholder: 'Phone (optional)',
			id: 'phone',
			ref: phoneRef,
		},
	]
	const inputClasses =
		'p-2 sm:p-3 md:p-[1rem] lg:p-[1.25rem] xl:p-[1.5rem] bg-lightGray font-normal rounded-md w-full'

	const formSubmissionHandler = () => {}

	return (
		<section className='flex flex-col w-full pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 2xl:pt-16'>
			<SectionHeading id='get-in-touch'>Get In Touch</SectionHeading>
			<div className='container max-w-[1400px] flex flex-col items-center space-y-6 md:space-y-8 lg:space-y-10 px-4 pl-8 pb-6 text-text pt-12 md:pt-20'>
				<form
					action=''
					className='bg-customGray flex flex-col items-center p-10 sm:p-12 md:p-14 lg:p-16 xl:p-[4.5rem] rounded-lg w-full gap-5 sm:gap-7 md:gap-9 lg:gap-11 xl:gap-13 text-xl sm:text-2xl lg:text-3xl'>
					<div className='wrapper grid grid-cols-1 md:grid-cols-2 w-full gap-5 sm:gap-7 md:gap-9 lg:gap-11 xl:gap-13'>
						{inputsInWrapper.map((input) => (
							<input
								key={input.id}
								type={input.type}
								placeholder={input.placeholder}
								id={input.id}
								ref={input.ref}
								className={inputClasses}
							/>
						))}
					</div>
					<input
						type='text'
						placeholder='Address (optional)'
						className={inputClasses}
					/>
					<textarea
						id='message'
						placeholder='Type your message here'
						className={
							'max-w-full h-[150px] md:h-[200px] lg:h-[250px] ' + inputClasses
						}></textarea>
					<Button
						size='2xl'
						action={formSubmissionHandler}
						customClasses='!font-bold'>
						Submit
					</Button>
				</form>
			</div>
		</section>
	)
}

export default ContactFormSection
