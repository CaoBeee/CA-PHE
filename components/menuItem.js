import React from 'react';
import Image from 'next/image'
import recommendedIcon from '../public/images/Menu Icon Set.png'
import coldIcon from '../public/images/cold-Icon.png'
import hotIcon from '../public/images/hot-Icon.png'
import styles from '../styles/MenuItem.module.css'

export default function MenuItem(props) {
	return (
		<div className={styles.container}>
			<Image className={styles.item_image} src={props.item_image }/>
			<span className={styles.name}>{props.name}</span>
			<span className={styles.calories}>{props.calories}</span>
			<div className={styles.icon_container}>
				{props.recommended && <Image className={styles.icon} src={recommendedIcon} />}
				{props.cold && <Image className={styles.icon} src={coldIcon} />}
				{props.hot && <Image className={styles.icon} src={hotIcon} />}
			</div>
		</div>
		)
}