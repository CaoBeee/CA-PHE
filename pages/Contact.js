import React from 'react'
import Image from 'next/image';
import Contact from '../components/contact'
import ContactForm from '../components/contactform'
import Container from '../components/Container'
import green from '../public/images/green-circle.png'
import brown from '../public/images/brown-circle.png'
import styles from '../styles/Contact.module.css'

const LandingPage = () => {
	return (
		<React.Fragment>
			<Container>
				<Image id={styles.green} src={green }/>
				<Contact />
				<ContactForm />
				<Image id={styles.brown} src={brown }/>
			</Container>
		</React.Fragment>
	)
}

export default LandingPage
