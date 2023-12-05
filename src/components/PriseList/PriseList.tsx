'use client'

import ReportingJpg from '../images/priselist/reporting.jpg'
import OgMin from '../images/priselist/og-min.png'
import Col from '../images/priselist/colculator.jpg'
import Image from 'next/image'
import { useState } from 'react'
import FeedbackForm from '../FeedbackForm/FeedbackForm'

const PriseList: React.FC = () => {
	const [isFormOpen, setFormOpen] = useState(false)

	const openForm = () => {
		setFormOpen(true)
	}

	const closeForm = () => {
		setFormOpen(false)
	}

	return (
		<div id='services'>
			<h2 className='text-[40px] text-center font-bold mt-6 mb-4'>
				Стоимость услуг 1С:БухОбслуживание.
			</h2>
			<div className='bg-white grid grid-cols-3 gap-2 '>
				<div className='flex flex-col h-full justify-between'>
					<div className='flex flex-col  ml-12 mt-8 items-center'>
						<div className='relative border-2 rounded-lg overflow-hidden'>
							<Image src={ReportingJpg} alt={''} className='rounded-lg' />
							<div className='absolute bottom-[180px] left-[] right-0 bg-green-300 text-center p-2 rounded-lg'>
								<p className='text-black text-[18px] font-bold'>3000 руб.</p>
							</div>
						</div>

						<h3 className='text-[24px] mt-8 font-bold ml-4'>
							Тарифный план "Отчетность".
						</h3>
					</div>

					<p className='text-[16px] ml-[50px]  mt-2 items-start '>
						Тариф подходит ООО и ИП, которые самостоятельно вводят все данные в
						облачную «1С:Бухгалтерию». Решает задачи: составление и сдача
						отчетности. Консультации по вопросам ведения бухгалтерского и
						налогового учета 1С:Предприятие. Премущества: налоги рассчитаны
						верно, отчетность корректно сформирована и сдана в строк.
						Минимальная стоимость обслуживания.
					</p>
					<div className='mb-8 flex justify-center'>
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
					<div className='flex flex-col max-w-[1366px] ml-12 mt-8 items-center'>
						<div className='relative border-2 rounded-lg overflow-hidden'>
							<Image
								src={OgMin}
								alt={''}
								className='rounded-lg object-cover w-[220px] h-[220px]'
							/>
							<div className='absolute bottom-[180px] left-[] right-0 bg-green-300 text-center p-2 rounded-lg'>
								<p className='text-black text-[18px] font-bold'>5400 руб.</p>
							</div>
						</div>

						<h3 className='text-[24px] mt-8 font-bold ml-4'>
							Тариф "Комплексный сервис"
						</h3>
					</div>
					<p className='text-[16px] ml-[50px] mt-2 items-start '>
						Тариф подходит ООО и ИП с сотрудниками независимо от оборотов
						компании и сферы бизнеса. Решает задачи: передает все заботы
						бухучета профессионалам. Премущества: бухгалтер всегда на связи,
						удаленный дотуп к учетной базе, оплата за услуги по факту и объему
						выполненных работ.
					</p>
					<div className='mb-8 flex justify-center'>
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
					<div className='flex  flex-col max-w-[1366px] ml-12 mt-8 items-center'>
						<div className='relative  border-2 rounded-lg overflow-hidden'>
							<Image
								src={Col}
								alt={''}
								className='rounded-lg  w-[220px] h-[220px]'
							/>
							<div className='absolute bottom-[180px] left-[] right-0 bg-green-300 text-center p-2 rounded-lg'>
								<p className='text-black text-[18px] font-bold'>3990 руб.</p>
							</div>
						</div>
						<h3 className='text-[24px] mt-8 font-bold ml-4'>
							Тарифный план "Кадровый учет и заработная плата".
						</h3>
					</div>
					<p className='text-[16px] ml-[50px] mt-2 items-start '>
						Тариф подходит для компаний, которые организовали ведение бухучета
						самостоятельно, но не готовы вникать в тонкости кадрового учета и
						расчета заработной платы «1С:Бухгалтерию». Решает задачи:
						обслуживание сотрудников клиента от момента приема на работу, до
						расчета выплат по больничным листам, расчета зарплат, премий и т.д.
						Премущества: все задачи решаются строго в срок, конфиденциально, с
						предоставлением пояснений сотрудникам по оформлению документов и
						суммам начисленного вознаграждения.
					</p>
					<div className='mb-8 flex justify-center '>
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

export default PriseList
