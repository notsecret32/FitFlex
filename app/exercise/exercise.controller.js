import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'

/**
 * Get exercise
 * @route GET /api/exercises/:id
 * @access Private
 */
export const getExercise = asyncHandler(async (req, res) => {
	try {
		const exercise = await prisma.exercise.findUnique({
			where: {
				id: +req.params.id
			}
		})

		res.json(exercise)
	} catch (error) {
		res.status(404)
		throw new Error('Exercise not found')
	}
})

/**
 * Get exercises
 * @route GET /api/exercises
 * @access Private
 */
export const getExercises = asyncHandler(async (req, res) => {
	const exercises = await prisma.exercise.findMany({
		orderBy: {
			createdAt: 'desc'
		}
	})
	res.json(exercises)
})

/**
 * Create new exercise
 * @route POST /api/exercises
 * @access Private
 */
export const createNewExercise = asyncHandler(async (req, res) => {
	const { name, times, iconPath } = req.body

	const exercise = await prisma.exercise.create({
		data: {
			name,
			times,
			iconPath
		}
	})

	res.json(exercise)
})

/**
 * Update exercise
 * @route PUT /api/exercises/:id
 * @access Private
 */
export const updateExercise = asyncHandler(async (req, res) => {
	const { name, times, iconPath } = req.body

	if (!req.body || Object.keys(req.body).length === 0) {
		res.status(400)
		throw new Error('There are no fields to change')
	}

	try {
		const exercise = await prisma.exercise.update({
			where: {
				id: +req.params.id
			},
			data: {
				name,
				times,
				iconPath
			}
		})

		res.json(exercise)
	} catch (error) {
		res.status(404)
		throw new Error('Exercise not found')
	}
})

/**
 * Delete exercise
 * @route DELETE /api/exercises/:id
 * @access Private
 */
export const deleteExercise = asyncHandler(async (req, res) => {
	try {
		const exercise = await prisma.exercise.delete({
			where: {
				id: +req.params.id
			}
		})

		res.json({ message: 'Exercise deleted!', exercise })
	} catch (error) {
		res.status(404)
		throw new Error('Exercise not found')
	}
})
