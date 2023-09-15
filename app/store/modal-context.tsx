'use client'

import { createContext, useState } from 'react'

export const ModalContext = createContext({
	modalOpen: false,
	openModal: (message: string, type: 'error' | 'success') => {},
	closeModal: () => {},
	modalData: { message: '', type: 'error' },
})

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [modalOpen, setModalOpen] = useState(false)
	const [modalData, setModalData] = useState<{
		message: string
		type: 'success' | 'error'
	}>({ message: '', type: 'error' })

	const openModal = (message: string, type: 'error' | 'success') => {
		setModalOpen(true)
		setModalData({ message, type })
	}

	const closeModal = () => {
		setModalOpen(false)
	}

	return (
		<ModalContext.Provider
			value={{ modalOpen, modalData, closeModal, openModal }}>
			{children}
		</ModalContext.Provider>
	)
}

export default ModalContextProvider
