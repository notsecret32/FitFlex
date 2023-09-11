import { useNavigate } from 'react-router-dom'

import Layout from '../../components/layout/Layout'
import Button from '../../components/ui/button/Button'
import Statistics from '../../components/ui/statistics/Statistics'
import styles from './Home.module.scss'

const Home = () => {
	const navigate = useNavigate()

	return (
		<Layout bgImage='/images/home-bg.png'>
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>
			<h1 className={styles.heading}>EXERCISE FOR THE SHOULDERS</h1>
			<Statistics />
		</Layout>
	)
}

export default Home
