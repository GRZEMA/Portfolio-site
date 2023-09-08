'use client'

import DesktopNav from '@/components/Navigation/DesktopNav'
import MobileNav from '@/components/Navigation/MobileNav'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const Navigation = (): JSX.Element => {
	const [isMobileOpen, setIsMobileOpen] = useState(false)

	const openNav = () => {
		setIsMobileOpen(true)
	}

	const closeNav = () => {
		setIsMobileOpen(false)
	}

	return (
		<nav className='bg-background'>
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
