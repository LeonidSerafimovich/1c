'use client'

import store from '@/components/redux/store'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import { Provider } from 'react-redux'

export default function RootLayout({ children }) {
	return (
		<html lang='RU'>
			<body>
				<Provider store={store}>
					<Navbar />
					{children}
				</Provider>
			</body>
		</html>
	)
}
