import React from 'react'
import Link from 'next/link'
import styles from '../styles/gallery.module.css'

export default function MenuGallery2() {
	return (
		<div className={styles.gallery_container}>
			<div className={styles.gallery_item}>
				<Link href='/Menu'>
					<img
						src='https://www.bhg.com/thmb/ESgGfUPV_VTB3px1hJ0czL7uLZY=/1866x0/filters:no_upscale():strip_icc()/vietnamese-coffee-with-phin-drip-445288c363544f31b8045b8c5fbefa5c.jpg'
						alt=''
					/>
				</Link>
				<p>
					Transport yourself to the bustling streets of Vietnam with our authentic Robusta
					Vietnamese coffee. Made with 100% Robusta beans, this bold brew is rich, intense, and
					packs a caffeine punch to get you through the day. Served in the traditional Vietnamese
					style, with a stainless steel filter and sweetened condensed milk, this coffee has a
					distinct flavor profile of dark chocolate, caramel, and nutty undertones. Perfectly
					balanced and smooth, it&apos;s a true coffee lover&apos;s delight. Come in and experience
					the bold taste of Vietnam with our Robusta Vietnamese coffee.
				</p>
			</div>
			<div className={styles.gallery_item}>
				<Link href='/Menu'>
					<img
						src='https://wallpaperaccess.com/full/6106014.jpg'
						alt=''
					/>
				</Link>
				<p>
					Introducing our new seasonal spring coffee, bursting with bright and fresh flavors to
					awaken your senses! This delightful brew features a light-bodied blend of premium Arabica
					beans infused with the essence of sweet and tangy raspberry, complemented by subtle notes
					of creamy vanilla and a hint of citrus. Sip on this refreshing coffee and savor the taste
					of spring in every cup. Perfect for enjoying on a sunny day or to brighten up your morning
					routine.
				</p>
			</div>
			<div className={styles.gallery_item}>
				<Link href='/Menu'>
					<img
						src='https://images.ctfassets.net/iq805lbjmkyy/15Cq67x9ip2dJJFkjQYVQG/cc8a6e5108a3d1766352a44f8c0b586b/Large-A_CoffeePlatform_CoffeePlatform_Master_www_Image____Drinks_Barista_Coconut_NA_Bottle_1l_HR_-2.jpg?w=1920&q=80'
						alt=''
					/>
				</Link>
				<p>
					Our Coconut Iced Coffee is a tropical twist on the classic Vietnamese iced coffee. We
					start with our signature dark-roasted coffee and blend it with creamy coconut milk for a
					rich and indulgent flavor. Served over ice, this refreshing drink is the perfect way to
					cool down on a hot day. The sweetness of the coconut milk balances out the bitterness of
					the coffee, creating a harmonious and delicious flavor profile. If you&apos;re a fan of
					coconut or just looking for a new way to enjoy your iced coffee, give our Coconut Iced
					Coffee a try!
				</p>
			</div>
			<div className={styles.gallery_item}>
				<Link href='/Menu'>
					<img
						src='https://thewoodenskillet.com/wp-content/uploads/2021/06/iced-matcha-latte-tutorial-31.jpg'
						alt=''
					/>
				</Link>
				<p>
					Our Matcha Iced Tea is a refreshing and invigorating beverage that&apos;s perfect for a
					warm day. Made with high-quality matcha powder and freshly brewed green tea, this drink is
					the ultimate pick-me-up. The matcha powder gives it a vibrant green color and a rich,
					earthy flavor, while the green tea adds a subtle, refreshing note. Served over ice,
					it&apos;s a delicious and healthy way to stay cool and hydrated. Whether you&apos;re a
					matcha lover or just looking for a new way to enjoy iced tea, our Matcha Iced Tea is sure
					to hit the spot!
				</p>
			</div>
			<div className={styles.gallery_item}>
				<Link href='/Menu'>
					<img
						src='https://takestwoeggs.com/wp-content/uploads/2021/04/Brown-Sugar-Milk-Tea-Boba-Recipe-Takestwoeggs-Easy-Asian-Inspired-Recipes-sq.jpg'
						alt=''
					/>
				</Link>
				<p>
					Our Caramel Swirl Milk Tea a decadent and indulgent treat that&apos;s sure to satisfy your
					sweet tooth! Our signature milk tea is blended with rich and creamy brown sugar syrup,
					giving it a velvety smooth texture and a caramel-like flavor. Topped with chewy and sweet
					boba pearls, this drink is the ultimate comfort beverage.
				</p>
			</div>
			<div className={styles.gallery_item}>
				<Link href='/Menu'>
					<img
						src='https://myveganminimalist.com/wp-content/uploads/2022/04/Strawberry-Milk-Tea-Boba-20.jpg'
						alt=''
					/>
				</Link>
				<p>
					Introducing our new Strawberry Dream Milk Tea! This creamy and refreshing drink combines
					the delicious taste of fresh strawberries with our signature milk tea. The tea is brewed
					with premium loose-leaf black tea, and then blended with creamy milk and a touch of
					sweetness. The fresh strawberries add a burst of fruity flavor and a pop of color to this
					indulgent treat. Served over ice, our Strawberry Dream Milk Tea is the perfect pick-me-up
					on a hot day. Come in and enjoy a taste of summer with our Strawberry Dream Milk Tea!
				</p>
			</div>
		</div>
	)
}
