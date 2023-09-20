import cn from 'clsx'

import stylesLayout from '../../components/layout/Layout.module.scss'
import Header from '../../components/layout/header/Header'
import { getServerUrl } from '../../utils/get-server-url.utils'
import styles from './ExerciseLog.module.scss'

const HeaderExerciseLog = ({ exerciseLog, isSuccess }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/ex-bg-1.jpg')`,
				height: 250
			}}
		>
			<Header
				backLink={
					isSuccess ? `/workouts/${exerciseLog.workoutLogId}` : '/workouts'
				}
			/>

			{isSuccess && (
				<div className={styles.heading}>
					<img
						src={`${getServerUrl()}${exerciseLog.exercise.iconPath}`}
						height={34}
						alt=''
						draggable={false}
					/>
					<h1 className={stylesLayout.heading}>{exerciseLog.exercise.name}</h1>
				</div>
			)}
		</div>
	)
}

export default HeaderExerciseLog
