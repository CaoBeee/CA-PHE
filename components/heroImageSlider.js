import React from 'react'
import styles from '../styles/heroImageSlider.module.css'
import HeroSlider, {
	Slide,
	// ButtonsNav,
	Nav,
} from 'hero-slider'

// Images
const heroImages = [
	'https://i.imgur.com/BKckKrb.png',
	'https://i.imgur.com/vxIJ1u0.png',
	'https://i.imgur.com/371dZP3.png',
	'https://i.imgur.com/DNnZz60.png',
]

const HeroImageSlider = () => {
	return (
		<HeroSlider
			height='80vh'
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
						backgroundAnimation: 'fade',
						backgroundSize: 'cover',
					}}
				/>
			))}
			<Nav />
		</HeroSlider>
	)
}

export default HeroImageSlider
