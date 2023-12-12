'use client'

import Advantage from '../AdvantageOneC/Advantage'
import React, { useState } from 'react'
import FeedbackForm from '../FeedbackForm/FeedbackForm'
import Image from 'next/image'
import logi from '../images/logi2.png'

const Rent: React.FC = () => {
	const [isFormOpen, setFormOpen] = useState(false)

	const openForm = () => {
		setFormOpen(true)
	}

	const closeForm = () => {
		setFormOpen(false)
	}

	return (
		<div id='rent' className='mt-19'>
			<div className='border-2 border-stone-100 mb-4 shadow-xl rounded-xl '>
				<div className=' mx-auto text-[42px] flex justify-center items-center'>
					Аренда «1С»{' '}
					<p className='text-[32px] text-[#B39C39] ml-6'>
						От 1100 руб. в месяц.
					</p>
				</div>

				<div className='flex justify-center text-[24px] '>
					<div className='w-[320px] h-[320px] mr-8'>
						<Image src={logi} alt={''} className='rounded-lg  ' />
					</div>
					<div>
						<div>
							<p>1. Работа с любого устройства везде, где есть Интернет.</p>
							<p>2. Бесплатная техническая поддержка.</p>
							<p> 3. Безопасное хранение данных в дата-центре. </p>
							<p>4. Автоматическое обновление и резервирование данных.</p>
							<p>5. Экономия в 40 раз при стартовых затратах на «1С».</p>
						</div>
						<div className='mb-8'>
							<button
								onClick={openForm}
								className='bg-[#B39C39] normal-case border-2 hover:border-[#B39C39] text-lg  hover:bg-white text-white duration-300 hover:text-[#B39C39] rounded-md py-1 px-2 mr-6 mt-8 '
							>
								Оставить заявку
							</button>
							{isFormOpen && <FeedbackForm onClose={closeForm} />}
						</div>
					</div>
				</div>
			</div>
			<Advantage />
		</div>
	)
}

export default Rent
