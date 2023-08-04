import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/SeasonalItem.module.css'
import cup from '../public/images/cup.jpg'
import seasonalTwo from '../public/images/seasonal2.jpeg'
import coffee from '../public/images/coffee.jpeg'

const SeasonalItem = () => {
    return (
        <React.Fragment>
            <div className={styles.Container}>
                <div className={styles.header}>
                    <Image
                        src={seasonalTwo}
                        alt='seasonal item'
                        width={464}
                        height={464 }
                    />
                    <h2>Check out our Seasonal Hits!</h2>
                    <button>
                        <Link href='/Menu'>Browse Menu</Link>
                    </button>
                </div>

                <Image
                    src={cup}
                    alt='seasonalItem'
                    width={464}
                    height={464}
                />
                <Image
                    src={coffee}
                    alt='seasonalItem'
                    width={464}
                    height={464}
                />
            </div>
        </React.Fragment>
    )
}

export default SeasonalItem
