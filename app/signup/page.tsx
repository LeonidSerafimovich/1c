import SignUpForm from '@/components/signup/SignupForm'
import React from 'react'

export const metadata = {
	title: 'Sign up',
	description: 'description for the Sign up page'
}

export default function Home() {
	return (
		<div>
			<SignUpForm />
		</div>
	)
}
