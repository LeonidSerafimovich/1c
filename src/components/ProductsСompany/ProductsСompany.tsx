'use client'

import one from '../images/product/1с8.jpg'
import two from '../images/product/two.jpg'
import three from '../images/product/three.png'
import four from '../images/product/for.png'
import five from '../images/product/five.webp'
import seven from '../images/product/seven.jpg'
import Image from 'next/image'
import { useState } from 'react'
import FeedbackForm from '../FeedbackForm/FeedbackForm'

const ProductsСompany: React.FC = () => {
	const [isFormOpen, setFormOpen] = useState(false)

	const openForm = () => {
		setFormOpen(true)
	}

	const closeForm = () => {
		setFormOpen(false)
	}

	return (
		<div id='product'>
			<h2 className='text-[40px] text-center font-bold mt-6 mb-4'>
				Продукты фирмы "1С".
			</h2>
			<div className=' grid grid-cols-3 gap-8 pb-8 '>
				<div className='flex flex-col h-full justify-between'>
					<div className='ml-12 mt-8'>
						<div className='relative rounded-lg overflow-hidden'>
							<Image
								src={one}
								alt={''}
								className='rounded-lg object-cover w-[220px] h-[220px]'
							/>
							{/* <div className='absolute bottom-[180px] left-[] right-0 bg-green-300 text-center p-2 rounded-lg'>
								<p className='text-black text-[18px] font-bold'>5400 руб.</p>
							</div> */}
						</div>

						<h3 className='text-[24px] mt-8 font-bold '>
							1С:Бухгалтерия 8 ПРОФ
						</h3>
						<div>
							<p className='text-[16px]   mt-2 items-start '>
								«1C:Бухгалтерия 8» — это самая популярная бухгалтерская
								программа, способная вывести автоматизацию учета на качественно
								новый уровень. Удобный продукт и подключаемые к нему сервисы
								позволят эффективно решать задачи бухгалтерской службы любого
								бизнеса.
							</p>
						</div>
					</div>
					<div className='ml-16'>
						<button
							onClick={openForm}
							className='bg-red-600 normal-case border-2 text-lg  hover:bg-red-400 bg-blacktext-slate-300 transition duration-300 text-black rounded-full py-2 px-3 mr-6 mt-8 font-bold'
						>
							Оставить заявку
						</button>
						{isFormOpen && <FeedbackForm onClose={closeForm} />}
					</div>
				</div>

				<div className='flex flex-col h-full justify-between'>
					<div className='ml-12 mt-8'>
						<div className='relative  rounded-lg overflow-hidden'>
							<Image
								src={two}
								alt={''}
								className='rounded-lg object-cover w-[220px] h-[220px]'
							/>
							{/* <div className='absolute bottom-[180px] left-[] right-0 bg-green-300 text-center p-2 rounded-lg'>
								<p className='text-black text-[18px] font-bold'>5400 руб.</p>
							</div> */}
						</div>

						<h3 className='text-[24px] mt-8 font-bold '>
							1С:Зарплата и Управление Персоналом 8 ПРОФ
						</h3>
						<div>
							<p className='text-[16px]  mt-2 items-start '>
								«1С:Зарплата и управление персоналом 8» — программа массового
								назначения, позволяющая в комплексе автоматизировать задачи,
								связанные с расчетом заработной платы персонала и реализацией
								кадровой политики, с учетом требований законодательства и
								реальной практики работы предприятий.
							</p>
						</div>
					</div>
					<div className='ml-16'>
						<button
							onClick={openForm}
							className='bg-red-600 normal-case border-2 text-lg  hover:bg-red-400 bg-blacktext-slate-300 transition duration-300 text-black rounded-full py-2 px-3 mr-6 mt-8 font-bold'
						>
							Оставить заявку
						</button>
						{isFormOpen && <FeedbackForm onClose={closeForm} />}
					</div>
				</div>

				<div className='flex flex-col h-full justify-between'>
					<div className='ml-12 mt-8'>
						<div className='relative rounded-lg overflow-hidden'>
							<Image
								src={three}
								alt={''}
								className='rounded-lg  w-[220px] h-[220px]'
							/>
							{/* <div className='absolute bottom-[180px] left-[] right-0 bg-green-300 text-center p-2 rounded-lg'>
								<p className='text-black text-[18px] font-bold'>3990 руб.</p>
							</div> */}
						</div>
						<h3 className='text-[24px] mt-8 font-bold '>
							1С:Управление торговлей 8 ПРОФ
						</h3>
						<div>
							<p className='text-[16px] mt-2 items-start '>
								«1С:Управление торговлей 8» — это современный инструмент для
								повышения эффективности бизнеса торгового предприятия. Программа
								позволяет в комплексе автоматизировать задачи оперативного и
								управленческого учета, анализа и планирования торговых операций,
								обеспечивая тем самым эффективное управление современным
								торговым предприятием.
							</p>
						</div>
					</div>
					<div className='ml-16'>
						<button
							onClick={openForm}
							className='bg-red-600 normal-case border-2 text-lg  hover:bg-red-400 bg-blacktext-slate-300 transition duration-300 text-black rounded-full py-2 px-3 mr-6 mt-8 font-bold'
						>
							Оставить заявку
						</button>
						{isFormOpen && <FeedbackForm onClose={closeForm} />}
					</div>
				</div>

				<div className='flex flex-col h-full justify-between'>
					<div className='ml-12 mt-8'>
						<div className='relative rounded-lg overflow-hidden'>
							<Image
								src={four}
								alt={''}
								className='rounded-lg  w-[220px] h-[220px]'
							/>
							{/* <div className='absolute bottom-[180px] left-[] right-0 bg-green-300 text-center p-2 rounded-lg'>
								<p className='text-black text-[18px] font-bold'>3990 руб.</p>
							</div> */}
						</div>
						<h3 className='text-[24px] mt-8 font-bold '>
							1С:Управление нашей фирмой ПРОФ
						</h3>
						<div>
							<p className='text-[16px]  mt-2 items-start '>
								1С:УНФ используют: Розничные магазины Поддержка 54-ФЗ, работа с
								онлайн-кассами и ККТ, обмен данными с ГИСМ и ЕГАИС.
								Интернет-магазины Полная интеграция с сайтом, обработка заказов,
								управление оплатой и доставкой. Оптовые компании
								Многофункциональная CRM-система, торговля со склада, передача на
								реализацию, расчет потребностей, закупка товаров. Компании сферы
								услуг и работ Прием заказов, учет заданий на работу, оформление
								актов выполненных работ, взаиморасчеты. Производственные
								компании Оформление заказов: от клиентов, поставщикам и на
								производство, ведение всех производственных этапов, продажа
								продукции.
							</p>
						</div>
					</div>
					<div className='ml-16'>
						<button
							onClick={openForm}
							className='bg-red-600 normal-case border-2 text-lg  hover:bg-red-400 bg-blacktext-slate-300 transition duration-300 text-black rounded-full py-2 px-3 mr-6 mt-8 font-bold'
						>
							Оставить заявку
						</button>
						{isFormOpen && <FeedbackForm onClose={closeForm} />}
					</div>
				</div>

				<div className='flex flex-col h-full justify-between'>
					<div className='ml-12 mt-8'>
						<div className='relative rounded-lg overflow-hidden'>
							<Image
								src={five}
								alt={''}
								className='rounded-lg  w-[220px] h-[220px]'
							/>
							{/* <div className='absolute bottom-[180px] left-[] right-0 bg-green-300 text-center p-2 rounded-lg'>
								<p className='text-black text-[18px] font-bold'>3990 руб.</p>
							</div> */}
						</div>
						<h3 className='text-[24px] mt-8 font-bold '>
							1С:Комплексная автоматизация
						</h3>
						<div>
							<p className='text-[16px]  mt-2 items-start '>
								«1С:Комплексная автоматизация» — это программа для построения на
								предприятии единой информационной системы, охватывающей основные
								задачи управления и учета. Данное решение позволяет
								автоматизировать важнейшие области бизнеса: бухгалтерию,
								торговлю, склад, расчет зарплаты, кадровый учет.
							</p>
						</div>
					</div>
					<div className='ml-16'>
						<button
							onClick={openForm}
							className='bg-red-600 normal-case border-2 text-lg  hover:bg-red-400 bg-blacktext-slate-300 transition duration-300 text-black rounded-full py-2 px-3 mr-6 mt-8 font-bold'
						>
							Оставить заявку
						</button>
						{isFormOpen && <FeedbackForm onClose={closeForm} />}
					</div>
				</div>

				<div className='flex flex-col h-full justify-between'>
					<div className='ml-12 mt-8'>
						<div className='relative rounded-lg overflow-hidden'>
							<Image
								src={seven}
								alt={''}
								className='rounded-lg object-cover  w-[290px] h-[220px]'
							/>
							{/* <div className='absolute bottom-[180px] left-[] right-0 bg-green-300 text-center p-2 rounded-lg'>
								<p className='text-black text-[18px] font-bold'>3990 руб.</p>
							</div> */}
						</div>
						<h3 className='text-[24px] mt-8 font-bold '>
							1С:ERP Управление предприятием
						</h3>
					</div>
					<p className='text-[16px]  mt-2 items-start '>
						«1С:ERP Управление предприятием» позволит построить комплексную
						информационную систему для управления деятельностью любого
						предприятия. Это инновационное решение от компании «1С» использует
						комплексный подход к управлению бизнесом, лучшие международные
						методики и многолетнюю отечественную практику, что гарантирует
						гибкость настройки, удобство использования и существенный
						экономический эффект. Линейка решений «1С:ERP» охватывает все
						основные отрасли, имеет большой набор функций и программных
						инструментов, подходит для использования на предприятиях любой
						численности.
					</p>
					<div className='ml-16'>
						<button
							onClick={openForm}
							className='bg-red-600 normal-case border-2 text-lg  hover:bg-red-400 bg-blacktext-slate-300 transition duration-300 text-black rounded-full py-2 px-3 mr-6 mt-8 font-bold'
						>
							Оставить заявку
						</button>
						{isFormOpen && <FeedbackForm onClose={closeForm} />}
					</div>
				</div>
			</div>
		</div>
	)
}
export default ProductsСompany
