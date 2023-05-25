import React from 'react'

// import {
// 	InboxIcon,
// 	PhoneIcon,
// 	LocationMarkerIcon,
// 	LoginIcon,
// 	UsersIcon,
// 	LinksIcon,

//  } from '@heroicons/react/outline'

import Logo from '../logo/Logo'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<div className={styles.footer_container}>
			<hr />
			<div className={styles.footer}>
				<Logo />
			</div>
		</div>
	)
}

export default Footer
