import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerTop}>
				<div className={styles.store}>
					Store
					<div>
						<p>Address Number</p>
					</div>
				</div>

				<div className={styles.email}>
					Email
					<div>
						<p>ca-phe@email.com</p>
					</div>
				</div>

				<div className={styles.help}>
					Help
					<div>
						<p>FAQ</p>
					</div>
				</div>
			</div>
			<div className={styles.footerBottom}>
				<div className={styles.storeHours}>
					Store Hours
					<div className='store-hours'>Mon-Fri 9am-5pm</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
