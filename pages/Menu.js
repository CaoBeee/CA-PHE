import React, { useState } from 'react';
import buttons from '../styles/CategoryButtons.module.css';
import MenuCoffee from '../components/menuCoffee';
import MenuMilkTea from '../components/menuMilkTea';
import MenuFruitTea from '../components/menuFruitTea';
import MenuSeasonal from '../components/menuSeasonal';
import MenuSpecial from '../components/menuSpecial';
import Image from 'next/image';
import recommendedIcon from '../public/images/recommended-Icon.png'
import coldIcon from '../public/images/cold-Icon.png'
import hotIcon from '../public/images/hot-Icon.png'
import coffee from '../public/images/seasonal2.jpeg';
import styles from '../styles/Menu.module.css';

const Menu = () => {
    const [Menu, setMenu] = useState(0)
    const [hovered, setHovered] = useState(-1)
    const selectedColor = '#788264'
    const notSelectedColor = '#ADC178'

    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
                <p>Our Drinks</p>
                <Image src={coffee} />
            </div>
            <div className={buttons.menu_container}>
                <button
                    id={buttons.seasonal}
                    className={buttons.menu_button}
                    style={{ backgroundColor: (Menu === 0 && selectedColor) || notSelectedColor, filter: (hovered === 0 && Menu !== 0 && 'brightness(0.8)') || 'brightness(1)' }}
                    onClick={() => {
                        setMenu(0)
                    }}
                    onMouseEnter={() => {
                        setHovered(0)
                    }}
                    onMouseLeave={() => {
                        setHovered(-1)
                    }}
                >
                    Seasonal
                </button>

                <button
                    id={buttons.coffee}
                    className={buttons.menu_button}
                    style={{ backgroundColor: (Menu === 1 && selectedColor) || notSelectedColor, filter: (hovered === 1 && Menu !== 1 && 'brightness(0.8)') || 'brightness(1)' }}
                    onClick={() => {
                        setMenu(1)
                    }}
                    onMouseEnter={() => {
                        setHovered(1)
                    }}
                    onMouseLeave={() => {
                        setHovered(-1)
                    }}
                >
                    Coffee
                </button>

                <button
                    id={buttons.milk_tea}
                    className={buttons.menu_button}
                    style={{ backgroundColor: (Menu === 2 && selectedColor) || notSelectedColor, filter: (hovered === 2 && Menu !== 2 && 'brightness(0.8)') || 'brightness(1)' }}
                    onClick={() => {
                        setMenu(2)
                    }}
                    onMouseEnter={() => {
                        setHovered(2)
                    }}
                    onMouseLeave={() => {
                        setHovered(-1)
                    }}
                >
                    Milk Teas
                </button>

                <button
                    id={buttons.fruit_tea}
                    className={buttons.menu_button}
                    style={{ backgroundColor: (Menu === 3 && selectedColor) || notSelectedColor, filter: (hovered === 3 && Menu !== 3 && 'brightness(0.8)') || 'brightness(1)' }}
                    onClick={() => {
                        setMenu(3)
                    }}
                    onMouseEnter={() => {
                        setHovered(3)
                    }}
                    onMouseLeave={() => {
                        setHovered(-1)
                    }}
                >
                    Fruit Teas
                </button>

                <button
                    id={buttons.special}
                    className={buttons.menu_button}
                    style={{ backgroundColor: (Menu === 4 && selectedColor) || notSelectedColor, filter: (hovered === 4 && Menu !== 4 && 'brightness(0.8)') || 'brightness(1)' }}
                    onClick={() => {
                        setMenu(4)
                    }}
                    onMouseEnter={() => {
                        setHovered(4)
                    }}
                    onMouseLeave={() => {
                        setHovered(-1)
                    }}
                >
                    Specials
                </button>
            </div>
            <div className={styles.menu_container}>
                <div className={styles.menu_legend }>
                    <div className={styles.legend_item }>
                        <Image src={recommendedIcon} />
                        <span>Recommended</span>
                    </div>
                    <div className={styles.legend_item}>
                        <Image src={coldIcon} />
                        <span>Cold</span>
                    </div>
                    <div className={styles.legend_item}>
                        <Image src={hotIcon} />
                        <span>Hot</span>
                    </div>
                </div>
                <div style={{ backgroundColor: Menu === 0 && "#E0DBE4" || Menu === 1 && "#E4DEDB" || Menu === 2 && "#DBE1E4" || Menu === 3 && "#EAD5D5" || Menu === 4 && "#DBE4DF" }} className={styles.menu_item_container}>
                    <div className={styles.menu_header}>
                        <h2 id={styles.menu_title}>
                            Seasonal
                        </h2>
                        <h2 id={styles.calories}>
                            Calories
                        </h2>
                    </div>
                    {Menu === 0 && <MenuSeasonal />}
                    {Menu === 1 && <MenuCoffee />}
                    {Menu === 2 && <MenuMilkTea />}
                    {Menu === 3 && <MenuFruitTea />}
                    {Menu === 4 && <MenuSpecial />}
                </div>
            </div>
        </div>
    )
}

export default Menu
