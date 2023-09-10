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

	const scrollHandler = () => {
		const isMobile =
			!!navigator.userAgent.match(/iphone|android|blackberry/gi) || false
		const element = document.getElementById('about')!
		if (isMobile) {
			window.scrollBy({ top: element.offsetTop - 80 - window.scrollY })
		} else {
			window.scrollBy({ top: element.offsetTop - 112 - window.scrollY })
		}
	}

	return (
		<nav className='bg-background fixed top-0 w-full z-50'>
			<div className='container'>
				<DesktopNav openNav={openNav} scrollHandler={scrollHandler} />
			</div>
			<AnimatePresence>
				{isMobileOpen && (
					<MobileNav closeNav={closeNav} scrollHandler={scrollHandler} />
				)}
			</AnimatePresence>
		</nav>
	)
}

export default Navigation
