import { $axios } from '../../api'
import { API_EXERCISES } from '../../constants/api.constants'

export const ExerciseService = {
	getAll: async () => {
		try {
			return $axios.get(API_EXERCISES)
		} catch (error) {
			throw new Error(error)
		}
	},
	create: async body => {
		try {
			return $axios.post(API_EXERCISES, body)
		} catch (error) {
			throw new Error(error)
		}
	},
	update: async (id, body) => {
		try {
			return $axios.put(`${API_EXERCISES}/${id}`, body)
		} catch (error) {
			throw new Error(error)
		}
	},
	delete: async id => {
		try {
			return $axios.delete(`${API_EXERCISES}/${id}`)
		} catch (error) {
			throw new Error(error)
		}
	}
}
