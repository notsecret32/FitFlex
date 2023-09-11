import { useNavigate } from 'react-router-dom'

import Layout from '../../components/layout/Layout'
import Button from '../../components/ui/button/Button'
import { useAuth } from '../../hooks/useAuth'
import styles from './Home.module.scss'

const Home = () => {
	const { isAuth } = useAuth()
	const navigate = useNavigate()

	return (
		<Layout bgImage='/images/home-bg.png'>
			<Button clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}>
				{isAuth ? 'New' : 'Sign In'}
			</Button>
			<h1 className={styles.heading}>EXERCISE FOR THE SHOULDERS</h1>
		</Layout>
	)
}

export default Home
