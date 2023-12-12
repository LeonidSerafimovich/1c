import Link from 'next/link'

interface NavLinkProps {
	href: string
	text: string
}

const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
	return (
		<li className=' lg:mr-2 text-white text-[19px]  hover:text-[#B39C39] duration-150'>
			<Link href={href}>{text}</Link>
		</li>
	)
}

export default NavLink
