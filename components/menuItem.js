import React from 'react';
import Image from 'next/image'
import recommendedIcon from '../public/images/Menu Icon Set.png'
import coldIcon from '../public/images/cold-Icon.png'
import hotIcon from '../public/images/hot-Icon.png'
import styles from '../styles/MenuItem.module.css'

export default function MenuItem({item_image, name, calories, recommended, cold, hot }) {
	return (
		<div className={styles.container}>
			<Image className={styles.item_image} src={item_image }/>
			<span className={styles.name}>{name}</span>
			<span className={styles.calories}>{calories}</span>
			<div className={styles.icon_container}>
				{recommended && <Image className={styles.icon} src={recommendedIcon} />}
				{cold && <Image className={styles.icon} src={coldIcon} />}
				{hot && <Image className={styles.icon} src={hotIcon} />}
			</div>
		</div>
		)
}