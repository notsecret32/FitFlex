import { $axios } from '../../api'
import { API_WORKOUTS_LOG } from '../../constants/api.constants'

export const WorkoutLogService = {
	getById: async id => {
		try {
			return $axios.get(`${API_WORKOUTS_LOG}/${id}`)
		} catch (error) {
			throw new Error(error)
		}
	},
	create: async workoutId => {
		try {
			return $axios.post(`${API_WORKOUTS_LOG}/${workoutId}`)
		} catch (error) {
			throw new Error(error)
		}
	},
	complete: async (id, body) => {
		try {
			return $axios.patch(`${API_WORKOUTS_LOG}/completed/${id}`, body)
		} catch (error) {
			throw new Error(error)
		}
	}
}
