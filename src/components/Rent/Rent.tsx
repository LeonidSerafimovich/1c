'use client'

import Advantage from '../AdvantageOneC/Advantage'
import React, { useState } from 'react'
import FeedbackForm from '../FeedbackForm/FeedbackForm'

const Rent: React.FC = () => {
	const [isFormOpen, setFormOpen] = useState(false)

	const openForm = () => {
		setFormOpen(true)
	}

	const closeForm = () => {
		setFormOpen(false)
	}

	return (
		<div id='rent'>
			<div className='bg-sky-200 '>
				<div className='max-w-[1366px] mx-auto text-[72px] flex justify-center'>
					Аренда «1С»
				</div>
				<div className='flex justify-center text-[24px]'>
					<div className='border-2 border-green-600 bg-green-400 rounded-md px-1'>
						От 1100 руб. в месяц.
					</div>
				</div>
				<div className='flex justify-center text-[24px] '>
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
								className='bg-red-600 normal-case border-2 text-lg  hover:bg-red-400 bg-blacktext-slate-300 transition duration-300 text-black rounded-full py-2 px-3 mr-6 mt-8 font-bold'
							>
								Оставить заявку
							</button>
							{isFormOpen && <FeedbackForm onClose={closeForm} />}
						</div>
					</div>
				</div>
				<Advantage />
			</div>
		</div>
	)
}

export default Rent
