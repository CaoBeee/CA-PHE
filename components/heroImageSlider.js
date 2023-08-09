import React from 'react'
import styles from '../styles/heroImageSlider.module.css'
import HeroSlider, { Slide, Nav } from 'hero-slider'

// Images
const heroImages = [
	'https://i.imgur.com/gKYqxsk.jpg',
	'https://i.imgur.com/YHZx4Fq.jpg',
	'https://i.imgur.com/BvXESCt.jpg',
	'https://i.imgur.com/MHwZSgO.jpg',
]

const HeroImageSlider = () => {
	return (
		<HeroSlider
			height='90vh'
			autoplay
			controller={{
				initialSlide: 1,
				slidingDuration: 1000,
				slidingDelay: 0,
			}}
			className={styles.slider}
		>
			{heroImages.map((image, index) => (
				<Slide
					key={index}
					navDescription={`Slide ${index + 1}`}
					background={{
						backgroundImageSrc: image,
						backgroundAnimation: 'wipe',
						backgroundSize: 'cover',
					}}
				/>
			))}
			<Nav />
		</HeroSlider>
	)
}

export default HeroImageSlider
