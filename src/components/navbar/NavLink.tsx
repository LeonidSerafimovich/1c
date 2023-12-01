import Link from 'next/link'

interface NavLinkProps {
	href: string
	text: string
}

const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
	return (
		<li className='mr-4 lg:mr-4 text-black text-[19px] hover:text-red-600 duration-150'>
			<Link href={href}>{text}</Link>
		</li>
	)
}

export default NavLink
