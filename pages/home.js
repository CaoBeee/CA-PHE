import React from 'react'

const Header = () => {
	return (
		<div id='header'>
			<p>Address #</p>
			<img
				src='https://media.istockphoto.com/id/1139917357/photo/another-one-thank-you.jpg?s=2048x2048&w=is&k=20&c=xyH7ovsr545kibuvpwxXmpPc_b3Wf94m6dqGMBUZ26k='
				alt='header'
			></img>
		</div>
	)
}

const NavBar = () => {
	return (
		<React.Fragment>
			<ul id='navbar'>
				<li>
					<a href='/'>Home</a>
				</li>
				<li>
					<a href='/shop'>Shop</a>
				</li>
				<li>
					<a href='/about'>About</a>
				</li>
				<li>
					<a href='/contact'>Contact</a>
				</li>
			</ul>
		</React.Fragment>
	)
}

function Home() {
	return (
		<React.Fragment>
			<Header />
			<NavBar />
		</React.Fragment>
	)
}

export default Home
