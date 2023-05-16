import NavBar from './Navbar'
import Header from './Header'
import Footer from './Footer'
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
