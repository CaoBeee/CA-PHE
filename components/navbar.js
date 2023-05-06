import React from 'react'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
	return (
		<React.Fragment>
			<ul className={styles.navbar}>
				<li>
					<a href='/'>Menu</a>
				</li>
				<li>
					<a href='/Shop'>Shop</a>
				</li>
				<li>
					<a href='/About'>About</a>
				</li>
				<li>
					<a href='/Contact'>Contact</a>
				</li>
			</ul>
		</React.Fragment>
	)
}

export default NavBar
