import React from 'react'
import styles from '../styles/Contact.module.css'
import Image from 'next/image'
import green from '../public/images/green-circle.png'
import brown from '../public/images/brown-circle.png'

const Contact = () => {
	return (
		<>
			<div className={styles.main}>
				<Image
					id={styles.green}
					src={green}
				/>
				<div className={styles.contactUsContainer}>
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
				<div className={styles.contactFormContainer}>
					<h1>Want to let us know something about the store?</h1>
					<form
						id='contact-form'
						action=''
					>
						<fieldset>
							<label
								htmlFor='name'
								id='name-label'
							>
								<input
									id='name'
									type='text'
									placeholder='Your Name'
									name='name'
									required
								/>
							</label>
							<label
								htmlFor='email'
								id='email-label'
							>
								<input
									id='email'
									type='email'
									placeholder='Your Email'
									name='email'
									required
								></input>
							</label>
							<label
								htmlFor='feedback'
								id='feedback-label'
							>
								<textarea
									id='feedback'
									type='textarea'
									placeholder='We would love to hear from our community so if you have any positive feedback or concerns send us a message here or walk in and ask with our team'
									name='feedback'
									required
								></textarea>
							</label>
							<input
								id='submit'
								type='submit'
								value='Send Message'
							/>
						</fieldset>
					</form>
				</div>
				<Image
					id={styles.brown}
					src={brown}
				/>
			</div>
		</>
	)
}

export default Contact
