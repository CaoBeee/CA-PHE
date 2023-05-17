import React from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
	return (
		<div className={styles.contact}>
			<h1>How you can contact us:</h1>
			<p>
				<span>Email:</span> exampleEmail@gmail.com
			</p>
			<p>
				<span>Store Number:</span> 000-000-0000
			</p>
			<p>
				<span>Locations:</span>
			</p>
			<p>123 ABC Street</p>
			<p>SoCal, CA 00000</p>
		</div>
	)
}

export default Contact
