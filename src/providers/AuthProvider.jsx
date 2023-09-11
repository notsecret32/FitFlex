import Cookies from 'js-cookie'
import { createContext, useState } from 'react'

import { COOKIE_USER_TOKEN } from '../constants/cookie.constants'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(!!Cookies.get(COOKIE_USER_TOKEN))

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
