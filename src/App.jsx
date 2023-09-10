import { RouterProvider } from 'react-router-dom'

import Layout from './components/layout/Layout'
import { router } from './routes/Routes'

const App = () => {
	return (
		<Layout>
			<RouterProvider router={router} />
		</Layout>
	)
}

export default App
