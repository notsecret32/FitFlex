import asyncHandler from 'express-async-handler'

import { prisma } from '../../prisma.js'

/**
 * Create new workoutLog
 * @route POST /api/workouts/log/:id
 * @access Private
 */
export const createNewWorkoutLog = asyncHandler(async (req, res) => {
	const id = +req.params.id

	const workout = await prisma.workout.findUnique({
		where: {
			id: id
		},
		include: {
			exercises: true
		}
	})

	if (!workout) {
		res.status(404)
		throw new Error('Workout not found!')
	}

	try {
		const workoutLog = await prisma.workoutLog.create({
			data: {
				user: {
					connect: {
						id: req.user.id
					}
				},
				workout: {
					connect: {
						id: id
					}
				},
				exerciseLogs: {
					create: workout.exercises.map(exercise => ({
						user: {
							connect: {
								id: req.user.id
							}
						},
						exercise: {
							connect: {
								id: exercise.id
							}
						},
						times: {
							create: Array.from({ length: exercise.times }, () => ({
								weight: 0,
								repeat: 0
							}))
						}
					}))
				}
			},
			include: {
				exerciseLogs: {
					include: {
						times: true
					}
				}
			}
		})

		res.json(workoutLog)
	} catch (error) {
		res.status(400)
		throw new Error(error)
	}
})
