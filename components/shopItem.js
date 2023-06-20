import React from 'react';
import Image from 'next/image'
import styles from '../styles/ShopItem.module.css'

export default function ShopItem({ picture, name, price }) {
    return (
        <div className={styles.container}>
            <Image src={picture} />
            <p className={styles.item_name}>{name}</p>
            <p className={styles.price}>{price}</p>
        </div>
        );
}