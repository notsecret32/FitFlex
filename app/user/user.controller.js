import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'
import { userSelectedFields } from '../utils/user.utils.js'

/**
 * Get user profile
 * @route GET /api/users/profile
 * @access Private
 */
export const getUserProfile = asyncHandler(async (req, res) => {
	const user = await prisma.user.findUnique({
		where: {
			id: req.user.id
		},
		select: userSelectedFields
	})

	res.json(user)
})
