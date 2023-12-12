import {
	UserManager,
	WebStorageStateStore,
	UserManagerSettings
} from 'oidc-client'

const settings: UserManagerSettings = {
	authority: 'http://specs.openid.net/auth/2.0/server/auth',
	client_id: 'lZyLcBpD0Bjq94N7p9FQ6p0b5oIMwwBQ',
	redirect_uri: 'http://localhost:3000/callback',
	response_type: 'id_token token',
	scope: 'openid profile email',
	userStore: new WebStorageStateStore({ store: window.localStorage })
}

const userManager = new UserManager(settings)

export default userManager
