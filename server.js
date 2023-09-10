import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import path from 'path'

import authRouter from './app/auth/auth.routes.js'
import exerciseRouter from './app/exercise/exercise.routes.js'
import { errorHandler, notFound } from './app/middleware/error.middleware.js'
import { prisma } from './app/prisma.js'
import userRouter from './app/user/user.routes.js'
import workoutRouter from './app/workout/workout.routes.js'

dotenv.config()

const app = express()

async function main() {
	if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

	app.use(express.json())

	const __dirname = path.resolve()

	app.use('/uploads', express.static(path.join(__dirname, '/uploads/')))

	app.use('/api/auth', authRouter)
	app.use('/api/users', userRouter)
	app.use('/api/exercises', exerciseRouter)
	app.use('/api/workouts', workoutRouter)

	app.use(notFound)
	app.use(errorHandler)

	const PORT = process.env.PORT || 5000

	app.listen(
		PORT,
		console.log(
			`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
		)
	)
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
