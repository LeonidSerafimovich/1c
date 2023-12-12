import Image from 'next/image'
import automatic from '../images/appss/automatik.png'
import buh from '../images/appss/buh.png'
import zp from '../images/appss/zp.png'
import firma from '../images/appss/firma.png'

export default function Apps() {
	return (
		<div
			id='apps'
			className=' border rounded-lg shadow-xl bg-white border-gray-100 pb-2 mt-4  pt-4'
		>
			<h2 className='text-[40px] text-black text-center font-bold mt-6 '>
				Приложения
			</h2>
			<div className='grid grid-cols-3 gap-2'>
				<div className=' ml-12 mt-8 flex flex-col h-8 justify-between '>
					<div className='w-[220px] h-[220px]'>
						<Image src={automatic} alt={''} className='rounded-lg  ' />
					</div>
					<h3 className='text-[24px] mt-8 text-red-500 font-bold ml-4'>
						1С:Комплексная автоматизация 2.0
					</h3>
					<div>
						<p className='text-[18px] text-black text-justify ml-4 mt-2 items-start  '>
							Комплексное решение для автоматизации предприятий любых отраслей и
							видов деятельности. В приложении можно вести управленческий,
							бухгалтерский и налоговый учет по нескольким организациям (не
							нужно использовать обмены с другими решениями).
						</p>
					</div>
					<div className=' mt-8 flex justify-start'>
						<button className='bg-yellow-300 py-1 px-2 mt-2 normal-case border-2 text-lg  hover:bg-red-400 bg-blacktext-slate-300 transition duration-300 text-black rounded-full '>
							начать работу
						</button>
					</div>
				</div>
				<div className=' ml-12 mt-8 items-center '>
					<div className='w-[220px] h-[220px] asdasd'>
						<Image src={buh} alt={''} className='' />
					</div>
					<div>
						<h3 className='text-[24px] mt-8 text-red-500 font-bold ml-4'>
							1C:Бухгалтерия 8 СПЕЦ/КОРП
						</h3>
						<p className='text-[18px] text-black text-justify ml-4 mt-2 items-start  '>
							Полнофункциональная бухгалтерия для организаций с расширенными
							потребностями, в том числе для крупных и средних предприятий с
							аудируемой отчетностью. Обеспечивает ведение учета и составление
							отчетности по новым ФСБУ в полном объеме; расчет налога на прибыль
							организаций, имеющих обособленные подразделения; консолидацию
							отчетности по НДС; формирование уведомлений о контролируемых
							сделках, интеграцию с Единой информационной системой в сфере
							закупок (ЕИС). Также реализован учет НДС при покупке и продаже
							лома и отходов чёрных и цветных металлов, алюминия вторичного и
							его сплавов, сырых шкур животных и макулатуры.
						</p>
						<div className=' mt-8 flex justify-start'>
							<button className='bg-yellow-300 py-1 px-2 mt-2 normal-case border-2 text-lg  hover:bg-red-400 bg-blacktext-slate-300 transition duration-300 text-black rounded-full '>
								начать работу
							</button>
						</div>
					</div>
				</div>
				<div className=' ml-12 mt-8 '>
					<div className='w-[220px] h-[220px]'>
						<Image src={zp} alt={''} className='rounded-lg  ' />
					</div>
					<div>
						<h3 className='text-[24px] mt-8 text-red-500 font-bold  mr-2 '>
							1С:Зарплата и управление персоналом 8
						</h3>

						<p className='text-[18px] text-black  mt-2 items-start  '>
							Все, что нужно для расчета зарплаты и кадрового учета в
							коммерческих и некоммерческих организациях, в том числе в
							унитарных предприятиях разного уровня. Для предприятия любого
							масштаба: от ИП до холдинга из нескольких юридических лиц. Всегда
							актуальная отчетность в ФНС, ПФР, ФСС и Росстат.
						</p>

						<div className=' mt-8 flex justify-start'>
							<button className='bg-yellow-300 py-1 px-2 mt-2 normal-case border-2 text-lg  hover:bg-red-400 bg-blacktext-slate-300 transition duration-300 text-black rounded-full '>
								начать работу
							</button>
						</div>
					</div>
				</div>
				<div className=' ml-12 mt-8 '>
					<div className='w-[220px] h-[220px]'>
						<Image src={firma} alt={''} className='rounded-lg  ' />
					</div>
					<div>
						<h3 className='text-[24px] mt-8 text-red-500 font-bold ml-4'>
							1С:Управление нашей фирмой
						</h3>
						<p className='text-[18px] text-black ml-4 mt-2 items-start  '>
							Современное решение для всех видов малого бизнеса: торговли,
							услуг, производства. Управляйте бизнесом в одной программе: CRM,
							продажи оптом, в розницу и через интернет, закупки, склад,
							персонал, финансы, бизнес-аналитика. Регламентированная отчетность
							для ИП на УСН и патенте, для компаний на общей системе
							налогообложения — обмен с 1С:Бухгалтерией. Решение позволяет легко
							настроить учет под особенности вашего бизнеса.
						</p>
						<div className=' mt-8 flex justify-start'>
							<button className='bg-yellow-300 py-1 px-2 mt-2 normal-case border-2 text-lg  hover:bg-red-400 bg-blacktext-slate-300 transition duration-300 text-black rounded-full '>
								начать работу
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
