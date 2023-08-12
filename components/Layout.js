import React, { useEffect, useState } from 'react'
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
			const scrollThreshold = 200
			const isScrolled = window.scrollY > scrollThreshold && scrollThreshold !== 235
			setIsSticky(isScrolled)
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
