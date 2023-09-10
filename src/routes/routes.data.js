import Auth from '../pages/auth/Auth'
import Home from '../pages/home/Home'
import NewWorkout from '../pages/new-workout/NewWorkout'
import Profile from '../pages/profile/Profile'

export const routes = [
	{
		path: '/',
		component: Home,
		auth: false
	},
	{
		path: '/auth',
		component: Auth,
		auth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		auth: false
	},
	{
		path: '/profile',
		component: Profile,
		auth: false
	}
]
