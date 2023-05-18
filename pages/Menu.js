import React, { useState } from 'react'
import styles from '../styles/Menu.module.css'
import buttons from '../styles/CategoryButtons.module.css'
import ImageCarousel from '../components/carousel'
import MenuGallery1 from '../components/MenuGallery1'
import MenuGallery2 from '../components/MenuGallery2'

const Menu = () => {
	const [Menu, setMenu] = useState(0)
	const selectedColor = '#788264'
	const notSelectedColor = '#ADC178'
	const images = [
		'https://wallpaperaccess.com/full/6106014.jpg',
		'https://www.bhg.com/thmb/ESgGfUPV_VTB3px1hJ0czL7uLZY=/1866x0/filters:no_upscale():strip_icc()/vietnamese-coffee-with-phin-drip-445288c363544f31b8045b8c5fbefa5c.jpg',
		'https://images.ctfassets.net/iq805lbjmkyy/15Cq67x9ip2dJJFkjQYVQG/cc8a6e5108a3d1766352a44f8c0b586b/Large-A_CoffeePlatform_CoffeePlatform_Master_www_Image____Drinks_Barista_Coconut_NA_Bottle_1l_HR_-2.jpg?w=1920&q=80',
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
						style={{ backgroundColor: (Menu === 0 && selectedColor) || notSelectedColor }}
						onClick={() => {
							setMenu(0)
						}}
					>
						All
					</button>

					<button
						id={buttons.coffee}
						className={buttons.menu_button}
						style={{ backgroundColor: (Menu === 1 && selectedColor) || notSelectedColor }}
						onClick={() => {
							setMenu(1)
						}}
					>
						Coffee
					</button>

					<button
						id={buttons.seasonal}
						className={buttons.menu_button}
						style={{ backgroundColor: (Menu === 2 && selectedColor) || notSelectedColor }}
						onClick={() => {
							setMenu(2)
						}}
					>
						Seasonal
					</button>
				</div>
				<div>
					<button
						id={buttons.tea}
						className={buttons.menu_button}
						style={{ backgroundColor: (Menu === 3 && selectedColor) || notSelectedColor }}
						onClick={() => {
							setMenu(3)
						}}
					>
						Teas
					</button>

					<button
						id={buttons.milk_tea}
						className={buttons.menu_button}
						style={{ backgroundColor: (Menu === 4 && selectedColor) || notSelectedColor }}
						onClick={() => {
							setMenu(4)
						}}
					>
						Milk Teas
					</button>

					<button
						id={buttons.other}
						className={buttons.menu_button}
						style={{ backgroundColor: (Menu === 5 && selectedColor) || notSelectedColor }}
						onClick={() => {
							setMenu(5)
						}}
					>
						Other
					</button>
				</div>
			</div>
			{Menu === 0 && <MenuGallery1 />}
			{Menu === 1 && <MenuGallery2 />}
			{Menu === 2 && <MenuGallery1 />}
			{Menu === 3 && <MenuGallery2 />}
			{Menu === 4 && <MenuGallery1 />}
			{Menu === 5 && <MenuGallery2 />}
		</div>
	)
}

export default Menu
