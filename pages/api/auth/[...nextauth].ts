// pages/api/auth/[...nextauth].ts
// import NextAuth from 'next-auth'
// import Providers from 'next-auth/providers'

// export default NextAuth({
// 	providers: [
// 		Providers.OpenID({
// 			id: 'openid',
// 			name: 'OpenID',
// 			scope: 'openid profile email',
// 			endpoint: 'http://frsrv01/a/oid/hs/oid2op',
// 			callbacks: {
// 				async signIn(user, account, profile) {
// 					// Возможно, здесь вам нужно будет сохранить или обработать информацию о пользователе
// 					return true
// 				}
// 			}
// 		})
// 	],
// 	pages: {
// 		signIn: '/auth/signin',
// 		signOut: '/auth/signout',
// 		error: '/auth/error',
// 		verifyRequest: '/auth/verify-request',
// 		newUser: null // Указывайте свой путь, если вы хотите настроить страницу нового пользователя
// 	}
// })
