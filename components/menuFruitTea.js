import React from 'react';
import MenuItem from './menuItem';
import seasonalOne from '../public/images/seasonal1.jpeg'

export default function MenuFruitTea() {
    return (
        <>
            <MenuItem item_image={seasonalOne} name="Strawberry" calories="200" recommended={true} cold={true} hot={true} />
            <MenuItem item_image={seasonalOne} name="Lychee" calories="200" cold={true} hot={true} />
            <MenuItem item_image={seasonalOne} name="Mango" calories="300" hot={true} cold={true} />
            <MenuItem item_image={seasonalOne} name="Peach" calories="350" cold={true} />
        </>
    )
}