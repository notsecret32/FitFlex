import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'

/**
 * Get workout
 * @route GET /api/workouts/:id
 * @access Private
 */
export const getWorkout = asyncHandler(async (req, res) => {
	try {
		const workout = await prisma.workout.findUnique({
			where: {
				id: +req.params.id
			},
			include: {
				exercises: true
			}
		})

		// Approximate time to complete the exercises
		const minutes = Math.ceil(workout.exercises.length * 3.7)

		res.json({ ...workout, minutes })
	} catch (error) {
		res.status(404)
		throw new Error('Workout not found!')
	}
})

/**
 * Get workouts
 * @route GET /api/workouts
 * @access Private
 */
export const getWorkouts = asyncHandler(async (req, res) => {
	const workouts = await prisma.workout.findMany({
		orderBy: {
			createdAt: 'desc'
		},
		include: {
			exercises: true
		}
	})

	res.json(workouts)
})

/**
 * Create new workout
 * @route POST /api/workouts
 * @access Private
 */
export const createNewWorkout = asyncHandler(async (req, res) => {
	const { name, exerciseIds } = req.body

	const workout = await prisma.workout.create({
		data: {
			name,
			exercises: {
				connect: exerciseIds.map(id => ({ id: +id }))
			}
		}
	})

	res.json(workout)
})

/**
 * Update workout
 * @route PUT /api/workouts/:id
 * @access Private
 */
export const updateWorkout = asyncHandler(async (req, res) => {
	const { name, exerciseIds } = req.body

	try {
		const workout = await prisma.workout.update({
			where: {
				id: +req.params.id
			},
			data: {
				name,
				exercises: {
					set: exerciseIds.map(id => ({ id: +id }))
				}
			}
		})

		res.json(workout)
	} catch (error) {
		res.status(404)
		throw new Error('Workout not found!')
	}
})

/**
 * Delete workout
 * @route DELETE /api/workout/:id
 * @access Private
 */
export const deleteWorkout = asyncHandler(async (req, res) => {
	try {
		const workout = await prisma.workout.delete({
			where: {
				id: +req.params.id
			}
		})

		res.json({ message: 'Workout deleted!', workout })
	} catch (error) {
		res.status(404)
		throw new Error('Workout not found')
	}
})
