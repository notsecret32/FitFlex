import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '../pages/not-found/NotFound'
import { routes } from './routes.data'

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* TODO: Auth routes */}
				{routes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component />}
					/>
				))}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
