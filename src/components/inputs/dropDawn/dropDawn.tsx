'use client'

import CircleWithNumber from '@/components/AdvantageOneC/CircleWithNumber'
import React, { useState } from 'react'

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className=' bg-[#B39C39]  rounded-lg shadow-xl p-4 cursor-pointer'>
			<div
				className='flex items-center  justify-between mb-2'
				onClick={toggleDropdown}
			>
				<h1 className='text-4xl flex content-center text-white hover:text-[#14344C] duration-200 font-bold mb-4 pb-2'>
					1С:Бухобслуживание
				</h1>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					className={`w-6 h-6 transition-transform transform ${
						isOpen ? 'rotate-180' : ''
					}`}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M19 9l-7 7-7-7'
					/>
				</svg>
			</div>
			{isOpen && (
				<div className='ml-2'>
					<div className=' text-start py-8'>
						<div className='mx-auto max-w-[550px] border rounded-lg shadow-xl bg-white border-gray-100 p-2 '>
							<p className='text-[20px] text-justify'>
								Ваш бизнес еще совсем молодой, а контролирующие органы хотят,
								чтобы все было «по-взрослому» уже сейчас? Вы индивидуальный
								предприниматель или директор, и вынуждены тратить время и силы
								на общение с налоговой, пенсионным фондом и трудовой инспекцией?
							</p>
						</div>
					</div>
					<div className=' text-center py-2'>
						<h3 className='text-4xl text-black font-bold max-w-[1366px] mx-auto mb-4 pb-2'>
							Думаете об открытии собственного бизнеса? Не знаете с чего начать?
						</h3>
						<div className='mx-auto max-w-[850px] text-justify mb-6 border rounded-lg shadow-xl bg-white border-gray-100 p-4 '>
							<p className='text-[20px]'>
								Успешные предприниматели не перестают говорить, что начать
								бизнес и удержать его в начальной стадии гораздо сложнее, чем
								управлять большой компанией с сотнями работников и большими
								объемами. Они знают, что открывая свой проект, у Вас все
								происходит спонтанно - «клиент отказался от покупки», «позвонили
								из налоговой» - срочно нужно что-то решать, поставщики подвели
								со сроками, нужно оплачивать счета и так далее. От всего этого у
								Вас появляется много стрессов, пропадает вера в себя и свой
								проект. Чтобы с Вами не произошло такой ситуации на начальном
								этапе необходимо делегировать часть функций, в которых Вы не
								профи. Какова бы ни была причина, по которой вы находитесь в
								бизнесе, вы не преуспеете, если вы просто будете бороться с
								проблемами. Вы должны быть в бизнесе по правильным причинам.
							</p>
						</div>
					</div>
					<div className='text-center py-8'>
						<h3 className='text-4xl text-black font-bold max-w-[1366px] mx-auto mb-4 pb-2'>
							Хотите доверить вести дела своей организации опытной и
							ответственной команде?
						</h3>
						<div className='mx-auto max-w-[850px] mb-6 border bg-white rounded-lg shadow-xl  border-gray-100 p-4 '>
							<p className='text-[20px] text-justify'>
								Любой руководитель бизнеса должен заниматься его развитием, так
								как ему нужно не только вырасти в большую компанию, а в условиях
								не стабильной экономической ситуации просто выжить как бизнес.
								Наши бухгалтера поддержат Вас на всем пути от регистрации до
								вашего развития.
							</p>
						</div>
					</div>
					<div>
						<h2 className='text-[40px] text-center font-bold mt-6 mb-4'>
							Недовольны работой бухгалтера? Есть выход!
						</h2>
						<div className=' grid pb-4 grid-cols-2 gap-2 '>
							<div className='border rounded-lg shadow-xl bg-white border-gray-100 pb-2'>
								<div className='flex max-w-[1366px] ml-12 mt-8 items-center'>
									<div>
										<CircleWithNumber number={1} />
									</div>
									<h3 className='text-[24px] font-bold ml-4'>
										Бухгалтерия в режиме реального времени. Наша бухгалтерия
										всегда работает для Вас.
									</h3>
								</div>
								<p className='ml-[130px] text-justify text-[17px] mt-2 w-[470px]'>
									Мы не уходим в отпуск, не берем больничные, не увольняемся
									посреди отчетного периода. Для прозрачности учета мы обеспечим
									для Вас удаленный доступ к вашим данным из любой точки мира.
									Вы всегда будете в курсе ваших неоплаченных счетов, и
									количестве денег на ваших банковских счетах.
								</p>
							</div>
							<div className='border rounded-lg shadow-xl bg-white border-gray-100 pb-2'>
								<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
									<div>
										<CircleWithNumber number={2} />
									</div>
									<h3 className='text-[24px] font-bold ml-4'>
										Переложите свои заботы на наши плечи.
									</h3>
								</div>
								<p className='ml-[130px] text-justify text-[17px] mt-2 w-[470px]'>
									Мы берем на себя полное ведение бухгалтерского, налогового,
									кадрового учета и расчета заработной платы, формирование и
									сдачу отчетов через Интернет, консультации по налогообложению
									и бухгалтерскому учету.
								</p>
							</div>
							<div className='border rounded-lg shadow-xl bg-white border-gray-100 pb-2'>
								<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
									<div>
										<CircleWithNumber number={3} />
									</div>
									<h3 className='text-[24px] font-bold ml-4'>
										Все самое важное под Вашим контролем.
									</h3>
								</div>
								<p className='ml-[130px] text-justify text-[17px] mt-2 w-[470px]'>
									Вы можете быть уверены в том, что стоимость наших
									бухгалтерских услуг не превысит затрат на содержание в штате
									квалифицированного бухгалтера. Вы отдаете нам ту часть работы,
									которую считаете нужной. И платите только за ту часть работы,
									которую выполняем мы.
								</p>
							</div>
							<div className='border rounded-lg shadow-xl bg-white border-gray-100 pb-2'>
								<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
									<div>
										<CircleWithNumber number={4} />
									</div>
									<h3 className='text-[24px] font-bold ml-4'>
										Дружелюбная поддержка.
									</h3>
								</div>
								<p className='ml-[130px] text-justify text-[17px] mt-2 w-[470px]'>
									Нужна помощь? Позвоните нам – Мы готовы ответить на любые Ваши
									вопросы по ведению бухгалтерии, расчету зарплаты, сдачи
									налогов и другие. Мы здесь, чтобы стать Вашими деловыми
									партнерами.
								</p>
							</div>
						</div>
						<div className=''>
							<h2 className='text-[40px] text-center font-bold mt-6 pt-4 mb-4'>
								Преимущества для стартапов
							</h2>
							<div className='grid grid-cols-2  gap-2 pb-4'>
								<div className='rounded-lg shadow-xl p-4 bg-white'>
									<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
										<div>
											<CircleWithNumber number={1} />
										</div>
										<h3 className='text-[24px] font-bold ml-4'>
											Проконсультируем, выберем, зарегистрируем.
										</h3>
									</div>
									<p className='ml-[130px] text-justify text-[17px] mt-2 w-[470px]'>
										Если вы только начали свой бизнес, мы поможем Вам правильно
										выбрать организационно-правовую форму собственности, выбрать
										режим налогообложения, откроем расчетный счет в банке с
										оптимальными тарифами обслуживания клиентов. Зарегистрируем
										ИП или ООО, Вы сможете без лишних хлопот заняться бизнесом.
									</p>
								</div>
								<div className='rounded-lg shadow-xl p-4 bg-white'>
									<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
										<div>
											<CircleWithNumber number={2} />
										</div>
										<h3 className='text-[24px] font-bold ml-4'>
											Бережно будем сопровождать Ваш бизнес.
										</h3>
									</div>
									<p className='ml-[130px] text-justify text-[17px] mt-2 w-[470px]'>
										Наша команда экспертов будет с Вами на всех этапах развития
										Вашего бизнеса и ответит на любые вопросы возникающие на
										вашем пути. Вы всегда будете знать, сколько налогов вы
										должны и вовремя уведомлены об этом.
									</p>
								</div>
								<div className='rounded-lg shadow-xl p-4 bg-white'>
									<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
										<div>
											<CircleWithNumber number={3} />
										</div>
										<h3 className='text-[24px] font-bold ml-4'>
											Полный Контроль.
										</h3>
									</div>
									<p className='ml-[130px] text-justify text-[17px] mt-2 w-[470px]'>
										Вы будете иметь полный контроль над вашими финансами в
										режиме реального времени. Когда Вы будете готовы расти
										дальше, мы поможем Вам с расчетом заработной платы Ваших
										сотрудников.
									</p>
								</div>
								<div className='rounded-lg shadow-xl p-4 bg-white'>
									<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
										<div>
											<CircleWithNumber number={3} />
										</div>
										<h3 className='text-[24px] font-bold ml-4'>
											Конфиденциальность.
										</h3>
									</div>
									<p className='ml-[130px] text-justify text-[17px] mt-2 w-[470px]'>
										А также мы гарантируем Вам высокое качество обслуживания и
										конфиденциальность.
									</p>
								</div>
							</div>
							<div className=' pb-2'>
								<h2 className='text-[40px] font-bold text-center mt-6 pt-4 mb-2'>
									Что Вы получите:
								</h2>
								<div className='grid grid-cols-2 gap-2 pb-4 '>
									<div className='rounded-lg shadow-xl bg-white'>
										<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
											<div>
												<CircleWithNumber number={1} />
											</div>
											<h3 className='text-[24px] font-bold ml-4'>
												Сосредоточьтесь на бизнесе.
											</h3>
										</div>
										<p className='ml-[130px] text-justify text-[17px] mt-2 w-[470px]'>
											Передав на аутсорсинг бухгалтерию директор и топ-менеджеры
											предприятия могут полностью сконцентрироваться на основном
											бизнесе и не тратить время на решение бухгалтерских и
											налоговых проблем, за которые отвечает аутсорсинговая
											компания.
										</p>
									</div>
									<div className='rounded-lg shadow-xl bg-white'>
										<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
											<div>
												<CircleWithNumber number={2} />
											</div>
											<h3 className='text-[24px] font-bold ml-4'>
												Собственный менеджер и команда экспертов.
											</h3>
										</div>
										<p className='ml-[130px] text-justify text-[17px] mt-2 w-[470px]'>
											Наша компания-аутсорсер осуществляет профессиональное
											бухгалтерское обслуживание предприятий, Вы получите своего
											собственного менеджера и команду экспертов бухгалтеров для
											ведения учета вашего бизнеса. Наша команда осуществляет
											профессиональное обработку документации профильными
											специалистами, что минимизирует риск штрафных санкций со
											стороны налоговых органов.
										</p>
									</div>
									<div className='rounded-lg shadow-xl bg-white'>
										<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
											<div>
												<CircleWithNumber number={3} />
											</div>
											<h3 className='text-[24px] font-bold ml-4'>
												Экономия на расходах.
											</h3>
										</div>
										<p className='ml-[130px] text-justify text-[17px] mt-2 w-[470px]'>
											Нет аренды помещения для отдела бухгалтерии, Нет покупки
											основных средств и материальных ценностей, связанных с
											организацией рабочего места отдела бухгалтерии или
											главного бухгалтера, Нет фонда заработной платы отдела
											бухгалтерского учета или главного бухгалтера, Нет налогов,
											с фонда заработной платы, Нет покупки и содержание в
											актуальном состоянии специализированных программных
											продуктов (1С Предприятие, Консультант плюс, Гарант и др.)
											Нет расходов, связанных с повышением профессионального
											уровня главного бухгалтера, посредством посещения
											различных семинаров и курсов повышения квалификации.
										</p>
									</div>
									<div className='rounded-lg shadow-xl bg-white'>
										<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
											<div>
												<CircleWithNumber number={4} />
											</div>
											<h3 className='text-[24px]  font-bold ml-4'>
												Наша профессиональная поддержка.
											</h3>
										</div>
										<p className='ml-[130px] text-justify text-[17px] mt-2 w-[470px]'>
											Используя нашу бухгалтерскую программу в режиме реального
											времени Вы можете контролировать нашу работу, а также сами
											управлять бизнесом на расстоянии, Наш сервис работает в
											любом браузере, доступен в любой точке мира 24/7.
										</p>
									</div>
									<div className='rounded-lg shadow-xl bg-white'>
										<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
											<div>
												<CircleWithNumber number={5} />
											</div>
											<h3 className='text-[24px] font-bold ml-4'>Выгода</h3>
										</div>
										<p className='ml-[130px] text-[17px] pb-8 mt-2 w-[470px]'>
											И все это до 50% дешевле, чем зарплата среднего
											бухгалтера.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Dropdown
