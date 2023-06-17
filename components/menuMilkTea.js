import React from 'react';
import MenuItem from './menuItem';
import seasonalOne from '../public/images/seasonal1.jpeg'

export default function MenuMilkTea() {
    return (
        <>
            <MenuItem item_image={seasonalOne} name="Milk Tea" calories="200" recommended={true} cold={true} hot={true} />
            <MenuItem item_image={seasonalOne} name="Caramel Milk Tea" calories="200" cold={true} hot={true} />
            <MenuItem item_image={seasonalOne} name="Brown Sugar Milk Tea" calories="300" hot={true} cold={true} />
            <MenuItem item_image={seasonalOne} name="Melon Milk Tea" calories="350" cold={true} />
            <MenuItem item_image={seasonalOne} name="Honey Milk Tea" calories="300" cold={true }/>
        </>
    )
}