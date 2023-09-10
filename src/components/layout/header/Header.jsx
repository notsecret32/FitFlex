import { FiArrowLeft } from 'react-icons/fi'

import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<FiArrowLeft color='white' />
			</button>
			<Hamburger />
		</header>
	)
}

export default Header
