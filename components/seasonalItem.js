import React from 'react'
import styles from '../styles/SeasonalItem.module.css'
import Image from 'next/image'

const SeasonalItem = () => {
	return (
		<React.Fragment>
			<div className={styles.Container}>
				<div className={styles.header}>
					<h2>This Season's Items</h2>
					<button>
						<a href='/Menu'>Browse Menu</a>
					</button>
				</div>

				<div className={styles.ImageContainer}>
					<Image
						src='/../public/images/seasonal1.jpeg'
						alt=''
						width={464}
						height={464}
					/>
					<Image
						src='/../public/images/seasonal2.jpeg'
						alt=''
						width={464}
						height={464}
					/>
				</div>
			</div>
		</React.Fragment>
	)
}

export default SeasonalItem
