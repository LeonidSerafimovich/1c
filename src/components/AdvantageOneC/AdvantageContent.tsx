import CircleWithNumber from './CircleWithNumber'

function AdvantageContent() {
	return (
		<div className='bg-white grid grid-cols-3 gap-8 '>
			<div>
				<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
					<CircleWithNumber number={1} />
					<h3 className='text-[24px] font-bold ml-4'>Удобство</h3>
				</div>
				<div>
					<p className='ml-[130px] mt-2 w-[250px]'>
						Круглосуточный доступ к популярным программам «1С» из любой точки
						мира.
					</p>
				</div>
			</div>
			<div>
				<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
					<CircleWithNumber number={2} />
					<h3 className='text-[24px] font-bold ml-4'>Функциональность</h3>
				</div>
				<p className='ml-[130px] mt-2 w-[250px]'>
					Подключение к "1С» через веб-браузер, тонкий клиент или удаленное
					приложение Доступ к сервису «1С-Отчетность».
				</p>
			</div>
			<div>
				<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
					<CircleWithNumber number={3} />
					<h3 className='text-[24px] font-bold ml-4'>Экономия</h3>
				</div>
				<p className='ml-[130px] mt-2 w-[250px]'>
					Вам не нужно покупать дорогой сервер, коробки и лицензии «1С», а также
					платить за обновления программ Вы также сэкономите на техническом
					обслуживании оборудования и расходах на электроэнергию.
				</p>
			</div>
			<div>
				<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
					<CircleWithNumber number={4} />
					<h3 className='text-[24px] font-bold ml-4'>Безопасность</h3>
				</div>
				<p className='ml-[130px] mt-2 w-[250px]'>
					Обеспечиваем безопасность и конфиденциальность информации. Все данные
					передаются в зашифрованном виде и недоступны третьим лицам. Полное
					резервное копирование 1 раз в сутки.
				</p>
			</div>
			<div>
				<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
					<CircleWithNumber number={5} />
					<h3 className='text-[24px] font-bold ml-4'>Техническая Поддержка</h3>
				</div>
				<p className='ml-[130px] mt-2 w-[250px]'>
					Наши специалисты готовы ответить на все вопросы – вы никогда не
					останетесь без внимания!
				</p>
			</div>
			<div>
				<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
					<CircleWithNumber number={6} />
					<h3 className='text-[24px] font-bold ml-4'>Гибкость</h3>
				</div>
				<p className='ml-[130px] mt-2 w-[250px]'>
					Возможность изменять и дорабатывать программы под задачи организации.
				</p>
			</div>
		</div>
	)
}

export default AdvantageContent
