import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/images/logo_caphe-01.svg'
import styles from '../styles/Header.module.css'
import NavBar from './NavBar'

const Header = ({ isSticky }) => {
	return (
		<header className={styles.header}>
			<Link href='/'>
				<Image
					src={logo}
					alt='Logo'
					height={500}
					width={500}
				></Image>
			</Link>
			<NavBar isSticky={isSticky}></NavBar>
		</header>
	)
}

export default Header
