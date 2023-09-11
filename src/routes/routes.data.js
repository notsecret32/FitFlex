import Auth from '../pages/auth/Auth'
import Home from '../pages/home/Home'
import NewExercise from '../pages/new-exercise/NewExercise'
import NewWorkout from '../pages/new-workout/NewWorkout'
import Profile from '../pages/profile/Profile'

export const routes = [
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/',
		component: Home,
		isAuth: true
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
	},
	{
		path: '/new-exercise',
		component: NewExercise,
		isAuth: true
	}
]
