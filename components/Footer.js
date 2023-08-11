import React from 'react'
import styles from '../styles/Footer.module.css'
import footerCoffeeIcon from '../public/images/footerCoffeeIcon.png'
import Image from 'next/image'
import twitter from '../public/images/twitterIcon.svg'
import facebook from '../public/images/facebookIcon.svg'
import instagram from '../public/images/instagramIcon.svg'

const Footer = () => {
	return (
		<>
			<footer className={styles.footer}>
				<div className={styles.wave}>
					<svg
						data-name='Layer 1'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 1200 120'
						preserveAspectRatio='none'
					>
						<path
							d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
							className={styles.shapeFill}
						></path>
					</svg>
				</div>
				<div className={styles.container}>
					<div className={styles.column}>
						<Image
							src={footerCoffeeIcon}
							alt='coffee icon'
						/>
						<p className={styles.coffeeIconText}>Follow</p>
						<div className={styles.socialsContainer}>
							<a href='//www.twitter.com'>
								<Image
									src={twitter}
									alt='twitter icon'
								/>
							</a>
							<a href='//www.facebook.com'>
								<Image
									src={facebook}
									alt='facebook icon'
								/>
							</a>
							<a href='//www.instagram.com'>
								<Image
									src={instagram}
									alt='instagram icon'
								/>
							</a>
						</div>
					</div>
					<div className={styles.column}>
						<div>
							<h3 className={styles.header3}>Store Hours</h3>
							<div
								className={styles.lineThree}
								style={{
									display: 'flex',
									width: '101px',
									height: '0px',
									border: '2px white solid',
									float: 'left',
								}}
							></div>
						</div>
						<div className={styles.storeHours}>
							<div className={styles.daysContainer}>
								<div className={styles.days}>Mon-Fri</div>
								<br />
								<div className={styles.days}>Saturday</div>
								<br />
								<div className={styles.days}>Sunday</div>
								<br />
							</div>
							<div className={styles.HoursContainer}>
								<div className={styles.hours}>7:00-18:00</div>
								<br />
								<div className={styles.hours}>7:00-18:00</div>
								<br />
								<div className={styles.hours}>Closed</div>
							</div>
						</div>
					</div>
					<div className={styles.column}>
						<div className={styles.column}>
							<div>
								<h3 className={styles.header3}>Contact Us</h3>
								<div
									className={styles.lineThree}
									style={{
										display: 'flex',
										width: '101px',
										height: '1px',
										border: '2px white solid',
										float: 'left',
									}}
								></div>
							</div>
							<div className={styles.contactUsText}>
								24680 California Drive, <br />
								Garden Grove, CA 92844
							</div>
							<br />
							<div className={styles.contactUsText}>hello@caphe.com</div>
							<br />
							<div className={styles.contactUsText}>(714) 246-3579</div>
						</div>
					</div>
					<div className={styles.column}>
						<div>
							<h3 className={styles.header3}>Newsletter</h3>
							<div
								className={styles.lineThree}
								style={{
									display: 'flex',
									width: '101px',
									height: '0px',
									border: '2px white solid',
									float: 'left',
								}}
							></div>
						</div>
						<div style={{ position: 'relative' }}>
							<input
								className={styles.newsletterInput}
								type='email'
								placeholder='Enter your email'
							/>
							<button className={styles.newsletterInputBtn}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='28'
									height='29'
									viewBox='0 0 28 29'
									fill='none'
								>
									<path
										d='M27 1L1 14.3571L10.5789 16.1381M27 1L23.5789 27.7143L10.5789 16.1381M27 1L10.5789 16.1381M10.5789 16.1381V25.9333L15.0247 20.097'
										stroke='white'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
