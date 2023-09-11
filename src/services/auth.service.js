import Cookies from 'js-cookie'

import { $axios } from '../api'
import { COOKIE_USER_TOKEN } from '../constants/cookie.constants'

export const AuthService = {
	main: async (email, password, type) => {
		try {
			const { data } = await $axios.post(`/auth/${type}`, {
				email,
				password
			})

			if (data.token) {
				Cookies.set(COOKIE_USER_TOKEN, data.token)
			}
		} catch (error) {
			throw new Error(error)
		}
	}
}
