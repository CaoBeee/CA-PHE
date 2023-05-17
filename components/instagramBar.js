import React from 'react'
import styles from '../styles/InstagramBar.module.css'
import Image from 'next/image'
import InstagramLogo from '../public/images/InstagramLogo.png'
import Draggable from 'react-draggable'

const InstagramBar = () => {
	const numImages = 20
	const imagesArr = []
	for (let i = 0; i < numImages; i++) {
		imagesArr.push(
			<Image
				draggable='false'
				src='/../public/images/coffee2.jpeg'
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
				<div>
					<p>Take a peek at the latest updates</p>
				</div>
				<a href='https://www.instagram.com'>
					<Image
						src={InstagramLogo}
						alt=''
						width={120}
						height={120}
					/>
				</a>
			</div>
			<Draggable
				axis='x'
				bounds={{ right: 0, left: -(numImages - 1) * 10 }}
			>
				<div className={styles.gallery}>{imagesArr}</div>
			</Draggable>
		</React.Fragment>
	)
}

export default InstagramBar
