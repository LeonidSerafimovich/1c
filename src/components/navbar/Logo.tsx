import Link from 'next/link'
import onec from '../images/1cLogo.png'
import Image from 'next/image'
import { FC } from 'react'
import clsx from 'clsx'

interface ILogo {
	className?: string
}

const Logo: FC<ILogo> = ({ className }) => {
	return (
		<div className={clsx(className, 'relative w-[125px] h-[135px] mb-[75px]')}>
			<Link href='/'>
				<Image fill src={onec} alt={'logo'}></Image>
			</Link>
		</div>
	)
}

export default Logo
