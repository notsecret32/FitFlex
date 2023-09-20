import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useParams } from 'react-router-dom'

import stylesLayout from '../../components/layout/Layout.module.scss'
import Header from '../../components/layout/header/Header'
import { WorkoutLogService } from '../../services/workout/workout-log.service'
import styles from './Workout.module.scss'

const Workout = () => {
	const { id } = useParams()
	const { data: workoutLog, isSuccess } = useQuery(
		['get workout log', id],
		() => WorkoutLogService.getById(id),
		{
			select: ({ data }) => data
		}
	)

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/workout-bg.png')`,
					height: 356
				}}
			>
				<Header backLink='/workouts' />

				{isSuccess && (
					<div>
						<time className={styles.time}>{workoutLog.minute + ' min.'}</time>
						<h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
					</div>
				)}
			</div>
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>{/* error */}</div>
			</div>
		</>
	)
}

export default Workout
