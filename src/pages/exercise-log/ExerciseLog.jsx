import { useParams } from 'react-router-dom'

const ExerciseLog = () => {
	const { id } = useParams()

	return <div>ExerciseLog {id}</div>
}

export default ExerciseLog
