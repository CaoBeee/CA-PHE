import React from 'react'
import Header from '../components/header'
import NavBar from '../components/navbar'
import Contact from '../components/contact'
import ContactForm from '../components/contactform'
import Container from '../components/container'


const LandingPage = () => {
	return (
		<React.Fragment>
			<Header />
			<NavBar />
			<Container>
			<Contact />
			<ContactForm />
			</Container>
		</React.Fragment>
	)
}

export default LandingPage