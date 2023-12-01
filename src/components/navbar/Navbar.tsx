'use client'

import AuthButtons from './AuthButtons'
import Logo from './Logo'
import NavLink from './NavLink'
import PromoPoster from '../images/promo-poster.png'
import Image from 'next/image'

export default function Navbar() {
	return (
		<header className='bg-gradient-to-r from-[#fcf336] to-[#fbc315]  text-black w-full ease-in duration-800s top-0 left-0 z-50 '>
			<div className='text-xl font-bold flex max-w-[1366px] mx-auto  flex-col items-center '>
				Круглосуточная поддержка
				<span> 8 (800) 333-72-27 </span>
			</div>
			<nav className='max-w-[1366px] mx-auto h-[100px] flex justify-between items-center mt-0 '>
				<Logo />
				<ul className=' text-gray-200 normal-case hidden items-center md:flex font-semibold lg:text-[20px]'>
					<div className='transition-transform transform hover:scale-105'>
						<NavLink href='/' text='Главная' />
					</div>
					<div className='transition-transform transform hover:scale-105'>
						<NavLink href='/' text='Приложения' />
					</div>
					<div className='transition-transform transform hover:scale-105'>
						<NavLink href='/' text='Преимущества' />
					</div>
					<div className='transition-transform transform hover:scale-105'>
						<NavLink href='/' text='Отзывы' />
					</div>
					<div className='transition-transform transform hover:scale-105'>
						<NavLink href='/' text='Тарифы' />
					</div>
					<div className='transition-transform transform hover:scale-105'>
						<NavLink href='/' text='О сервисе' />
					</div>
					<div className='transition-transform transform hover:scale-105'>
						<NavLink href='/' text='Магазин расширений' />
					</div>
					<div className='transition-transform transform hover:scale-105'>
						<NavLink href='/' text='Партнерам' />
					</div>
					<div className='transition-transform transform hover:scale-105'>
						<NavLink href='/' text='Справка' />
					</div>
					<AuthButtons />
				</ul>
			</nav>
			<div className=' max-w-[1366px] mx-auto flex '>
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
			</div>
		</header>
	)
}
