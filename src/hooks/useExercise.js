import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { ExerciseService } from '../services/exercise/exercise.service'

export const useExercise = () => {
	const { mutate, isSuccess, error, isLoading } = useMutation(
		['create exercise'],
		body => ExerciseService.create(body),
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

	const onSubmit = body => {
		mutate(body)
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
