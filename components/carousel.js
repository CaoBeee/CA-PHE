import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/carousel.module.css';

export default function ImageCarousel(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const slides = [];

    for (let i = 0; i < props.numSlides; i++) {
        slides.push(<Carousel.Item className={styles.carouselItem} key={i} className={styles.carouselItem}>
            <img
                className={styles.carouselImage}
                src={props.images[i]}
                alt={props.alt[i]}
            />
            <Carousel.Caption className={styles.caption}>
                {props.caption[i]}
                {props.body[i]}
            </Carousel.Caption>
        </Carousel.Item>);
    }

    return (
        <Carousel className={styles.carousel} activeIndex={index} onSelect={handleSelect} fade interval={10000} variant="dark">
            {slides}
        </Carousel>
    );
}