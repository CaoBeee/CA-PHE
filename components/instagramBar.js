import React from 'react'
import styles from '../styles/InstagramBar.module.css'
import Image from 'next/image'
import InstagramLogo from '../public/images/InstagramLogo.png'
import coffee from '../public/images/coffee.jpeg'

const InstagramBar = () => {
	const numImages = 10

	const imagesArr = []

	for (let i = 0; i < numImages; i++) {
		imagesArr.push(
			<Image
				src={coffee}
				alt='coffee'
				width={200}
				height={200}
				key={i}
			/>
		)
	}
	return (
		<React.Fragment>
			<div className={styles.container}>
				<a href='https://www.instagram.com'>
					<Image
						src={InstagramLogo}
						alt=''
						width={120}
						height={120}
					/>
				</a>
				<div>
					<p>Take a peek at the latest updates on our instagram!</p>
				</div>
			</div>
			<div className={styles.gallery}>{imagesArr}</div>
		</React.Fragment>
	)
}

export default InstagramBar
