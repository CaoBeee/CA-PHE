import styles from '../styles/Header.module.css'
import Image from 'next/image'
import logo from '../public/images/logo_caphe-01.svg'

const Header = () => {
	return (
		<div className={styles.header}>
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
