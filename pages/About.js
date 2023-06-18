import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import pouring from "../public/images/pouring.png"
import filter from "../public/images/Coffee Filter.png";
import styles from '../styles/About.module.css'

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.first_block}>
				<Image src={pouring} />
				<div>
					<h1>We bring the rich flavors and vibrant culture of Vietnam to your cup!</h1>
					<p className={styles.first_block_body }>At CA PHE, we take pride in our handcrafted coffee creations that are meticulously prepared by our skilled baristas. Every sip tells a story of the aromatic beans carefully sourced from the highlands of Vietnam, where the perfect balance of taste and quality is nurtured.
						<br />
						<br/>
						Immerse yourself in the cozy ambiance of our cafes, where modern aesthetics blend harmoniously with traditional elements. Whether you're seeking a tranquil corner to relax or a buzzing atmosphere to meet friends, our spaces are designed to embrace the true essence of Vietnamese cafe culture.
					</p>
					<p className={styles.first_block_foot}>
						<text id={styles.thirty}>30+</text>
						
						<text id={styles.years }> years of serving customers like you!</text>
					</p>
				</div>
			</div>
			<div className={styles.second_block}>
				<p>Indulge in our signature Vietnamese coffee blends, brewed using traditional methods that have benn passed down through generations. From the robust and bold flavors of our traditional CA PHE SUA DA to the smooth and velvety notes of our CA PHE TRUNG, each sip is an invitation to a sensory adventure.</p>
				<Image src={filter} />
			</div>
			<div className={styles.third_block}>
				<div className={styles.third_block_body}>
					<p>Join us on this journey of taste and culture. Come and experience the allure of Vietnamese coffee like never before!</p>
				</div>
				<Link href='/Menu'><button>To Menu</button></Link>
			</div>
		</div>
	)
};

export default About