import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.css'
import Layout from '../components/Layout'
import PropTypes from 'prop-types'

export default function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

MyApp.propTypes = {
	Component: PropTypes.func,
	pageProps: PropTypes.object,
}
