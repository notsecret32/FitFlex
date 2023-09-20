import { useQuery } from '@tanstack/react-query'
import { Fragment } from 'react'
import { useParams } from 'react-router-dom'

import Loader from '../../../components/ui/loader/Loader'
import { WorkoutLogService } from '../../../services/workout/workout-log.service'
import ExerciseItem from './ExerciseItem'
import HeaderWorkout from './HeaderWorkout'
import styles from './Workout.module.scss'

const Workout = () => {
	const { id } = useParams()
	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery(['get workout log', id], () => WorkoutLogService.getById(id), {
		select: ({ data }) => data
	})

	return (
		<>
			<HeaderWorkout isSuccess={isSuccess} workoutLog={workoutLog} />
			<div className='wrapper-inner-page' style={{ padding: '15px 30px' }}>
				<div style={{ width: '90%', margin: '0 auto' }}>{/* error */}</div>
			</div>
			{isLoading ? (
				<Loader />
			) : (
				<div className={styles.wrapper}>
					{workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
						<Fragment key={exerciseLog.id}>
							<ExerciseItem exerciseLog={exerciseLog} />
							{index % 2 === 0 && index !== exerciseLog.length - 1 && (
								<div className={styles.line} />
							)}
						</Fragment>
					))}
				</div>
			)}
		</>
	)
}

export default Workout
