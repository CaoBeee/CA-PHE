import styles from '../styles/Header.module.css'
import Image from 'next/image'
import logo from '../public/images/logo_caphe-01.svg'
import NavBar from './navbar'

const Header = () => {
	return (
		<div className={styles.header}>
			{/* <p>Address Number</p> */}
			<a href='/'>
				<Image
					src={logo}
					alt='Logo'
				></Image>
			</a>
		</div>
	)
}

export default Header
