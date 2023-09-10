import {
	Route,
	createBrowserRouter,
	createRoutesFromElements
} from 'react-router-dom'
import NotFound from '../pages/not-found/NotFound'
import { routes } from './routes.data'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/'>
			{routes.map(route => (
				<Route
					key={route.path}
					path={route.path}
					element={<route.component />}
				/>
			))}

			<Route path='*' element={<NotFound />} />
		</Route>
	)
)
