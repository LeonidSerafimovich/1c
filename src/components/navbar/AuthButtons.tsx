import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { rootReducer } from '../redux/auth/rootReducer'
import { useRouter } from 'next/dist/client/components/navigation'
import { useEffect, useRef, useState } from 'react'

export default function AuthButtons() {
	const signState = useSelector((state: rootReducer) => state.signup)
	const photoReducer = useSelector((state: rootReducer) => state.photoUser)
	const dispatch = useDispatch()
	const router = useRouter()
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const dropdownRef = useRef(null)

	const handleLogout = () => {
		dispatch({ type: 'LOGOUT_USER' })
		dispatch({ type: 'RESET_AUTH' })
		router.push('/login')
	}

	const toggleDropdown = () => {
		setIsDropdownOpen(prev => !prev)
	}

	const handleDropdownClick = () => {
		router.push('/cabinet')
		setIsDropdownOpen(false)
	}

	const handleClickOutside = event => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setIsDropdownOpen(false)
		}
	}

	useEffect(() => {
		// Добавляем обработчик клика за пределами дропдауна
		document.addEventListener('click', handleClickOutside)
		return () => {
			// Удаляем обработчик при размонтировании компонента
			document.removeEventListener('click', handleClickOutside)
		}
	}, [])

	return (
		<div className='relative flex'>
			{signState.loggedInUser ? (
				<div ref={dropdownRef} className='flex items-center'>
					<p
						className='mr-2 text-red-700 hover:text-red-600 duration-150 uppercase font-bold cursor-pointer'
						onClick={toggleDropdown}
					>
						{signState.loggedInUser.userName}
					</p>
					<div>
						<Link href={'/cabinet'}>
							<img
								src={photoReducer.userPhoto}
								alt='Avatar'
								className='w-12 h-12 rounded-full object-cover ml-2 transition-transform transform hover:scale-110'
							/>
						</Link>
					</div>
					{isDropdownOpen && (
						<div className='absolute normal-case top-12 right-0 bg-[#24262b] w-[200px] border rounded-md shadow-md p-2 pl-4 flex flex-col'>
							<Link
								href='/cabinet'
								onClick={handleDropdownClick}
								className='text-lg text-red-300 hover:text-red-600 transition-transform transform hover:scale-105 duration-300'
							>
								Личный кабинет
							</Link>
							<Link
								href='/license'
								onClick={handleDropdownClick}
								className='text-lg text-red-300 hover:text-red-600 transition-transform transform hover:scale-105 duration-300'
							>
								Мои лицезии
							</Link>
							<button
								onClick={handleLogout}
								className='bg-red-600 normal-case border-2 w-[89px] text-lg mt-6 mb-2 hover:bg-red-400 bg-blacktext-slate-300 transition duration-300 text-black rounded-full  font-bold'
							>
								Выйти
							</button>
						</div>
					)}
				</div>
			) : (
				<Link href='/login'>
					<button className='mr-2 bg-red-500 hover:bg-red-700 text-black border-red-500 duration-300 text-lg rounded-md font-bold px-2 py-1'>
						Войти
					</button>
				</Link>
			)}
		</div>
	)
}
