import React from 'react'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
	return (
		<React.Fragment>
			<ul class={styles.navbar}>
				<li>
					<a href='/'>Menu</a>
				</li>
				<li>
					<a href='/shop'>Shop</a>
				</li>
				<li>
					<a href='/about'>About</a>
				</li>
				<li>
					<a href='/Contact'>Contact</a>
				</li>
			</ul>
		</React.Fragment>
	)
}

export default NavBar
