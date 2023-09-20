import { $axios } from '../../api'
import { API_EXERCISES_LOG } from '../../constants/api.constants'

export const ExerciseLogService = {
	getById: async id => {
		try {
			return $axios.get(`${API_EXERCISES_LOG}/${id}`)
		} catch (error) {
			throw new Error(error)
		}
	},
	create: async exerciseId => {
		try {
			return $axios.post(`${API_EXERCISES_LOG}/${exerciseId}`)
		} catch (error) {
			throw new Error(error)
		}
	},
	updateTime: async (timeId, body) => {
		try {
			return $axios.put(`${API_EXERCISES_LOG}/time/${timeId}`, body)
		} catch (error) {
			throw new Error(error)
		}
	},
	complete: async (exerciseLogId, body) => {
		try {
			return $axios.patch(
				`${API_EXERCISES_LOG}/completed/${exerciseLogId}`,
				body
			)
		} catch (error) {
			throw new Error(error)
		}
	}
}
