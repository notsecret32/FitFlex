import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { ExerciseService } from '../services/exercise/exercise.service'

export const useExercise = () => {
	const { mutate, isSuccess, error, isLoading } = useMutation(
		['create exercise'],
		({ name, times, iconPath }) =>
			ExerciseService.create(name, times, iconPath),
		{
			onSuccess: () => {
				reset()
			}
		}
	)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = ({ name, times, iconPath }) => {
		mutate({ name, times, iconPath })
	}

	return useMemo(
		() => ({
			isSuccess,
			error,
			isLoading,
			register,
			handleSubmit,
			errors,
			control,
			onSubmit
		}),
		[errors, isLoading]
	)
}
