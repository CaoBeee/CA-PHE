import React from 'react'
import Image from 'next/image'
import styles from '../styles/ShopItem.module.css'
import PropTypes from 'prop-types'

export default function ShopItem({ picture, name, price }) {
	return (
		<div className={styles.container}>
			<Image
				width='550'
				height='350'
				src={picture}
			/>
			<p className={styles.item_name}>{name}</p>
			<p className={styles.price}>{price}</p>
		</div>
	)
}

ShopItem.propTypes = {
	picture: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
}
