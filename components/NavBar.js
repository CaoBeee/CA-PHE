import React from 'react'
import Link from 'next/link'
import styles from '../styles/NavBar.module.css'
import logo from '../public/images/logo_caphe-01.svg'
import Image from 'next/image'
import PropTypes from 'prop-types';

const NavBar = ({ isSticky }) => {
	const navbarClasses = `${styles.navbar} ${isSticky ? styles.navbarScrolled : styles.navbar}`

	const stickyImg = () => {
		return (
			<Link href={'/'}>
				<Image
					src={logo}
					alt='Logo'
				/>
			</Link>)
	}
	return (
		<>
			<nav className={navbarClasses}>
				{isSticky ? stickyImg() : ''} 
				<ul>
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

NavBar.propTypes = {
	isSticky: PropTypes.bool.isRequired,
  };

export default NavBar
