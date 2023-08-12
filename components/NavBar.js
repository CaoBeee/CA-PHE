import React from 'react'
import Link from 'next/link'
import styles from '../styles/NavBar.module.css'
import logo from '../public/images/logo_caphe-01.svg'
import Image from 'next/image'
import PropTypes from 'prop-types'

const NavBar = ({ isSticky }) => {
	const navbarClasses = `${isSticky ? styles.toggleNavbar : ''}`

	const stickyImg = () => {
		return (
			<Link href={'/'}>
				<Image
					src={logo}
					alt='Logo'
				/>
			</Link>
		)
	}
	return (
		<>
			<nav className={styles.navbar}>
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
			{isSticky ? (
				<nav className={`${styles.navbarScrolled} ${styles.toggleNavbar}`}>
					{stickyImg()}
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
			) : (
				<nav className={`${styles.navbarScrolled}`}>
					{stickyImg()}
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
			)}
		</>
	)
}

NavBar.propTypes = {
	isSticky: PropTypes.bool.isRequired,
}

export default NavBar
