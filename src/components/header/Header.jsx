import { RiShoppingCartLine } from 'react-icons/ri'

import LogoImg from '../../assets/logo.png'
import styles from './Header.module.css'

const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<img src={LogoImg} alt='Logo' />
				<span>Amazon</span>
			</div>
			<div className={styles.right}>
				<div className={styles.menu}>
					<ul className={styles.menu__list}>
						<li>Collections</li>
						<li>Brands</li>
						<li>New</li>
						<li>Sales</li>
						<li>ENG</li>
					</ul>
				</div>
				<input type='text' className={styles.search} />
				<RiShoppingCartLine className={styles.cart} />
			</div>
		</div>
	)
}

export default Header
