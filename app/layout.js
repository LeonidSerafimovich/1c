// Ваш файл RootLayout
'use client'

import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import { SessionProvider } from 'next-auth/react'

export default function RootLayout({ children, session }) {
	return (
		<html lang='RU'>
			<body>
				<SessionProvider session={session}>
					<Navbar />
					<div className='mt-16'>{children}</div>
				</SessionProvider>
			</body>
		</html>
	)
}
