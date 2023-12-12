'use client'

import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import { Auth0Provider } from '@auth0/auth0-react'

export default function RootLayout({ children }) {
	return (
		<html lang='RU'>
			<body>
				<Auth0Provider
					domain='http://specs.openid.net/auth/2.0/server'
					clientId='lZyLcBpD0Bjq94N7p9FQ6p0b5oIMwwBQ'
					authorizationParams={{
						// authorizationUrl: '',
						redirectUrl: 'http://localhost:3000/'
					}}
				>
					<Navbar />
					<div className='mt-16'>{children}</div>
				</Auth0Provider>
			</body>
		</html>
	)
}
