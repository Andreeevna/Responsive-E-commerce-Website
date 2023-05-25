import React from 'react'

import {
	InboxIcon,
	LinkIcon,
	LocationMarkerIcon,
	LoginIcon,
	PhoneIcon,
	UsersIcon,
} from '@heroicons/react/outline'

import Logo from '../logo/Logo'
import styles from './Footer.module.css'

const Footer = () => {
	// 	LoginIcon,
	// 	UsersIcon,
	// 	LinksIcon,
	// 	InboxIcon,
	// 	PhoneIcon,

	const align = { alignItems: 'flex-start' }
	return (
		<div className={styles.footer_container}>
			<hr />
			<div className={styles.footer}>
				<Logo style={align} />
				<div className={styles.information}>
					<div className={styles.contact}>
						<span>Contact Us</span>
						<span className={styles.pngLine}>
							<LocationMarkerIcon className={styles.icon} />
							<span>111 north avenue Orlando, FL 32801</span>
						</span>

						<span className={styles.pngLine}>
							<PhoneIcon className={styles.icon} />
							<span>352-306-4415</span>
						</span>

						<span className={styles.pngLine}>
							<InboxIcon className={styles.icon} />
							<span>support@amazon.com</span>
						</span>
					</div>
				</div>

				<div className={styles.information}>
					<div className={styles.contact}>
						<span>Account</span>
						<span className={styles.pngLine}>
							<LoginIcon className={styles.icon} />
							<span>Sign In</span>
						</span>
					</div>
				</div>

				<div className={styles.information}>
					<div className={styles.contact}>
						<span>Company</span>
						<span className={styles.pngLine}>
							<UsersIcon className={styles.icon} />
							<span>About us</span>
						</span>
					</div>
				</div>

				<div className={styles.information}>
					<div className={styles.contact}>
						<span>Resources</span>
						<span className={styles.pngLine}>
							<LinkIcon className={styles.icon} />
							<span>Safety Privacy & Terms</span>
						</span>
					</div>
				</div>
			</div>

			<div className={styles.footer_bottom}>
				<span>Copyright ©2022 by Amazon, Inc.</span>
				<span>All rights reserved.</span>
			</div>
		</div>
	)
}

export default Footer
