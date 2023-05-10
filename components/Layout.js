import NavBar from './navbar'
import Header from './header'
import Footer from './footer'
import headerStyles from '../styles/Header.module.css'

export default function Layout({ children }) {
	return (
		<>
			<div className={headerStyles.headerBG}>
				<div className={headerStyles.header}>
					<Header />
					<NavBar />
				</div>
			</div>
			<main>{children}</main>
			<div>
				<Footer />
			</div>
		</>
	)
}
