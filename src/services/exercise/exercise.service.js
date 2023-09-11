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
	create: async (name, times, iconPath) => {
		try {
			return $axios.post(API_EXERCISES, {
				name,
				times,
				iconPath
			})
		} catch (error) {
			throw new Error(error)
		}
	},
	update: async (id, name, times, iconPath) => {
		try {
			return $axios.put(`${API_EXERCISES}/${id}`, {
				name,
				times,
				iconPath
			})
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
