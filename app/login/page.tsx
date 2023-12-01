import LoginForm from '@/components/login/LoginForm'
import React from 'react'

export const metadata = {
	title: 'Login',
	description: 'description for the Login page'
}

export default function Home() {
	return (
		<div className='mt-[100px] bg-gradient-to-r from-[#24262b] to-white'>
			<LoginForm />
		</div>
	)
}
