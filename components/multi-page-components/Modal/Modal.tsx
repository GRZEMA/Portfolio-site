'use client'

import { ModalContext } from '@/app/store/modal-context'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import Button from '../UI/Button'

const Modal = (): JSX.Element => {
	const modalCtx = useContext(ModalContext)
	const headingColor =
		modalCtx.modalData.type === 'error' ? 'text-red-600' : 'text-green-600'

	return (
		<div
			className='fixed z-[9999] inset-0 bg-[rgb(0,0,0,.7)] flex items-center justify-center'
			onClick={modalCtx.closeModal}>
			<motion.div
				initial={{ scale: 0.2, opacity: 0, y: 200 }}
				animate={{ scale: 1, opacity: 1, y: 0 }}
				onClick={(e) => {
					e.stopPropagation()
				}}
				className='flex flex-col justify-center items-center max-w-[80%] sm:max-w-prose gap-10 bg-customGray p-8 rounded-3xl text-center'>
				<h2
					className={
						'text-2xl font-bold sm:text-3xl md:text-4xl xl:text-5xl ' +
						headingColor
					}>
					{modalCtx.modalData.type === 'error' ? 'Error!' : 'Success!'}
				</h2>
				<p className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl'>
					{modalCtx.modalData.message}
				</p>
				<Button size='xl' action={modalCtx.closeModal}>
					Close
				</Button>
			</motion.div>
		</div>
	)
}

export default Modal
