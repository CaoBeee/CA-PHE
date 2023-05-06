import React from 'react'
import styles from '../styles/Contact.module.css'

const ContactForm = () => {
	return (
            <div class={styles.contact}>
            <h1>Want to let us know something about the store?</h1>
            <form id="contact-form" action="">
                <fieldset>
                    <p>
                        <label for="name" id="name-label">
                        <input id="name" type="text" placeholder="Your Name" name="name" required>
                        </input>
                    </label></p>
                    <p>
                        <label for="email" id="email-label">
                        <input id="email" type="email" placeholder="Your Email" name="email" required>
                        </input>
                    </label>
                    </p>
                    <p>
                        <label for="feedback" id="feedback-label">
                        <input id="feedback" type="textarea" placeholder="We would love to hear from our community so if you have any positive feedback or concerns send us a message here or walk in and ask with our team" name="feedback" required></input>
                    </label>
                    </p>
                    <input id="submit" type="submit" value="Send Message" />
                </fieldset>
            </form>
        </div>
	)
}

export default ContactForm