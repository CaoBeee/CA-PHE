import React, { useMemo, useState } from 'react'
import ShopItem from '../components/shopItem'
import Image from 'next/image';
import hero from '../public/images/shopHero.png';
import shirt from '../public/images/shirt.jpeg';
import sweatshirt from '../public/images/sweatshirt.png';
import sweatshirtGray from '../public/images/sweatshirt-heathergray.png';
import sweatshirt2 from '../public/images/sweatshirt2.png';
import longsleeve from '../public/images/longsleeve-white.png';
import longsleeve2 from '../public/images/longsleeve-white2.png';
import styles from '../styles/Shop.module.css'
import buttons from '../styles/CategoryButtons.module.css'

const Shop = () => {
    const [shop, setShop] = useState(0)
    const [hovered, setHovered] = useState(-1)
    const selectedColor = '#788264'
    const notSelectedColor = '#ADC178'

    const itemList = [
        <ShopItem key={1} picture={shirt} name="Test1 (Shirt)" price="$19.99" category="shirt" />,
        <ShopItem key={2} picture={sweatshirt} name="Test2 (Top)" price="$19.99" category="top" />,
        <ShopItem key={3} picture={sweatshirtGray} name="Test3 (Jacket)" price="$19.99" category="jacket" />,
        <ShopItem key={4} picture={sweatshirt2} name="Test4 (Long Sleeve)" price="$19.99" category="long" />,
        <ShopItem key={5} picture={longsleeve} name="Test5 (Pants)" price="$19.99" category="pant" />,
        <ShopItem key={6} picture={longsleeve2} name="Test6 (Shoes)" price="$19.99" category="shoe" />,
    ]

    const shopItems = useMemo(() => {
        switch (shop) {
            case 0:
                return itemList;
            case 1:
                return itemList.filter(item => item.props.category === 'shirt');
            case 2:
                return itemList.filter(item => item.props.category === 'top');
            case 3:
                return itemList.filter(item => item.props.category === 'jacket');
            case 4:
                return itemList.filter(item => item.props.category === 'long');
            case 5:
                return itemList.filter(item => item.props.category === 'pant');
            case 6:
                return itemList.filter(item => item.props.category === 'shoe');
            default:
                return itemList;
        }
    }, [shop, itemList]);
    return (
        <div className={styles.container}>
            <div className={styles.hero_container}>
                <Image src={hero} alt='hero image' loading='eager' />
            </div>
            <div className={buttons.shop_container}>
                <div>
                    <button
                        id={buttons.all}
                        className={buttons.shop_button}
                        style={{ backgroundColor: (shop === 0 && selectedColor) || notSelectedColor, filter: (hovered === 0 && shop !== 0 && 'brightness(0.8)') || 'brightness(1)' }}
                        onClick={() => {
                            setShop(0)
                        }}
                        onMouseEnter={() => {
                            setHovered(0)
                        }}
                        onMouseLeave={() => {
                            setHovered(-1)
                        }}
                    >
                        All
                    </button>

                    <button
                        id={buttons.shirts}
                        className={buttons.shop_button}
                        style={{ backgroundColor: (shop === 1 && selectedColor) || notSelectedColor, filter: (hovered === 1 && shop !== 1 && 'brightness(0.8)') || 'brightness(1)' }}
                        onClick={() => {
                            setShop(1)
                        }}
                        onMouseEnter={() => {
                            setHovered(1)
                        }}
                        onMouseLeave={() => {
                            setHovered(-1)
                        }}
                    >
                        Shirts
                    </button>

                    <button
                        id={buttons.tops}
                        className={buttons.shop_button}
                        style={{ backgroundColor: (shop === 2 && selectedColor) || notSelectedColor, filter: (hovered === 2 && shop !== 2 && 'brightness(0.8)') || 'brightness(1)' }}
                        onClick={() => {
                            setShop(2)
                        }}
                        onMouseEnter={() => {
                            setHovered(2)
                        }}
                        onMouseLeave={() => {
                            setHovered(-1)
                        }}
                    >
                        Tops
                    </button>

                    <button
                        id={buttons.jackets}
                        className={buttons.shop_button}
                        style={{ backgroundColor: (shop === 3 && selectedColor) || notSelectedColor, filter: (hovered === 3 && shop !== 3 && 'brightness(0.8)') || 'brightness(1)' }}
                        onClick={() => {
                            setShop(3)
                        }}
                        onMouseEnter={() => {
                            setHovered(3)
                        }}
                        onMouseLeave={() => {
                            setHovered(-1)
                        }}
                    >
                        Jackets
                    </button>
                </div>
                <div>
                    <button
                        id={buttons.sleeves}
                        className={buttons.shop_button}
                        style={{ backgroundColor: (shop === 4 && selectedColor) || notSelectedColor, filter: (hovered === 4 && shop !== 4 && 'brightness(0.8)') || 'brightness(1)' }}
                        onClick={() => {
                            setShop(4)
                        }}
                        onMouseEnter={() => {
                            setHovered(4)
                        }}
                        onMouseLeave={() => {
                            setHovered(-1)
                        }}
                    >
                        Long Sleeves
                    </button>

                    <button
                        id={buttons.pants}
                        className={buttons.shop_button}
                        style={{ backgroundColor: (shop === 5 && selectedColor) || notSelectedColor, filter: (hovered === 5 && shop !== 5 && 'brightness(0.8)') || 'brightness(1)' }}
                        onClick={() => {
                            setShop(5)
                        }}
                        onMouseEnter={() => {
                            setHovered(5)
                        }}
                        onMouseLeave={() => {
                            setHovered(-1)
                        }}
                    >
                        Pants
                    </button>

                    <button
                        id={buttons.shoes}
                        className={buttons.shop_button}
                        style={{ backgroundColor: (shop === 6 && selectedColor) || notSelectedColor, filter: (hovered === 6 && shop !== 6 && 'brightness(0.8)') || 'brightness(1)' }}
                        onClick={() => {
                            setShop(6)
                        }}
                        onMouseEnter={() => {
                            setHovered(6)
                        }}
                        onMouseLeave={() => {
                            setHovered(-1)
                        }}
                    >
                        Shoes
                    </button>
                </div>
            </div>
            <div className={styles.item_container}>
                {shopItems }
            </div>
        </div>
    )
}

export default Shop
