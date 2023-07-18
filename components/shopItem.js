import React from 'react';
import Image from 'next/image'
import styles from '../styles/ShopItem.module.css'
import PropTypes from 'prop-types'

export default function ShopItem({ picture, name, price,
    // category
}) {
    return (
        <div className={styles.container}>
            <Image src={picture} />
            <p className={styles.item_name}>{name}</p>
            <p className={styles.price}>{price}</p>
        </div>
        );
}

ShopItem.propTypes = {
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  };