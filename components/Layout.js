import React from 'react'
import NavBar from './NavBar.js'
import Header from './Header.js'
import Footer from './Footer.js'
import headerStyles from '/styles/Header.module.css'
import PropTypes from 'prop-types'

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default function Layout({ children }) {
	return (
		<>
			<div className={headerStyles.headerBG}>
				<div className={headerStyles.header}>
					<Header />
					<NavBar />
				</div>
			</div>
			<main>{children}</main>
			<div>
				<Footer />
			</div>
		</>
	)
}
