import styles from '../../../pages/exercise-log/ExerciseLog.module.scss'

const tableHeaders = ['Previous', 'Repeat & weight', 'Completed']

const TableHeader = ({ headers = tableHeaders }) => {
	return (
		<div className={styles.row}>
			{headers.map(title => (
				<div key={title}>
					<span>{title}</span>
				</div>
			))}
		</div>
	)
}

export default TableHeader
