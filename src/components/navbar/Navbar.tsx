'use client'

import Link from 'next/link'
import NavLink from './NavLink'
import LoginButton from './LoginButton'

export default function Navbar() {
	return (
		<header className='bg-[#14344C] fixed top-0  w-full ease-in left-0 z-50 '>
			<nav className='max-w-[1366px] mx-auto h-[60px] flex justify-between items-center mt-0 '>
				<Link href={'/'}>
					<div className='text-lg font-bold text-white duration-150 hover:text-[#B39C39]'>
						Консалтинговая группа "Портал"
					</div>
				</Link>
				<ul className=' text-gray-200 normal-case items-center md:flex  '>
					<div className=''>
						<NavLink href='#about' text='О компании' />
					</div>
					<div className=''>
						<NavLink href='#apps' text='Приложения' />
					</div>
					<div className=''>
						<NavLink href='#services' text='Услуги 1С:БО' />
					</div>
					<div className=''>
						<NavLink href='#rent' text='1С:Аренда' />
					</div>
					<div className=''>
						<NavLink href='#product' text='Продукты 1С' />
					</div>
					<div className=''>
						<NavLink href='#escort' text='Сопровождение 1С (ИТС)' />
					</div>
					<div className=''>
						<NavLink href='#contacts' text='Контакты' />
					</div>
					<LoginButton />
				</ul>
			</nav>
		</header>
	)
}

{
	/* <div className=' max-w-[1366px] mx-auto flex '>
	<div className='text-[53px] flex flex-col '>
		<h1 className='mb-[-1.5rem]'>1С:Предприятие 8 </h1>
		<span className='ml-[5px]'>через Интернет</span>
		<p className='w-[620px] text-[24px]'>
			Ведите бухгалтерский и налоговый учет, контролируйте бизнес и
			управляйте им, сдавайте отчетность через Интернет с помощью
			популярных программ "1С"
		</p>
		<div className='flex space-x-4 text-sm mb-8 mt-2'>
			<button className='bg-red-500 hover:bg-red-600 duration-300 text-white px-4 py-2 rounded'>
				Зарегестрироваться и начать работать
			</button>
			<button className='bg-white hover:bg-stone-200 duration-200 border border-gray-300 text-gray-700 px-4 py-2 rounded'>
				Хочу продавать
			</button>
			<button className='bg-white hover:bg-stone-200 border border-gray-300 text-gray-700 px-4 py-2 rounded'>
				Уже продаю
			</button>
		</div>
	</div>
	<div className='relative w-[380px] h-[285px] ml-[250px] mt-4 overflow-hidden border-4 rounded-md  hover:border-red-500'>
		<Image
			src={PromoPoster}
			alt='promo'
			className='w-full h-full object-cover'
		/>
	</div>
</div> */
}
