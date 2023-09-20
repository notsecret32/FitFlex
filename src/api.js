import axios from 'axios'
import Cookies from 'js-cookie'
import { COOKIE_USER_TOKEN } from './constants/cookie.constants'
import { getServerUrl } from './utils/get-server-url.utils'

export const $axios = axios.create({
	baseURL: `${getServerUrl()}/api`,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${Cookies.get(COOKIE_USER_TOKEN)}`
	}
})
