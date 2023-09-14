import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../Logo/Logo'
import Link from 'next/link'

interface DesktopNavProps {
	openNav: () => void
}

const DesktopNav = ({ openNav }: DesktopNavProps): JSX.Element => {
	const pathname = usePathname()

	console.log(pathname)

	return (
		<div className='nav p-6 w-full flex items-center justify-between'>
			<Logo />
			<ul className='hidden md:flex gap-8 text-xl'>
				<li
					className={`hover:text-customYellow transition-colors duration-300 ${
						pathname === '/' && 'text-customYellow'
					}`}>
					<Link href='/'>Home</Link>
				</li>
				<li
					className={`hover:text-customYellow transition-colors duration-300 ${
						pathname === '/#about' && 'text-customYellow'
					}`}>
					<Link href='/#about'>About</Link>
				</li>
				<li
					className={`hover:text-customYellow transition-colors duration-300 ${
						pathname === '/portfolio' && 'text-customYellow'
					}`}>
					<Link href='/portfolio'>Portfolio</Link>
				</li>
				<li
					className={`hover:text-customYellow transition-colors duration-300 ${
						pathname === '/services' && 'text-customYellow'
					}`}>
					<Link href='/services'>Services</Link>
				</li>
				<li
					className={`hover:text-customYellow transition-colors duration-300 ${
						pathname === '/contact' && 'text-customYellow'
					}`}>
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
