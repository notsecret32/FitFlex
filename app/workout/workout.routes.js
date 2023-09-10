import express from 'express'

import { protect } from '../middleware/auth.middleware.js'
import { getWorkoutLog } from './log/get-workout-log.controller.js'
import { completeWorkoutLog } from './log/update-workout-log.controller.js'
import { createNewWorkoutLog } from './log/workout-log.controller.js'
import {
	createNewWorkout,
	deleteWorkout,
	getWorkout,
	getWorkouts,
	updateWorkout
} from './workout.controller.js'

const router = express.Router()

// Route: /api/workouts
router.route('/').get(protect, getWorkouts).post(protect, createNewWorkout)

// Route: /api/workouts/:id
router
	.route('/:id')
	.get(protect, getWorkout)
	.put(protect, updateWorkout)
	.delete(protect, deleteWorkout)

// Route: /api/workouts/log/:id
router
	.route('/log/:id')
	.get(protect, getWorkoutLog)
	.post(protect, createNewWorkoutLog)

// Route: /api/workouts/log/complete/:id
router.route('/log/complete/:id').patch(protect, completeWorkoutLog)

export default router
