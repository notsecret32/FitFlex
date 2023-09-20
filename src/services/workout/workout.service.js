import { $axios } from '../../api'
import { API_WORKOUTS } from '../../constants/api.constants'

export const WorkoutService = {
	getAll: async () => {
		try {
			return $axios.get(API_WORKOUTS)
		} catch (error) {
			throw new Error(error)
		}
	},
	getById: async id => {
		try {
			return $axios.get(`${API_WORKOUTS}/${id}`)
		} catch (error) {
			throw new Error(error)
		}
	},
	create: async body => {
		try {
			return $axios.post(API_WORKOUTS, body)
		} catch (error) {
			throw new Error(error)
		}
	},
	update: async (id, body) => {
		try {
			return $axios.put(`${API_WORKOUTS}/${id}`, body)
		} catch (error) {
			throw new Error(error)
		}
	},
	delete: async id => {
		try {
			return $axios.delete(`${API_WORKOUTS}/${id}`)
		} catch (error) {
			throw new Error(error)
		}
	}
}
