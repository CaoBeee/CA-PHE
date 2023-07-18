import React from 'react'

import HeroSlider, {
    Slide,
    ButtonsNav,
    Nav,
  } from "hero-slider";

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
        height="100vh"
            autoplay
            controller={{
                initialSlide: 1,
                slidingDuration: 500,
                slidingDelay: 0,
            }}
        >
        {heroImages.map((image, index) => (
        <Slide
          key={index}
          navDescription={`Slide ${index + 1}`}
          background={{
            backgroundImageSrc: image,
            backgroundAnimation: 'fade',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
      ))}
          <Nav />
        </HeroSlider>
      );
}

export default HeroImageSlider
