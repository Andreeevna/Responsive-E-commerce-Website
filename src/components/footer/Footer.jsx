import React from 'react'

// import {
// 	InboxIcon,
// 	PhoneIcon,
// 	LocationMarkerIcon,
// 	LoginIcon,
// 	UsersIcon,
// 	LinksIcon,

//  } from '@heroicons/react/outline'

import Logo from '../../assets/logo.png'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<div className={styles.footer_container}>
			<hr />
			<div className={styles.footer}>
				<div className={styles.logo}>
					<img src={Logo} />
					<span>amazon</span>
				</div>
			</div>
		</div>
	)
}

export default Footer
