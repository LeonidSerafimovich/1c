import Link from 'next/link'

interface NavLinkProps {
	href: string
	text: string
}

const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
	return (
		<li className=' lg:mr-4 text-white text-[19px] hover:text-red-600 duration-150'>
			<Link href={href}>{text}</Link>
		</li>
	)
}

export default NavLink
