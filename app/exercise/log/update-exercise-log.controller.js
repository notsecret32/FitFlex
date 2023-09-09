import asyncHandler from 'express-async-handler'

import { prisma } from '../../prisma.js'

/**
 * Update exercise time
 * @route PUT /api/exercise/log/time/:id
 * @access Private
 */
export const updateExerciseLogTime = asyncHandler(async (req, res) => {
	const { weight, repeat, isCompleted } = req.body

	try {
		const exerciseLogTime = await prisma.exerciseTime.update({
			where: {
				id: +req.params.id
			},
			data: {
				weight,
				repeat,
				isCompleted
			}
		})

		res.json(exerciseLogTime)
	} catch (error) {
		res.status(404)
		throw new Error('Exercise log time not found')
	}
})

/**
 * Update status of complete exercise log
 * @route PATCH /api/exercise/log/complete
 * @access Private
 */
export const completeExerciseLog = asyncHandler(async (req, res) => {
	try {
		const exerciseLog = await prisma.exerciseLog.update({
			where: {
				id: +req.params.id
			},
			data: {
				isCompleted: req.body.isCompleted
			},
			include: {
				exercise: true,
				workoutLog: true
			}
		})

		res.json(exerciseLog)
	} catch (error) {
		res.status(400)
		throw new Error('exerciseLog not found')
	}
})
