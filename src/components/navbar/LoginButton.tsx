// 'use client'

// import React, { useState, useEffect } from 'react'
// import { Issuer, TokenSet, CallbackParamsType } from 'openid-client'

// const LoginButton: React.FC = () => {
// 	const [user, setUser] = useState<TokenSet | null>(null)

// 	const handleLogin = async () => {
// 		const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
//       <xrds:XRDS xmlns:xrds="xri://$xrds" xmlns="xri://$xrd*($v*2.0)">
//       <XRD>
//       <Service priority='0'>
//       <Type>http://specs.openid.net/auth/2.0/server</Type>
//       <URI>http://frsrv01/a/oid/hs/oid2op</URI>
//       </Service>
//       </XRD>
//       </xrds:XRDS>`

// 		const parser = new DOMParser()
// 		const xmlDoc = parser.parseFromString(xmlData, 'text/xml')
// 		const uriElement = xmlDoc.querySelector('URI')

// 		if (uriElement) {
// 			const openIdProviderUrl = '"http://frsrv01/a/oid/hs/oid2op";'
// 			// const openIdProviderUrl: string | null = uriElement.textContent

// 			// Создание экземпляра клиента OpenID с использованием полученного URI
// 			const issuer = await Issuer.discover(openIdProviderUrl!)
// 			const client = new issuer.Client({
// 				client_id: 'your-client-id',
// 				client_secret: 'your-client-secret',
// 				redirect_uris: ['your-redirect-uri']
// 			})

// 			const authorizationUrl = client.authorizationUrl({
// 				response_type: 'code',
// 				scope: 'openid profile'
// 			})

// 			window.location.href = authorizationUrl
// 		} else {
// 			console.error('URI element not found in XRDS data')
// 		}
// 	}

// 	const handleLogout = () => {
// 		setUser(null)
// 	}

// 	const handleRedirect = async () => {
// 		const params: CallbackParamsType = {} // Создаем объект параметров обратного вызова

// 		// Получаем параметры из строки запроса и добавляем их к объекту params
// 		new URLSearchParams(window.location.search).forEach((value, key) => {
// 			params[key] = value
// 		})

// 		const issuer = await Issuer.discover('http://frsrv01/a/oid/hs/oid2op')
// 		const client = new issuer.Client({
// 			client_id: 'your-client-id',
// 			client_secret: 'your-client-secret',
// 			redirect_uris: ['your-redirect-uri']
// 		})

// 		const tokenSet = await client.callback('your-callback-uri', params)

// 		setUser(tokenSet)
// 	}

// 	useEffect(() => {
// 		handleRedirect()
// 	}, [])

// 	if (user) {
// 		return (
// 			<div>
// 				<button onClick={handleLogout}>Выйти</button>
// 			</div>
// 		)
// 	} else {
// 		return (
// 			<div>
// 				<button onClick={handleLogin}>Войти</button>
// 			</div>
// 		)
// 	}
// }

// export default LoginButton

// // import React, { useState, useEffect } from 'react'
// // import { Issuer, TokenSet, CallbackParamsType } from 'openid-client'

// // const App: React.FC = () => {
// // 	const [user, setUser] = useState<TokenSet | null>(null)

// // 	const handleLogin = async () => {
// // 		const issuer = await Issuer.discover('http://frsrv01/a/oid/hs/oid2op')
// // 		const client = new issuer.Client({
// // 			client_id: 'your-client-id',
// // 			client_secret: 'your-client-secret',
// // 			redirect_uris: ['your-redirect-uri']
// // 		})

// // 		const authorizationUrl = client.authorizationUrl({
// // 			response_type: 'code',
// // 			scope: 'openid profile'
// // 		})

// // 		window.location.href = authorizationUrl
// // 	}

// // 	const handleLogout = () => {
// // 		setUser(null)
// // 	}

// // 	const handleRedirect = async () => {
// // 		const params: CallbackParamsType = {} // Создаем объект параметров обратного вызова

// // 		// Получаем параметры из строки запроса и добавляем их к объекту params
// // 		new URLSearchParams(window.location.search).forEach((value, key) => {
// // 			params[key] = value
// // 		})

// // 		const issuer = await Issuer.discover('http://frsrv01/a/oid/hs/oid2op')
// // 		const client = new issuer.Client({
// // 			client_id: 'your-client-id',
// // 			client_secret: 'your-client-secret',
// // 			redirect_uris: ['your-redirect-uri']
// // 		})

// // 		const tokenSet = await client.callback('your-callback-uri', params)

// // 		setUser(tokenSet)
// // 	}

// // 	useEffect(() => {
// // 		handleRedirect()
// // 	}, [])

// // 	if (user) {
// // 		return (
// // 			<div>
// // 				<h1>Привет</h1>
// // 				<button onClick={handleLogout}>Выйти</button>
// // 			</div>
// // 		)
// // 	} else {
// // 		return (
// // 			<div>
// // 				<button onClick={handleLogin}>Войти</button>
// // 			</div>
// // 		)
// // 	}
// // }

// // export default App
