import express from 'express'
import { protect } from '../middleware/auth.middleware.js'
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

export default router
