import axios from 'axios'
import Cookies from 'js-cookie'
import { COOKIE_USER_TOKEN } from './constants/cookie.constants'

const API_URL = 'http://localhost:5000/api'

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${Cookies.get(COOKIE_USER_TOKEN)}`
	}
})
