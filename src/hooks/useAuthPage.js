import { useMutation } from '@tanstack/react-query'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { AuthService } from '../services/auth.service'
import { useAuth } from './useAuth'

export const useAuthPage = () => {
	const [type, setType] = useState('login')
	const navigate = useNavigate()

	const { isAuth, setIsAuth } = useAuth()

	useEffect(() => {
		if (isAuth) {
			navigate('/')
		}
	}, [isAuth, navigate])

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isLoading } = useMutation(
		['auth'],
		({ email, password }) => AuthService.main(email, password, type),
		{
			onSuccess: () => {
				setIsAuth(true)
				reset()
				navigate('/')
			}
		}
	)

	const onSubmit = data => {
		mutate(data)
	}

	return useMemo(
		() => ({
			setType,
			register,
			handleSubmit,
			errors,
			isLoading,
			onSubmit
		}),
		[errors, isLoading]
	)
}
