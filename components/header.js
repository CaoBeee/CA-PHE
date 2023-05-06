import styles from '../styles/Header.module.css'

const Header = () => {
	return (
		<div class={styles.header}>
			<p>Address Number</p>
			<a href='/'>
				<img
					src='https://thumbs.dreamstime.com/b/coffee-banner-logo-cup-cup-hot-seed-shop-cafe-art-vector-heart-beverage-drink-tea-java-pattern-restaurant-45582555.jpg'
					alt='header'
				></img>
			</a>
		</div>
	)
}

export default Header
