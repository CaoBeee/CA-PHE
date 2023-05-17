import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.css'
import Layout from '../components/Layout'
import PropTypes from 'prop-types'

MyApp.propTypes = {
	Component: PropTypes.Component,
	pageProps: PropTypes.PropTypes,
}

export default function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
