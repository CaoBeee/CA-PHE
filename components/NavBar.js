import React from 'react'
import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
	return (
		<>
			<ul className={styles.navbar}>
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
		</>
	)
}

export default NavBar
