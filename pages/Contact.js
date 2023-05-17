import React from 'react'
import Contact from '../components/contact'
import ContactForm from '../components/contactform'
import Container from '../components/Container'

const LandingPage = () => {
	return (
		<React.Fragment>
			<Container>
				<Contact />
				<ContactForm />
			</Container>
		</React.Fragment>
	)
}

export default LandingPage
