import asyncHandler from 'express-async-handler'

import { prisma } from '../../prisma.js'

/**
 * Create new exerciseLog
 * @route POST /api/exercises/log/:id
 * @access Private
 */
export const createNewExerciseLog = asyncHandler(async (req, res) => {
	const id = +req.params.id

	const exercise = await prisma.exercise.findUnique({
		where: {
			id: id
		}
	})

	if (!exercise) {
		res.status(404)
		throw new Error('ExerciseLog not found!')
	}

	try {
		let timesDefault = []

		for (let i = 0; i < exercise.times; i++) {
			timesDefault.push({
				weight: 0,
				repeat: 0
			})
		}

		const exerciseLog = await prisma.exerciseLog.create({
			data: {
				user: {
					connect: {
						id: req.user.id
					}
				},
				exercise: {
					connect: {
						id: id
					}
				},
				times: {
					createMany: {
						data: timesDefault
					}
				}
			},
			include: {
				times: true
			}
		})

		res.json(exerciseLog)
	} catch (error) {
		res.status(400)
		throw new Error('Something went wrong')
	}
})
