import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../Logo/Logo'
import Link from 'next/link'

interface DesktopNavProps {
	openNav: () => void
}

const DesktopNav = ({ openNav }: DesktopNavProps): JSX.Element => {
	return (
		<div className='nav p-6 w-full flex items-center justify-between'>
			<Logo />
			<ul className='hidden md:flex gap-8 text-xl'>
				<li className='hover:text-customYellow transition-colors duration-300'>
					<Link href='/'>Home</Link>
				</li>
				<li className='hover:text-customYellow transition-colors duration-300'>
					<Link href='/#about'>About</Link>
				</li>
				<li className='hover:text-customYellow transition-colors duration-300'>
					<Link href='/portfolio'>Portfolio</Link>
				</li>
				<li className='hover:text-customYellow transition-colors duration-300'>
					<Link href='/services'>Services</Link>
				</li>
				<li className='hover:text-customYellow transition-colors duration-300'>
					<Link href='/contact'>Contact</Link>
				</li>
			</ul>
			<button
				className='burger fixed p-6 top-0 right-0 md:hidden cursor-pointer'
				onClick={openNav}>
				<FontAwesomeIcon
					icon={faBars}
					className='text-customYellow h-8 w-8 sm:h-10 sm:w-10'
				/>
			</button>
		</div>
	)
}

export default DesktopNav
