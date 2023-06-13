import React from 'react'
import Link from 'next/link'
import styles from '../styles/NavBar.module.css'
import Header from './Header'

const NavBar = ({ isSticky }) => {
	const navbarClasses = `${styles.navbar} ${isSticky ? styles.navbarScrolled : styles.navbar}`

	const stickyImg = () => {
		return	<Header />
	}
	return (
		<>
		<nav className={navbarClasses}>
				<ul>
					{isSticky ? stickyImg() : ''}
				<li>
					<Link href='/Menu'>Menu</Link>
				</li>
				<li>
					<Link href='/Shop'>Shop</Link>
				</li>
				<li>
					<Link href='/About'>About</Link>
				</li>
				<li>
					<Link href='/Contact'>Contact</Link>
				</li>
			</ul>
		</nav>
		</>
	)
}

export default NavBar
