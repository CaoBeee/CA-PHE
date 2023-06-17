import React from 'react';
import MenuItem from './menuItem';
import seasonalOne from '../public/images/seasonal1.jpeg'

export default function MenuCoffee() {
    return (
        <>
            <MenuItem item_image={seasonalOne} name="Vanilla Latte" calories="200" recommended={true} cold={true} hot={true} />
            <MenuItem item_image={seasonalOne} name="Cafe Latte" calories="200" cold={true} hot={true} />
            <MenuItem item_image={seasonalOne} name="Milk Coffee" calories="300" hot={true} cold={true} />
            <MenuItem item_image={seasonalOne} name="Mocha Freeze" calories="350" cold={true }/>
        </>
        )
}