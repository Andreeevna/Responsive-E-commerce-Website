import React, { useState } from 'react'

import { GoThreeBars } from 'react-icons/go'
import { RiShoppingCartLine } from 'react-icons/ri'

import Logo from '../logo/Logo'
import styles from './Header.module.css'

const Header = () => {
	const [showMenu, setShowMenu] = useState(true)

	const toggleMenu = () => {
		setShowMenu(!showMenu)
	}
	const flex = { flex: 1 }
	return (
		<div className={styles.container}>
			<Logo style={flex} />
			<div className={styles.right}>
				<div className={styles.burger} onClick={toggleMenu}>
					<GoThreeBars />
				</div>
				<div className={styles.menu}>
					<ul
						className={styles.menu__list}
						style={{ display: showMenu ? 'inherit' : 'none' }}
					>
						<li>Collections</li>
						<li>Brands</li>
						<li>New</li>
						<li>Sales</li>
						<li>ENG</li>
					</ul>
				</div>
				<input type='text' className={styles.search} placeholder='search...' />
				<RiShoppingCartLine className={styles.cart} />
			</div>
		</div>
	)
}

export default Header
