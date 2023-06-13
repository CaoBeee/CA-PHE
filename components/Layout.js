import React from 'react'
import NavBar from './NavBar.js'
import Header from './Header.js'
import Footer from './Footer.js'
import styles from '../styles/Header.module.css'
import PropTypes from 'prop-types'

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default function Layout({ children }) {
	return (
		<>
			<header className={styles.header}>
					<Header />
					<NavBar />
			</header>
			<main>{children}</main>
			<div>
				<Footer />
			</div>
		</>
	)
}
