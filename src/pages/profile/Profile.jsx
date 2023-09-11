import cn from 'clsx'

import stylesLayout from '../../components/layout/Layout.module.scss'
import Header from '../../components/layout/header/Header'
import Loader from '../../components/ui/loader/Loader'
import Statistics from '../../components/ui/statistics/Statistics'
import { useProfile } from '../../hooks/useProfile'
import styles from './Profile.module.scss'

const Profile = () => {
	const { data, isLoading } = useProfile()

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{
					backgroundImage: `url('/images/profile-bg.jpg')`,
					height: 356
				}}
			>
				<Header />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img
								src={data?.images}
								alt={data?.name}
								height={65}
								draggable={false}
							/>
							<h1 className={stylesLayout.heading}>{data?.name}</h1>
						</>
					)}
				</div>

				<Statistics />
			</div>
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div className={styles.before_after}>
					<div>
						<div className={styles.heading}>Before</div>
						<img src='/images/before.jpg' alt='Before' draggable={false} />
					</div>
					<div>
						<div className={styles.heading}>After</div>
						<img src='/images/after.jpg' alt='After' draggable={false} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Profile
