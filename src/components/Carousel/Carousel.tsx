'use client'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CircleWithNumber from '../AdvantageOneC/CircleWithNumber'

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	}

	return (
		<Slider {...settings} className='mb-8 rounded-lg  shadow-lg'>
			<div>
				<h2 className='text-[40px] text-center font-bold  mb-2'>
					Недовольны работой бухгалтера? Есть выход!
				</h2>
				<div className=' grid pb-4 grid-cols-2 gap-2 '>
					<div className='rounded-lg  bg-white hover:bg-[#14344C] hover:text-white duration-200  pb-2'>
						<div className='flex max-w-[1366px] ml-12 mt-8 items-center'>
							<div>
								<CircleWithNumber number={1} />
							</div>
							<h3 className='text-[24px] font-bold ml-4'>
								Бухгалтерия в режиме реального времени. Наша бухгалтерия всегда
								работает для Вас.
							</h3>
						</div>
						<p className='ml-[115px] text-justify text-[17px] mt-2 w-[470px]'>
							Мы не уходим в отпуск, не берем больничные, не увольняемся посреди
							отчетного периода. Для прозрачности учета мы обеспечим для Вас
							удаленный доступ к вашим данным из любой точки мира. Вы всегда
							будете в курсе ваших неоплаченных счетов, и количестве денег на
							ваших банковских счетах.
						</p>
					</div>
					<div className='rounded-lg  bg-white hover:bg-[#14344C] hover:text-white duration-200  pb-2'>
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
							кадрового учета и расчета заработной платы, формирование и сдачу
							отчетов через Интернет, консультации по налогообложению и
							бухгалтерскому учету.
						</p>
					</div>
					<div className='rounded-lg  bg-white hover:bg-[#14344C] hover:text-white duration-200  pb-2'>
						<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
							<div>
								<CircleWithNumber number={3} />
							</div>
							<h3 className='text-[24px] font-bold ml-4'>
								Все самое важное под Вашим контролем.
							</h3>
						</div>
						<p className='ml-[130px] text-justify text-[17px] mt-2 w-[470px]'>
							Вы можете быть уверены в том, что стоимость наших бухгалтерских
							услуг не превысит затрат на содержание в штате квалифицированного
							бухгалтера. Вы отдаете нам ту часть работы, которую считаете
							нужной. И платите только за ту часть работы, которую выполняем мы.
						</p>
					</div>
					<div className='rounded-lg  bg-white hover:bg-[#14344C] hover:text-white duration-200  pb-2'>
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
							вопросы по ведению бухгалтерии, расчету зарплаты, сдачи налогов и
							другие. Мы здесь, чтобы стать Вашими деловыми партнерами.
						</p>
					</div>
				</div>
			</div>
			<div>
				<h2 className='text-[40px] text-center font-bold  mb-4'>
					Преимущества для стартапов
				</h2>
				<div className='grid grid-cols-2 gap-2 pb-4'>
					<div className='rounded-lg pl-2 bg-white hover:bg-[#14344C] hover:text-white duration-200'>
						<div className='flex max-w-[1366px]  mt-8 items-center'>
							<div>
								<CircleWithNumber number={1} />
							</div>
							<h3 className='text-[24px] font-bold ml-4'>
								Проконсультируем, выберем, зарегистрируем.
							</h3>
						</div>
						<p className='ml-[67px] text-justify text-[17px]  w-[470px]'>
							Если вы только начали свой бизнес, мы поможем Вам правильно
							выбрать организационно-правовую форму собственности, выбрать режим
							налогообложения, откроем расчетный счет в банке с оптимальными
							тарифами обслуживания клиентов. Зарегистрируем ИП или ООО, Вы
							сможете без лишних хлопот заняться бизнесом.
						</p>
					</div>
					<div className='rounded-lg pl-2 bg-white hover:bg-[#14344C] hover:text-white duration-200'>
						<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
							<div>
								<CircleWithNumber number={2} />
							</div>
							<h3 className='text-[24px] font-bold ml-4'>
								Бережно будем сопровождать Ваш бизнес.
							</h3>
						</div>
						<p className='ml-[130px] text-justify text-[17px] mt-2 w-[470px]'>
							Наша команда экспертов будет с Вами на всех этапах развития Вашего
							бизнеса и ответит на любые вопросы возникающие на вашем пути. Вы
							всегда будете знать, сколько налогов вы должны и вовремя
							уведомлены об этом.
						</p>
					</div>
					<div className='rounded-lg pl-2 bg-white hover:bg-[#14344C] hover:text-white duration-200'>
						<div className='flex max-w-[1366px]  mt-8 items-center'>
							<div>
								<CircleWithNumber number={3} />
							</div>
							<h3 className='text-[24px] font-bold ml-4'>Полный Контроль.</h3>
						</div>
						<p className='ml-[65px] text-justify text-[17px] mt-2 w-[470px]'>
							Вы будете иметь полный контроль над вашими финансами в режиме
							реального времени. Когда Вы будете готовы расти дальше, мы поможем
							Вам с расчетом заработной платы Ваших сотрудников.
						</p>
					</div>
					<div className='rounded-lg pl-2 bg-white hover:bg-[#14344C] hover:text-white duration-200'>
						<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
							<div>
								<CircleWithNumber number={4} />
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
			</div>
			<div className=' pb-2'>
				<h2 className='text-[40px] font-bold text-center mb-2'>
					Что Вы получите:
				</h2>
				<div className='grid grid-cols-2 gap-2 pb-4 '>
					<div className='rounded-lg  bg-white hover:bg-[#14344C] hover:text-white duration-200'>
						<div className='flex max-w-[1366px] ml-2 mt-6 items-center'>
							<div>
								<CircleWithNumber number={1} />
							</div>
							<h3 className='text-[24px] font-bold ml-4'>
								Сосредоточьтесь на бизнесе.
							</h3>
						</div>
						<p className='ml-[70px] text-justify text-[17px] mt-2 w-[470px]'>
							Передав на аутсорсинг бухгалтерию директор и топ-менеджеры
							предприятия могут полностью сконцентрироваться на основном бизнесе
							и не тратить время на решение бухгалтерских и налоговых проблем,
							за которые отвечает аутсорсинговая компания.
						</p>
					</div>
					<div className='rounded-lg pl-2 bg-white hover:bg-[#14344C] hover:text-white duration-200'>
						<div className='flex max-w-[1366px] ml-16 mt-6 items-center'>
							<div>
								<CircleWithNumber number={2} />
							</div>
							<h3 className='text-[24px] font-bold ml-4'>
								Собственный менеджер и команда экспертов.
							</h3>
						</div>
						<p className='ml-[130px] text-justify text-[17px] mt-2 w-[470px]'>
							Мы предоставляем профессиональное бухгалтерское обслуживание
							предприятий. Ваш бизнес будет обслуживаться опытными бухгалтерами
							и менеджерами. Наша команда обрабатывает документацию, что
							помогает предотвратить возможные штрафы от налоговых органов.
						</p>
					</div>
					<div className='rounded-lg pl-2 bg-white hover:bg-[#14344C] hover:text-white duration-200'>
						<div className='flex max-w-[1366px] ml-2 mt-6 items-center'>
							<div>
								<CircleWithNumber number={3} />
							</div>
							<h3 className='text-[24px] font-bold ml-4'>
								Экономия на расходах.
							</h3>
						</div>
						<p className='ml-[75px] text-justify text-[17px] mt-2 w-[470px]'>
							Отсутствуют расходы на аренду помещения, приобретение основных
							средств и материальных ценностей для отдела бухгалтерии. Также нет
							фонда заработной платы для бухгалтеров и главного бухгалтера,
							налогов с фонда заработной платы, а также расходов на программные
							продукты и повышение квалификации главного бухгалтера.
						</p>
					</div>
					<div className='rounded-lg pl-2 bg-white hover:bg-[#14344C] hover:text-white duration-200'>
						<div className='flex max-w-[1366px] ml-16 mt-8 items-center'>
							<div>
								<CircleWithNumber number={4} />
							</div>
							<h3 className='text-[24px]  font-bold ml-4'>
								Наша профессиональная поддержка.
							</h3>
						</div>
						<p className='ml-[130px] text-justify text-[17px] mt-2 w-[470px]'>
							Используя нашу бухгалтерскую программу в режиме реального времени
							Вы можете контролировать нашу работу, а также сами управлять
							бизнесом на расстоянии, Наш сервис работает в любом браузере,
							доступен в любой точке мира 24/7.
						</p>
					</div>
				</div>
			</div>
		</Slider>
	)
}

export default Carousel
