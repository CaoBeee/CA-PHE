import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import logo from '../public/images/logo_caphe-01.svg'

const Header = () => {
	return (
		<div className={styles.header}>
			<Link href='/'>
				<Image
					src={logo}
					alt='Logo'
				></Image>
			</Link>
		</div>
	)
}

export default Header
