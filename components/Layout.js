import NavBar from './navbar'
import Header from './header'
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
