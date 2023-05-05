import React from 'react'

const NavBar = () => {
	return (
		<React.Fragment>
			<ul id='navbar'>
				<li>
					<a href='/'>Menu</a>
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

export default NavBar
