import React from 'react'
import Header from '../components/header'
import NavBar from '../components/navbar'
import ImageCarousel from '../components/carousel'
import styles from '../styles/Index.module.css'
import headerStyles from '../styles/Header.module.css'

const LandingPage = () => {
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
	const caption = [
		<h3>Raspberry Blossom</h3>,
		<h3>Traditional Vietnamese Coffee</h3>,
		<h3>Coconut Iced Coffee</h3>,
	]
	const body = [
		<p>
			{' '}
			Introducing our new seasonal spring coffee, bursting with bright and fresh flavors to awaken
			your senses! This delightful brew features a light-bodied blend of premium Arabica beans
			infused with the essence of sweet and tangy raspberry, complemented by subtle notes of creamy
			vanilla and a hint of citrus. Sip on this refreshing coffee and savor the taste of spring in
			every cup. Perfect for enjoying on a sunny day or to brighten up your morning routine. Come in
			and try our new seasonal spring coffee today.
		</p>,
		<p>
			Transport yourself to the bustling streets of Vietnam with our authentic Robusta Vietnamese
			coffee. Made with 100% Robusta beans, this bold brew is rich, intense, and packs a caffeine
			punch to get you through the day. Served in the traditional Vietnamese style, with a stainless
			steel filter and sweetened condensed milk, this coffee has a distinct flavor profile of dark
			chocolate, caramel, and nutty undertones. Perfectly balanced and smooth, it's a true coffee
			lover's delight. Come in and experience the bold taste of Vietnam with our Robusta Vietnamese
			coffee.
		</p>,
		<p>
			Our Coconut Iced Coffee is a tropical twist on the classic Vietnamese iced coffee. We start
			with our signature dark-roasted coffee and blend it with creamy coconut milk for a rich and
			indulgent flavor. Served over ice, this refreshing drink is the perfect way to cool down on a
			hot day. The sweetness of the coconut milk balances out the bitterness of the coffee, creating
			a harmonious and delicious flavor profile. If you're a fan of coconut or just looking for a
			new way to enjoy your iced coffee, give our Coconut Iced Coffee a try!
		</p>,
	]
	return (
		<React.Fragment>
			<div className={styles.container}>
				<div className={headerStyles.header}>
					<Header />
					<NavBar />
				</div>
				<div className={styles.carouselContainer}>
					<ImageCarousel
						numSlides={3}
						images={images}
						alt={alt}
						caption={caption}
						body={body}
					/>
				</div>
			</div>
		</React.Fragment>
	)
}

export default LandingPage
