import express from 'express'

import { protect } from '../middleware/auth.middleware.js'
import {
	createNewExercise,
	deleteExercise,
	getExercise,
	getExercises,
	updateExercise
} from './exercise.controller.js'
import { createNewExerciseLog } from './log/exercise-log.controller.js'
import { getExerciseLog } from './log/get-exercise-log.controller.js'
import {
	completeExerciseLog,
	updateExerciseLogTime
} from './log/update-exercise-log.controller.js'

const router = express.Router()

// Route: /api/exercises
router.route('/').get(protect, getExercises).post(protect, createNewExercise)

// Route: /api/exercises/:id
router
	.route('/:id')
	.get(protect, getExercise)
	.put(protect, updateExercise)
	.delete(protect, deleteExercise)

// Route: /api/exercises/log/:id
router
	.route('/log/:id')
	.get(protect, getExerciseLog)
	.post(protect, createNewExerciseLog)

// Route: /api/exercises/log/time/:id
router.route('/log/time/:id').put(protect, updateExerciseLogTime)

// Route: /api/exercises/log/complete/:id
router.route('/log/complete/:id').patch(protect, completeExerciseLog)

export default router
