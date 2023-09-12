'use client'

import DesktopNav from '@/components/Navigation/DesktopNav'
import MobileNav from '@/components/Navigation/MobileNav'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Navigation = (): JSX.Element => {
	const [isMobileOpen, setIsMobileOpen] = useState(false)
	const router = useRouter()

	const openNav = () => {
		setIsMobileOpen(true)
	}

	const closeNav = () => {
		setIsMobileOpen(false)
	}

	return (
		<nav className='bg-background fixed top-0 w-full z-50'>
			<div className='container'>
				<DesktopNav openNav={openNav} />
			</div>
			<AnimatePresence>
				{isMobileOpen && <MobileNav closeNav={closeNav} />}
			</AnimatePresence>
		</nav>
	)
}

export default Navigation
