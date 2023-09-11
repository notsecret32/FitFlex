import axios from 'axios'
import Cookies from 'js-cookie'
import { COOKIE_USER_TOKEN } from './constants/cookie.constants'

export const $axios = axios.create({
	baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${Cookies.get(COOKIE_USER_TOKEN)}`
	}
})
