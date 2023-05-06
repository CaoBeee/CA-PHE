import React from 'react'
import styles from '../styles/InstagramBar.module.css'
import Image from 'next/image'
import InstagramLogo from '../public/images/InstagramLogo.png'

const InstagramBar = () => {
	return (
		<React.Fragment>
			<div className={styles.container}>
				<div>
					<p>Take a peek at the latest updates</p>
				</div>
				<Image
					src={InstagramLogo}
					alt=''
					width={120}
					height={120}
				/>
			</div>
		</React.Fragment>
	)
}

export default InstagramBar
