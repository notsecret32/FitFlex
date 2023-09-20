import Alert from '../../components/ui/alert/Alert'
import Loader from '../../components/ui/loader/Loader'
import TableHeader from '../../components/ui/table/TableHeader'
import TableRow from '../../components/ui/table/TableRow'
import { useExerciseLog } from '../../hooks/useExerciseLog'
import styles from './ExerciseLog.module.scss'
import ExerciseLogError from './ExerciseLogError'
import HeaderExerciseLog from './HeaderExerciseLog'

const ExerciseLog = () => {
	const { exerciseLog, isLoading, isSuccess } = useExerciseLog()

	return (
		<>
			<HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} />
			<div className='wrapper-inner-page' style={{ padding: '40px 5px' }}>
				<ExerciseLogError errors={[]} />

				<div style={{ width: '90%', margin: '0 auto' }}>{/* errors */}</div>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						<TableHeader />
						{exerciseLog?.times.map((item, index) => (
							<TableRow key={item + index} item={item} />
						))}
					</div>
				)}

				{isSuccess && exerciseLog?.times?.length === 0 && (
					<Alert type='warning' text='Times not found' />
				)}
			</div>
		</>
	)
}

export default ExerciseLog
