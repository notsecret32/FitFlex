import { FiArrowLeft } from 'react-icons/fi'
import { SlUser } from 'react-icons/sl'
import { useLocation, useNavigate } from 'react-router-dom'

import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = ({ backLink = '' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button onClick={() => navigate(backLink || '/')}>
					<FiArrowLeft color='white' fontSize={30} />
				</button>
			) : (
				<button onClick={() => navigate('/profile')}>
					<SlUser fill='#fff' fontSize={30} />
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header
