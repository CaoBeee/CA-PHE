import React from 'react';
import MenuItem from './menuItem';
import seasonalOne from '../public/images/seasonal1.jpeg'

export default function MenuSeasonal() {
    return (
        <>
            <MenuItem item_image={seasonalOne} name="Midnight Dreams" calories="200" recommended={true} />
            <MenuItem item_image={seasonalOne} name="Summer Crush" calories="200" cold={true} />
            <MenuItem item_image={seasonalOne} name="Strawberry Twister" calories="300" hot={true} cold={true} />
        </>
    )
}