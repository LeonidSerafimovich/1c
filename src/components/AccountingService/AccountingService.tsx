'use client'

import { useState } from 'react'
import FeedbackForm from '../FeedbackForm/FeedbackForm'

const AccountinService: React.FC = () => {
	const [isFormOpen, setFormOpen] = useState(false)

	const openForm = () => {
		setFormOpen(true)
	}

	const closeForm = () => {
		setFormOpen(false)
	}

	return (
		<div>
			<div className='bg-yellow-300 text-center py-8'>
				<h3 className='text-4xl text-red-600 font-bold max-w-[1366px] mx-auto mb-4 pb-2'>
					1С:Бухобслуживание
				</h3>
				<div className='mx-auto max-w-[550px] mb-6 border bg-white rounded-md border-gray-300 p-4 shadow-md'>
					<p className='text-[20px]'>
						Ваш бизнес еще совсем молодой, а контролирующие органы хотят, чтобы
						все было «по-взрослому» уже сейчас? Вы индивидуальный
						предприниматель или директор, и вынуждены тратить время и силы на
						общение с налоговой, пенсионным фондом и трудовой инспекцией?
					</p>
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
			<div className='bg-yellow-300 text-center py-8'>
				<h3 className='text-4xl text-red-600 font-bold max-w-[1366px] mx-auto mb-4 pb-2'>
					Думаете об открытии собственного бизнеса? Не знаете с чего начать?
				</h3>
				<div className='mx-auto max-w-[850px] mb-6 border bg-white rounded-md border-gray-300 p-4 shadow-md'>
					<p className='text-[20px]'>
						Успешные предприниматели не перестают говорить, что начать бизнес и
						удержать его в начальной стадии гораздо сложнее, чем управлять
						большой компанией с сотнями работников и большими объемами. Они
						знают, что открывая свой проект, у Вас все происходит спонтанно -
						«клиент отказался от покупки», «позвонили из налоговой» - срочно
						нужно что-то решать, поставщики подвели со сроками, нужно оплачивать
						счета и так далее. От всего этого у Вас появляется много стрессов,
						пропадает вера в себя и свой проект. Чтобы с Вами не произошло такой
						ситуации на начальном этапе необходимо делегировать часть функций, в
						которых Вы не профи. Какова бы ни была причина, по которой вы
						находитесь в бизнесе, вы не преуспеете, если вы просто будете
						бороться с проблемами. Вы должны быть в бизнесе по правильным
						причинам.
					</p>
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
			<div className='bg-yellow-300 text-center py-8'>
				<h3 className='text-4xl text-red-600 font-bold max-w-[1366px] mx-auto mb-4 pb-2'>
					Хотите доверить вести дела своей организации опытной и ответственной
					команде?
				</h3>
				<div className='mx-auto max-w-[850px] mb-6 border bg-white rounded-md border-gray-300 p-4 shadow-md'>
					<p className='text-[20px]'>
						Любой руководитель бизнеса должен заниматься его развитием, так как
						ему нужно не только вырасти в большую компанию, а в условиях не
						стабильной экономической ситуации просто выжить как бизнес. Наши
						бухгалтера поддержат Вас на всем пути от регистрации до вашего
						развития.
					</p>
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
	)
}
export default AccountinService
