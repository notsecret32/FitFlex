import { $axios } from '../api'
import { API_USERS } from '../constants/api.constants'

export const UserService = {
	getProfile: async () => {
		try {
			return $axios.get(`${API_USERS}/profile`)
		} catch (error) {
			throw new Error(error)
		}
	}
}
