import Auth from '../pages/auth/Auth'
import Home from '../pages/home/Home'
import NewWorkout from '../pages/new-workout/NewWorkout'
import Profile from '../pages/profile/Profile'

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: false
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	}
]
