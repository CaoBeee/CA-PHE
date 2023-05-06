import React from 'react'
import styles from '../styles/InstagramBar.module.css'
import Image from 'next/image'
import InstagramLogo from '../public/images/InstagramLogo.png'
import Draggable from 'react-draggable'

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

			<Draggable
				className={styles.image}
				axis='x'
			>
				<div className={styles.gallery}>
					<Image
						draggable='false'
						className={styles.image}
						src='/../public/images/coffee2.jpeg'
						alt=''
						width={257}
						height={216}
					/>
					<Image
						draggable='false'
						className={styles.image}
						src='/../public/images/coffee2.jpeg'
						alt=''
						width={257}
						height={216}
					/>
					<Image
						draggable='false'
						className={styles.image}
						src='/../public/images/coffee2.jpeg'
						alt=''
						width={257}
						height={216}
					/>
					<Image
						draggable='false'
						className={styles.image}
						src='/../public/images/coffee2.jpeg'
						alt=''
						width={257}
						height={216}
					/>
					<Image
						draggable='false'
						className={styles.image}
						src='/../public/images/coffee2.jpeg'
						alt=''
						width={257}
						height={216}
					/>
					<Image
						draggable='false'
						className={styles.image}
						src='/../public/images/coffee2.jpeg'
						alt=''
						width={257}
						height={216}
					/>
					<Image
						draggable='false'
						className={styles.image}
						src='/../public/images/coffee2.jpeg'
						alt=''
						width={257}
						height={216}
					/>
					<Image
						draggable='false'
						className={styles.image}
						src='/../public/images/coffee2.jpeg'
						alt=''
						width={257}
						height={216}
					/>
					<Image
						draggable='false'
						className={styles.image}
						src='/../public/images/coffee2.jpeg'
						alt=''
						width={257}
						height={216}
					/>
					<Image
						draggable='false'
						className={styles.image}
						src='/../public/images/coffee2.jpeg'
						alt=''
						width={257}
						height={216}
					/>
					<Image
						draggable='false'
						className={styles.image}
						src='/../public/images/coffee2.jpeg'
						alt=''
						width={257}
						height={216}
					/>
					<Image
						draggable='false'
						className={styles.image}
						src='/../public/images/coffee2.jpeg'
						alt=''
						width={257}
						height={216}
					/>
					<Image
						draggable='false'
						className={styles.image}
						src='/../public/images/coffee2.jpeg'
						alt=''
						width={257}
						height={216}
					/>
					<Image
						draggable='false'
						className={styles.image}
						src='/../public/images/coffee2.jpeg'
						alt=''
						width={257}
						height={216}
					/>
				</div>
			</Draggable>
		</React.Fragment>
	)
}

export default InstagramBar
