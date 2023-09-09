import express from 'express'

import { protect } from '../middleware/auth.middleware.js'
import {
	createNewExercise,
	deleteExercise,
	getExercise,
	getExercises,
	updateExercise
} from './exercise.controller.js'

const router = express.Router()

// Route: /api/exercises
router.route('/').get(protect, getExercises).post(protect, createNewExercise)

// Route: /api/exercises/:id
router
	.route('/:id')
	.get(protect, getExercise)
	.put(protect, updateExercise)
	.delete(protect, deleteExercise)

export default router
