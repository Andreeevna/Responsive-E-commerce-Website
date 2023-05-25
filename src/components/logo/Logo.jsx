import React from 'react'

import LogoImg from '../../assets/logo.png'
import styles from './Logo.module.css'

const Logo = () => {
	return (
		<div className={styles.logo}>
			<img src={LogoImg} alt='Logo' />
			<span>amazon</span>
		</div>
	)
}

export default Logo
