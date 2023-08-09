import React, { useMemo, useState } from 'react'
import ShopItem from '../components/shopItem'
import Image from 'next/image'
import styles from '../styles/Shop.module.css'
import buttons from '../styles/CategoryButtons.module.css'
import shirt from '../public/images/shirt.jpeg'

import sweatshirt from '../public/images/sweatshirt.jpg'
import sweatshirtGray from '../public/images/sweatshirt-heathergray.jpg'
import sweatshirt2 from '../public/images/sweatshirt2.jpg'
import longsleeve from '../public/images/longsleeve-white.jpg'
import longsleeve2 from '../public/images/longsleeve-white2.jpg'

const Shop = () => {
	const [shop, setShop] = useState([0])
	const [hovered, setHovered] = useState(-1)
	const [categories, setCategories] = useState({
		all: true,
		shirts: false,
		tops: false,
		jackets: false,
		long_sleeves: false,
		pants: false,
		shoes: false,
	});

	const categoriesMap1 = [
		{ key: 'all', label: 'All' },
		{ key: 'shirts', label: 'Shirts' },
		{ key: 'tops', label: 'Tops' },
		{ key: 'jackets', label: 'Jackets' },
	];

	const categoriesMap2 = [
		{ key: 'long_sleeves', label: 'Long Sleeves' },
		{ key: 'pants', label: 'Pants' },
		{ key: 'shoes', label: 'Shoes' },
	];

	const renderButtons = (categoriesMap, startIndex) => (
		categoriesMap.map((category, index) => (
			<button
				key={category.key}
				className={buttons.shop_button}
				style={{
					backgroundColor: categories[category.key] ? '#788264' : '#ADC178',
					filter: (hovered === startIndex + index && shop !== startIndex + index && 'brightness(0.8)') || 'brightness(1)',
				}}
				onClick={() => toggleCategory(category.key)}
				onMouseEnter={() => setHovered(startIndex + index)}
				onMouseLeave={() => setHovered(-1)}
			>
				{category.label}
			</button>
		))
	);

	const itemList = [
		<ShopItem
			key={1}
			picture={shirt}
			name='Cool Summer Shirt'
			price='$19.99'
			category='shirts'
		/>,
		<ShopItem
			key={2}
			picture={sweatshirt}
			name='Comfy Sweatshirt Top'
			price='$29.99'
			category='tops'
		/>,
		<ShopItem
			key={3}
			picture={sweatshirtGray}
			name='Stylish Jacket'
			price='$49.99'
			category='jackets'
		/>,
		<ShopItem
			key={4}
			picture={sweatshirt2}
			name='Casual Long Sleeve Tee'
			price='$24.99'
			category='long_sleeves'
		/>,
		<ShopItem
			key={5}
			picture={longsleeve}
			name='Versatile Pants'
			price='$39.99'
			category='pants'
		/>,
		<ShopItem
			key={6}
			picture={longsleeve2}
			name='Sleek Sneakers'
			price='$69.99'
			category='shoes'
		/>,
	]

	const toggleCategory = (category) => {
		if (category === 'all') {
			setCategories({
				all: true,
				shirt: false,
				top: false,
				jacket: false,
				long: false,
				pant: false,
				shoe: false,
			});
		} else {
			setCategories((prevCategories) => {
				const newCategories = {
					...prevCategories,
					all: false,
					[category]: !prevCategories[category],
				};

				if (!Object.values(newCategories).some((value) => value)) {
					newCategories.all = true;
				}

				return newCategories;
			});
		}
	};

	const shopItems = useMemo(() => {
		if (categories.all) return itemList;

		return itemList.filter((item) =>
			categories[item.props.category]
		);
	}, [categories, itemList]);

	return (
		<div className={styles.container}>
			<div className={styles.hero_container}>
				<Image
					src={shirt}
					alt='hero image'
					placeholder='blur'
					width={1920}
					height={1080}
					priority={true }
				/>
			</div>
			<div className={buttons.shop_container}>
				<div>
					{renderButtons(categoriesMap1, 0) }
				</div>
				<div>
					{renderButtons(categoriesMap2, categoriesMap1.length)}
				</div>
			</div>
			<div className={styles.item_container}>{shopItems}</div>
		</div>
	)
}

export default Shop