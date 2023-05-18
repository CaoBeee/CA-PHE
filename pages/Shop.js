import React, { useState } from 'react'
import ImageCarousel from '../components/carousel'
import ShopGallery1 from '../components/shopGallery1'
import ShopGallery2 from '../components/shopGallery2'
import styles from '../styles/Shop.module.css'
import buttons from '../styles/CategoryButtons.module.css'

const Shop = () => {
	const [shop, setShop] = useState(0)
	const selectedColor = '#788264'
	const notSelectedColor = '#ADC178'
	const images = [
		'https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=675%2Cq=85%2Cwidth=1200/wp-content/uploads/international-cat-day1-scaled.jpg',
		'https://media.cnn.com/api/v1/images/stellar/prod/230426141158-sand-cat-9.jpg?c=original&q=w_1280,c_fill',
		'https://penntoday.upenn.edu/sites/default/files/2022-03/Cat-COVID-social.jpeg',
	]
	const alt = [
		'An image showing our new "Rapspberry Blossom" seasonal spring coffee.',
		'An image depicting traditionally brewed Vietnamese Coffee.',
		'An image depicting coconut iced coffee.',
	]
	return (
		<div className={styles.container}>
			<ImageCarousel
				numSlides={3}
				images={images}
				alt={alt}
			/>
			<div className={buttons.container}>
				<div>
					<button
						id={buttons.all}
						className={buttons.menu_button}
						style={{ backgroundColor: (shop === 0 && selectedColor) || notSelectedColor }}
						onClick={() => {
							setShop(0)
						}}
					>
						All
					</button>

					<button
						id={buttons.coffee}
						className={buttons.menu_button}
						style={{ backgroundColor: (shop === 1 && selectedColor) || notSelectedColor }}
						onClick={() => {
							setShop(1)
						}}
					>
						Outerwear
					</button>

					<button
						id={buttons.seasonal}
						className={buttons.menu_button}
						style={{ backgroundColor: (shop === 2 && selectedColor) || notSelectedColor }}
						onClick={() => {
							setShop(2)
						}}
					>
						Shorts
					</button>
				</div>
				<div>
					<button
						id={buttons.tea}
						className={buttons.menu_button}
						style={{ backgroundColor: (shop === 3 && selectedColor) || notSelectedColor }}
						onClick={() => {
							setShop(3)
						}}
					>
						Tops
					</button>

					<button
						id={buttons.milk_tea}
						className={buttons.menu_button}
						style={{ backgroundColor: (shop === 4 && selectedColor) || notSelectedColor }}
						onClick={() => {
							setShop(4)
						}}
					>
						Shoes
					</button>

					<button
						id={buttons.other}
						className={buttons.menu_button}
						style={{ backgroundColor: (shop === 5 && selectedColor) || notSelectedColor }}
						onClick={() => {
							setShop(5)
						}}
					>
						Pants
					</button>
				</div>
			</div>
			{shop === 0 && <ShopGallery1 />}
			{shop === 1 && <ShopGallery2 />}
			{shop === 2 && <ShopGallery1 />}
			{shop === 3 && <ShopGallery2 />}
			{shop === 4 && <ShopGallery1 />}
			{shop === 5 && <ShopGallery2 />}
		</div>
	)
}

export default Shop
