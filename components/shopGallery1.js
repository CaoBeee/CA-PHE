import React from 'react'
import Link from 'next/link'
import styles from '../styles/gallery.module.css'

export default function shopGallery1() {
	return (
		<div className={styles.gallery_container}>
			<div className={styles.gallery_item}>
				<Link href='/Shop'>
					<img
						src='https://images.squarespace-cdn.com/content/v1/58e3cd71b8a79bb4b85f2249/1683680734696-2CKUNS49NPLUGYFUJQ2D/Princess_BlkDMH.jpg?format=1500w'
						alt=''
					/>
				</Link>
			</div>
			<div className={styles.gallery_item}>
				<Link href='/Shop'>
					<img
						src='https://nationaltoday.com/wp-content/uploads/2020/10/Global-Cat-Day-1.jpg'
						alt=''
					/>
				</Link>
			</div>
			<div className={styles.gallery_item}>
				<Link href='/Shop'>
					<img
						src='https://hips.hearstapps.com/hmg-prod/images/large-cat-breed-1553197454.jpg'
						alt=''
					/>
				</Link>
			</div>
			<div className={styles.gallery_item}>
				<Link href='/Shop'>
					<img
						src='https://www.marthastewart.com/thmb/_kw9q7qT7lwUbQXIj2KAeYtVY1M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/yellow-cat-playing-toy-4XFTyv4-KSL8G8VqtTWszB-0322-c641e08159ae4a96a93ba3ebc3c043da.jpg'
						alt=''
					/>
				</Link>
			</div>
			<div className={styles.gallery_item}>
				<Link href='/Shop'>
					<img
						src='https://images.squarespace-cdn.com/content/v1/58e3cd71b8a79bb4b85f2249/1683680442432-FF14SIFJWNOPY11I9LCC/AJ_BlkGrayTab.jpg?format=1500w'
						alt=''
					/>
				</Link>
			</div>
			<div className={styles.gallery_item}>
				<Link href='/Shop'>
					<img
						src='https://cdn.rescuegroups.org/6685/pictures/animals/19242/19242832/93902467.jpg'
						alt=''
					/>
				</Link>
			</div>
		</div>
	)
}
