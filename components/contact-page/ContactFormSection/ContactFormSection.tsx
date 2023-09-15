'use client'

import { FormEvent, useRef, useContext, useState } from 'react'
import Button from '../../multi-page-components/UI/Button'
import SectionHeading from '../../multi-page-components/UI/SectionHeading'
import { motion } from 'framer-motion'
import { ModalContext } from '@/app/store/modal-context'

const ContactFormSection = (): JSX.Element => {
	const [isLoading, setIsLoading] = useState(false)

	const firstNameRef = useRef<HTMLInputElement>(null)
	const lastNameRef = useRef<HTMLInputElement>(null)
	const emailRef = useRef<HTMLInputElement>(null)
	const phoneRef = useRef<HTMLInputElement>(null)
	const addressRef = useRef<HTMLInputElement>(null)
	const messageRef = useRef<HTMLTextAreaElement>(null)

	const modalCtx = useContext(ModalContext)

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

	const formSubmissionHandler = async (e: FormEvent) => {
		e.preventDefault()
		setIsLoading(true)
		const res = await fetch('/api/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName: firstNameRef.current?.value,
				lastName: lastNameRef.current?.value,
				email: emailRef.current?.value,
				phone: phoneRef.current?.value,
				address: addressRef.current?.value,
				message: messageRef.current?.value,
			}),
		})
		const data: { error?: string; data?: string } = await res.json()

		if (data.data) {
			setIsLoading(false)
			modalCtx.openModal(
				'Succesfully sent your email to Dawid Krzemiński!',
				'success'
			)
			firstNameRef.current!.value = ''
			lastNameRef.current!.value = ''
			emailRef.current!.value = ''
			phoneRef.current!.value = ''
			addressRef.current!.value = ''
			messageRef.current!.value = ''
			return
		} else if (data.error) {
			setIsLoading(false)
			modalCtx.openModal(data.error, 'error')
		}
	}

	return (
		<section className='flex flex-col w-full pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 2xl:pt-16'>
			<SectionHeading id='get-in-touch'>Get In Touch</SectionHeading>
			<div className='container max-w-[1400px] flex flex-col items-center space-y-6 md:space-y-8 lg:space-y-10 px-4 pl-8 pb-6 text-text pt-12 md:pt-20'>
				<motion.form
					initial={{ opacity: 0, x: -200 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					onSubmit={formSubmissionHandler}
					className='bg-customGray flex flex-col items-center p-10 sm:p-12 md:p-14 lg:p-16 xl:p-[4.5rem] rounded-lg w-full gap-5 sm:gap-7 md:gap-9 lg:gap-11 xl:gap-13 text-xl sm:text-2xl lg:text-3xl'>
					<div className='wrapper grid grid-cols-1 md:grid-cols-2 w-full gap-5 sm:gap-7 md:gap-9 lg:gap-11 xl:gap-13'>
						{inputsInWrapper.map((input) => (
							<motion.input
								initial={{ opacity: 0, x: -200 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								key={input.id}
								type={input.type}
								placeholder={input.placeholder}
								id={input.id}
								ref={input.ref}
								className={inputClasses}
							/>
						))}
					</div>
					<motion.input
						initial={{ opacity: 0, x: -200 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						type='text'
						placeholder='Address (optional)'
						className={inputClasses}
						ref={addressRef}
					/>
					<motion.textarea
						initial={{ opacity: 0, x: -200 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						id='message'
						placeholder='Type your message here'
						ref={messageRef}
						className={
							'max-w-full h-[150px] md:h-[200px] lg:h-[250px] ' + inputClasses
						}></motion.textarea>
					<Button
						size='2xl'
						type='submit'
						customClasses='!font-bold'
						disabled={isLoading}>
						{isLoading ? 'Sending...' : 'Submit'}
					</Button>
				</motion.form>
			</div>
		</section>
	)
}

export default ContactFormSection
