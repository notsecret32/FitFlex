import Layout from '../../components/layout/Layout'
import Alert from '../../components/ui/alert/Alert'
import Button from '../../components/ui/button/Button'
import Field from '../../components/ui/field/Field'
import Loader from '../../components/ui/loader/Loader'

import { Link } from 'react-router-dom'
import Select from '../../components/ui/select/Select'
import { useWorkout } from '../../hooks/useWorkout'

const NewWorkout = () => {
	const {
		control,
		error,
		errors,
		handleSubmit,
		isLoading,
		isSuccess,
		onSubmit,
		register
	} = useWorkout()

	return (
		<>
			<Layout
				bgImage='images/new-workout-bg.jpg'
				heading='Create new workout'
			/>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Workout created successfully' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						options={{
							required: 'Name is required'
						}}
						type='text'
						placeholder='Enter name'
						autoComplete='off'
					/>

					<Link to='/new-exercise' className='dark-link'>
						Add new exercise
					</Link>

					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}

					<Select control={control} />

					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}

export default NewWorkout
