import { faker } from '@faker-js/faker'
import { hash, verify } from 'argon2'
import asyncHandler from 'express-async-handler'

import { prisma } from '../prisma.js'
import { generateToken } from '../utils/generate-token.utils.js'
import { userSelectedFields } from '../utils/user.utils.js'

/**
 * Auth user.
 * @route POST /api/auth/login
 * @access Public
 */
export const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	const user = await prisma.user.findUnique({
		where: {
			email
		}
	})

	if (!user) {
		res.status(404)
		throw new Error('User not found!')
	}

	try {
		const isValidPassword = await verify(user.password, password)

		if (user && isValidPassword) {
			const token = generateToken(user.id)
			res.json({ user, token })
		} else {
			res.status(401)
			throw new Error('Email and password are not correct')
		}

		res.json(user)
	} catch (error) {
		res.status(400)
		throw new Error('Something went wrong')
	}
})

/**
 * Register user.
 * @route POST /api/auth/register
 * @access Public
 */
export const registerUser = asyncHandler(async (req, res) => {
	try {
		const { email, password } = req.body

		const isHaveUser = await prisma.user.findUnique({
			where: {
				email
			}
		})

		if (isHaveUser) {
			res.status(400)
			throw new Error('User already exists')
		}

		const user = await prisma.user.create({
			data: {
				email,
				password: await hash(password),
				name: faker.person.fullName(),
				images: faker.image.avatar()
			},
			select: userSelectedFields
		})

		const token = generateToken(user.id)

		res.json({ user, token })
	} catch (error) {
		res.status(400)
		throw new Error('Something went wrong')
	}
})
