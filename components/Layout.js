import React, { useEffect, useState } from 'react'
import NavBar from './NavBar.js'
import Header from './Header.js'
import Footer from './Footer.js'
import PropTypes from 'prop-types'

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default function Layout({ children }) {
	const [isSticky, setIsSticky] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollThreshold = 100
			const isScrolled = window.scrollY > scrollThreshold
			setIsSticky(isScrolled)
			document.documentElement.classList.toggle('scrolled', isScrolled)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<Header isSticky={isSticky} />
			<main>{children}</main>
			<Footer />
		</>
	)
}
