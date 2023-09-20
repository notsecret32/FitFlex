import Layout from '../../../components/layout/Layout'
import Alert from '../../../components/ui/alert/Alert'
import Loader from '../../../components/ui/loader/Loader'
import { useWorkouts } from '../../../hooks/useWorkouts'
import styles from '../detail/Workout.module.scss'
import WorkoutItem from './WorkoutItem'

const ListWorkouts = () => {
	const { mutate, data, error, isLoading, isSuccess, isSuccessMutate } =
		useWorkouts()

	return (
		<>
			<Layout bgImage='images/workout-bg.png' heading='Workout list' />

			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccessMutate && <Alert text='Workout log created' />}
				{isLoading && <Loader />}
				{isSuccess && (
					<div className={styles.wrapper}>
						{data.map(workout => (
							<WorkoutItem key={workout.id} mutate={mutate} workout={workout} />
						))}
					</div>
				)}

				{isSuccess && data?.length === 0 && (
					<Alert type='warning' text='Workouts not found' />
				)}
			</div>
		</>
	)
}

export default ListWorkouts
