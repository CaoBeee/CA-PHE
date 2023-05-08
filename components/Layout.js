import NavBar from './navbar'
import Header from './header'
// import '../styles/styles.css'
import headerStyles from '../styles/Header.module.css'

export default function Layout({ children }) {
	return (
		<>
			<div className={headerStyles.header}>
				<Header />
				<NavBar />
			</div>
			<main>{children}</main>
		</>
	)
}
