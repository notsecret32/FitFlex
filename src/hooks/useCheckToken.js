import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { COOKIE_USER_TOKEN } from '../constants/cookie.constants'
import { useAuth } from './useAuth'

export const useCheckToken = () => {
	const { isAuth, setIsAuth } = useAuth()
	const { pathname } = useLocation()

	useEffect(() => {
		const token = Cookies.get(COOKIE_USER_TOKEN)
		if (!token) setIsAuth(false)
	}, [pathname, isAuth, setIsAuth])
}
