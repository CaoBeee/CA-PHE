import React, { useState } from 'react';
import styles from '../styles/MenuButtons.module.css';

export default function MenuButtons() {
    const [Menu, setMenu] = useState(0);
    const selectedColor = "#788264";
    const notSelectedColor = "#ADC178";

    return (
        <div className={styles.container}>
            <div>
                <button id={styles.all} className={styles.menu_button} style={{ backgroundColor: Menu == 0 && selectedColor || notSelectedColor }}
                    onClick={() => {
                        setMenu(0)
                    }}>All</button>

                <button id={styles.coffee} className={styles.menu_button} style={{ backgroundColor: Menu == 1 && selectedColor || notSelectedColor }}
                    onClick={() => {
                        setMenu(1)
                    }}>Coffee</button>

                <button id={styles.seasonal} className={styles.menu_button} style={{ backgroundColor: Menu == 2 && selectedColor || notSelectedColor }}
                    onClick={() => {
                        setMenu(2)
                    }}>Seasonal</button>
            </div>
            <div>
                <button id={styles.tea} className={styles.menu_button} style={{ backgroundColor: Menu == 3 && selectedColor || notSelectedColor }}
                    onClick={() => {
                        setMenu(3)
                    }}>Teas</button>

                <button id={styles.milk_tea} className={styles.menu_button} style={{ backgroundColor: Menu == 4 && selectedColor || notSelectedColor }}
                    onClick={() => {
                        setMenu(4)
                    }}>Milk Teas</button>

                <button id={styles.other} className={styles.menu_button} style={{ backgroundColor: Menu == 5 && selectedColor || notSelectedColor }}
                    onClick={() => {
                        setMenu(5)
                    }}>Other</button>
            </div>
        </div>
    );
}