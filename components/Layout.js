import NavBar from '/components/NavBar'
import Header from '/components/Header'
import Footer from '/components/Footer'
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
