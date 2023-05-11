import React, { useState } from 'react';
import ImageCarousel from '../components/carousel';
import ShopGallery1 from "../components/shopGallery1";
import ShopGallery2 from '../components/shopGallery2';
import styles from "../styles/Menu.module.css";
import buttons from "../styles/MenuButtons.module.css";

const Shop = () => {
    const [shop, setShop] = useState(0);
    const selectedColor = "#788264";
    const notSelectedColor = "#ADC178";
    const images = [
        'https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=675%2Cq=85%2Cwidth=1200/wp-content/uploads/international-cat-day1-scaled.jpg',
        'https://media.cnn.com/api/v1/images/stellar/prod/230426141158-sand-cat-9.jpg?c=original&q=w_1280,c_fill',
        'https://penntoday.upenn.edu/sites/default/files/2022-03/Cat-COVID-social.jpeg',
    ]
    const alt = [
        'An image showing our new "Rapspberry Blossom" seasonal spring coffee.',
        'An image depicting traditionally brewed Vietnamese Coffee.',
        'An image depicting coconut iced coffee.',
    ]
    const caption = [
        <h3>Cat Number 1</h3>,
        <h3>Cat Number 2</h3>,
        <h3>Cat Number 3</h3>,
    ]
    const body = [
        <p>
            Oh, where do I even begin? Cats are simply amazing creatures. They are graceful, elegant, and mysterious. From their gorgeous fur to their piercing eyes, everything about them is fascinating.

            One of the best things about cats is their independence. They are perfectly content to spend time alone, grooming themselves or napping in a sunny spot. But at the same time, they are also capable of being incredibly affectionate and loving. There's nothing quite like the feeling of a soft, purring cat curled up on your lap.
        </p>,
        <p>
            Another thing I love about cats is their playful nature. Whether they're chasing a toy or stalking a piece of string, watching a cat play is endlessly entertaining. And let's not forget about their incredible agility and acrobatic skills. Seeing a cat leap effortlessly onto a high surface or contort their body in impossible ways is truly a sight to behold.
        </p>,
        <p>
            Cats are also incredibly intelligent and perceptive. They have a keen sense of observation and can pick up on subtle cues and changes in their environment. And while they may seem aloof at times, they are actually very attuned to their owners' emotions and can be incredibly comforting in times of stress or sadness.

            Overall, cats are truly magnificent creatures that bring joy, comfort, and entertainment into our lives. They are truly deserving of all the love and adoration that we give them.
        </p>,
    ]
    return (
        <div className={styles.container}>
            <ImageCarousel
                numSlides={3}
                images={images}
                alt={alt}
                caption={caption}
                body={body}
            />
            <div className={buttons.container}>
                <div>
                    <button id={buttons.all} className={buttons.menu_button} style={{ backgroundColor: shop == 0 && selectedColor || notSelectedColor }}
                        onClick={() => {
                            setShop(0)
                        }}>All</button>

                    <button id={buttons.coffee} className={buttons.menu_button} style={{ backgroundColor: shop == 1 && selectedColor || notSelectedColor }}
                        onClick={() => {
                            setShop(1)
                        }}>Outerwear</button>

                    <button id={buttons.seasonal} className={buttons.menu_button} style={{ backgroundColor: shop == 2 && selectedColor || notSelectedColor }}
                        onClick={() => {
                            setShop(2)
                        }}>Shorts</button>
                </div>
                <div>
                    <button id={buttons.tea} className={buttons.menu_button} style={{ backgroundColor: shop == 3 && selectedColor || notSelectedColor }}
                        onClick={() => {
                            setShop(3)
                        }}>Tops</button>

                    <button id={buttons.milk_tea} className={buttons.menu_button} style={{ backgroundColor: shop == 4 && selectedColor || notSelectedColor }}
                        onClick={() => {
                            setShop(4)
                        }}>Shoes</button>

                    <button id={buttons.other} className={buttons.menu_button} style={{ backgroundColor: shop == 5 && selectedColor || notSelectedColor }}
                        onClick={() => {
                            setShop(5)
                        }}>Pants</button>
                </div>
            </div>
            {(shop == 0) && <ShopGallery1 />}
            {(shop == 1) && <ShopGallery2 />}
            {(shop == 2) && <ShopGallery1 />}
            {(shop == 3) && <ShopGallery2 />}
            {(shop == 4) && <ShopGallery1 />}
            {(shop == 5) && <ShopGallery2 />}
        </div>
    )
};

export default Shop;