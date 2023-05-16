import NavBar from './NavBar.js'
import Header from '/components/header'
import Footer from '/components/footer'
import headerStyles from '/styles/Header.module.css'

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
