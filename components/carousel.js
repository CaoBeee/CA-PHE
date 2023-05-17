import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styles from '../styles/Carousel.module.css'
import PropTypes from 'prop-types'

ImageCarousel.propTypes = {
	numSlides: PropTypes.number,
	images: PropTypes.arrayOf(PropTypes.string),
	alt: PropTypes.arrayOf(PropTypes.string),
	caption: PropTypes.arrayOf(PropTypes.object),
	body: PropTypes.arrayOf(PropTypes.object),
}

export default function ImageCarousel(props) {
	const [index, setIndex] = useState(0)

	const handleSelect = selectedIndex => {
		setIndex(selectedIndex)
	}

	const slides = []

	for (let i = 0; i < props.numSlides; i++) {
		slides.push(
			<Carousel.Item
				className={styles.carouselItem}
				key={i}
			>
				<img
					className={styles.carouselImage}
					src={props.images[i]}
					alt={props.alt[i]}
				/>
				<Carousel.Caption className={styles.caption}>
					{props.caption[i]}
					{props.body[i]}
				</Carousel.Caption>
			</Carousel.Item>
		)
	}

	return (
		<Carousel
			className={styles.carousel}
			activeIndex={index}
			onSelect={handleSelect}
			fade
			interval={10000}
			variant='dark'
		>
			{slides}
		</Carousel>
	)
}
