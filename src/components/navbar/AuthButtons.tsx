import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0()

	return (
		<button
			className='bg-[#B39C39] normal-case border-2 hover:border-[#B39C39] text-lg  hover:bg-white text-white duration-300 hover:text-[#B39C39] rounded-md px-2'
			onClick={() => loginWithRedirect()}
		>
			Войти
		</button>
	)
}

export default LoginButton
