import asyncHandler from 'express-async-handler'

import { prisma } from '../../prisma.js'
import { calculateMinute } from '../../utils/calculate-minute.utils.js'

/**
 * Get workoutLog
 * @route GET /api/workout/log/:id
 * @access Private
 */
export const getWorkoutLog = asyncHandler(async (req, res) => {
	try {
		const workoutLog = await prisma.workoutLog.findUnique({
			where: {
				id: +req.params.id
			},
			include: {
				workout: {
					include: {
						exercises: true
					}
				},
				exerciseLog: {
					orderBy: {
						id: 'asc'
					},
					include: {
						exercise: true
					}
				}
			}
		})

		res.json({
			...workoutLog,
			minute: calculateMinute(workoutLog.workout.exercises.length)
		})
	} catch (error) {
		res.status(404)
		throw new Error('WorkoutLog not found')
	}
})
