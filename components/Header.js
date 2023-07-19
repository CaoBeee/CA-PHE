import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/images/logo_caphe-01.svg'

const Header = () => {
	return (
			<Link href='/'>
				<Image
					src={logo}
				alt='Logo'
				height={500}
				width={500}
				></Image>
			</Link>
	)
}

export default Header
