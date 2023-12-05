'use client'

import AuthButtons from './AuthButtons'
import NavLink from './NavLink'

export default function Navbar() {
	return (
		<header className='bg-black  text-white w-full ease-in duration-800s top-0 left-0 z-50 '>
			<nav className='max-w-[1366px] mx-auto h-[100px] flex justify-between items-center mt-0 '>
				<div className='text-lg font-bold'>Консалтинговая группа "Портал"</div>
				<ul className=' text-gray-200 normal-case hidden items-center md:flex font-semibold lg:text-[20px]'>
					<div className='transition-transform transform hover:scale-105'>
						<NavLink href='#about' text='О компании' />
					</div>
					<div className='transition-transform transform hover:scale-105'>
						<NavLink href='/' text='Приложения' />
					</div>
					<div className='transition-transform transform hover:scale-105'>
						<NavLink href='#services' text='Услуги 1С:БО' />
					</div>
					<div className='transition-transform transform hover:scale-105'>
						<NavLink href='#rent' text='1С:Аренда' />
					</div>
					<div className='transition-transform transform hover:scale-105'>
						<NavLink href='#product' text='Продукты 1С' />
					</div>
					<div className='transition-transform transform hover:scale-105'>
						<NavLink href='#escort' text='Сопровождение 1С (ИТС)' />
					</div>
					<div className='transition-transform transform hover:scale-105'>
						<NavLink href='#contacts' text='Контакты' />
					</div>

					<AuthButtons />
				</ul>
			</nav>
			{/* <div className=' max-w-[1366px] mx-auto flex '>
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
				<div className='relative w-[380px] h-[285px] ml-[250px] mt-4 overflow-hidden border-4 rounded-md transition-transform transform hover:scale-105 hover:border-red-500'>
					<Image
						src={PromoPoster}
						alt='promo'
						className='w-full h-full object-cover'
					/>
				</div>
			</div> */}
		</header>
	)
}
