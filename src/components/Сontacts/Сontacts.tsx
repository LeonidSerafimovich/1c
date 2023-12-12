function Сontacts() {
	return (
		<div
			id='contacts'
			className='max-w-[1366px] mx-auto border flex flex-col items-center rounded-lg pb-4 shadow-xl mt-4 mb-16'
		>
			<h1 className='text-[40px]'>Наши контакты</h1>
			<h2 className='text-[36px]'>Адресс</h2>
			<div className='flex flex-col items-center'>
				<div>
					<p className='text-[24px] text-stone-400'>
						г. Озерск, Челябинская область, бр. Гайдара д. 9, оф. 1.
					</p>
				</div>
				<h2 className='text-[36px]'>Время работы</h2>
				<div>
					<p className='text-[24px] text-stone-400'>Пн-Пт: 08:00-17:00</p>
					<p className='text-[24px] text-stone-400'>Сб-Вс: выходной</p>
				</div>
				<h2 className='text-[36px]'>Как с нами связаться</h2>
				<div>
					<p className='text-[24px] text-stone-400'>8 (351) 305-30-10</p>
					<p className='text-[24px] text-stone-400'>info@mbu24.rounded</p>
				</div>
			</div>
		</div>
	)
}
export default Сontacts
