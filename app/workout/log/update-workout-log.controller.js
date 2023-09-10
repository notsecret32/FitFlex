import asyncHandler from 'express-async-handler'

import { prisma } from '../../prisma.js'

/**
 * Update status of complete workout log
 * @route PATCH /api/workout/log/complete/:id
 * @access Private
 */
export const completeWorkoutLog = asyncHandler(async (req, res) => {
	try {
		const workoutLog = await prisma.workoutLog.update({
			where: {
				id: +req.params.id
			},
			data: {
				isCompleted: req.body.isCompleted
			},
			include: {
				workout: true
			}
		})

		res.json(workoutLog)
	} catch (error) {
		res.status(400)
		throw new Error('workoutLog not found')
	}
})
