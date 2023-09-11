import styles from './Field.module.scss'

const Field = ({ register, name, options, error, ...rest }) => {
	return (
		<div style={{ marginTop: '10px' }}>
			<input {...register(name, options)} {...rest} className={styles.input} />
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}

export default Field
