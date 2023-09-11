import Cookies from 'js-cookie'
import { $axios } from '../api'

export const AuthService = {
	main: async (email, password, type) => {
		try {
			const { data } = await $axios.post(`/auth/${type}`, {
				email,
				password
			})

			if (data.token) {
				Cookies.set('fitflex', data.token)
			}
		} catch (error) {
			throw new Error(error)
		}
	}
}
