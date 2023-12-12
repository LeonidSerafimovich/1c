// import React from 'react'
// import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'

// const LoginButton = () => {
// 	const { loginWithRedirect } = useAuth0()

// 	return (
// 		<>
// 			<Auth0Provider domain={''} clientId={''}>
// 				<button onClick={() => loginWithRedirect()}>Log In</button>
// 			</Auth0Provider>
// 		</>
// 	)
// }

// export default LoginButton

// import React from 'react'
// import { useForm, SubmitHandler } from 'react-hook-form'
// import { EmailPassword } from '../types/auth/AuthDataType'
// import { loginUser } from '../redux/auth/authActions'
// import { useDispatch } from 'react-redux'
// import LableTopInput from '../inputs/LableTopInput'

// function LoginForm() {
// 	const {
// 		handleSubmit,
// 		register: formRegister,
// 		formState: { errors }
// 	} = useForm<EmailPassword>()

// 	const dispatch = useDispatch()

// 	const onSubmit: SubmitHandler<EmailPassword> = data => {
// 		dispatch(loginUser(data.email))
// 	}

// 	return (
// 		<div className='wrapper mt-[0px]  flex items-center justify-center'>
// 			<div className='bg-white border-2 rounded-lg p-4 text-center'>
// 				<h1 className='text-3xl font-medium mb-4'>Личный кабинет</h1>
// 				<form onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>
// 					<LableTopInput
// 						{...formRegister('email', {
// 							required: 'введи email'
// 						})}
// 						id='email'
// 						type='email'
// 						placeholder='email'
// 						label='Введите email'
// 					/>
// 					{errors.email && (
// 						<div className='text-red-600 ml-0 '>{errors.email.message}</div>
// 					)}
// 					<LableTopInput
// 						{...formRegister('password', {
// 							required: 'введи пароль'
// 						})}
// 						id='password'
// 						type='password'
// 						placeholder='Password'
// 						label='Введите пароль '
// 					/>
// 					{errors.password && (
// 						<div className='text-red-600 ml-0 '>{errors.password.message}</div>
// 					)}

// 					<button
// 						type='submit'
// 						className='bg-blue-500 text-white text-[18px] hover:text-black py-2 px-4 rounded-md hover:bg-yellow-400 transition duration-300'
// 					>
// 						Войти
// 					</button>
// 				</form>
// 				<a
// 					href='#'
// 					className='text-blue-500 hover:text-[#3a51d6] hover:translate-x-2 transition text-left text-sm block mt-4'
// 				>
// 					Забыли пароль ?
// 				</a>
// 				<a
// 					href='/signup'
// 					className='text-blue-500 text-sm hover:translate-x-2 hover:text-[#3a51d6] transition text-left block mt-2'
// 				>
// 					Зарегистрироваться
// 				</a>
// 			</div>
// 		</div>
// 	)
// }

// export default LoginForm
