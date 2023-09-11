import { FiArrowLeft } from 'react-icons/fi'
import { SlUser } from 'react-icons/sl'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = ({ backLink = '' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	const handlePathname = () => {
		if (isAuth) {
			return backLink || '/'
		}

		if (pathname === '/profile' && isAuth) {
			return '/'
		}

		return '/auth'
	}

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname === '/' && isAuth ? (
						<button onClick={() => navigate('/profile')}>
							<SlUser fill='#fff' fontSize={30} />
						</button>
					) : (
						<button onClick={() => navigate(handlePathname())}>
							<FiArrowLeft color='white' fontSize={30} />
						</button>
					)}
					{isAuth && <Hamburger />}
				</>
			)}
		</header>
	)
}

export default Header
