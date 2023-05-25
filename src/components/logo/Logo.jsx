import React from 'react'

import LogoImg from '../../assets/logo.png'
import styles from './Logo.module.css'

const Logo = props => {
	return (
		<div className={styles.logo} style={props.style}>
			<img src={LogoImg} alt='Logo' />
			<span>amazon</span>
		</div>
	)
}

export default Logo
