import Alert from '../../components/ui/alert/Alert'

const ExerciseLogError = ({ errors }) => {
	return (
		<div style={{ width: '90%', margin: '0 auto' }}>
			{errors.map((error, index) => (
				<Alert key={error + index} type='error' text={error} />
			))}
		</div>
	)
}

export default ExerciseLogError
