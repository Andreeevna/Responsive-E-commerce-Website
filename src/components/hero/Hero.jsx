import React from 'react'

import { BsArrowRightCircle } from 'react-icons/bs'
import { RiShoppingBagFill } from 'react-icons/ri'

import HeroImg from '../../assets/hero.png'
import styles from './Hero.module.css'

const Hero = () => {
	return (
		<div className={styles.container}>
			<div className={styles.h_side}>
				<span>SKIN PROTECTION CREAM</span>
				<div className={styles.text}>
					<span>Trendy Collection</span>
					<span>
						Seedily say has suitable disposal and boy. Exercise joy man children
						rejoiced.
					</span>
				</div>

				{/* {m} */}
				<div className={styles.mid_side}>
					<div className={styles.circle}></div>
					<img src={HeroImg} alt='' width={600} />
					<div className={styles.cart}>
						<RiShoppingBagFill />
						<div className={styles.signup}>
							<span>Best Signup Offers</span>
							<div>
								<BsArrowRightCircle />
							</div>
						</div>
					</div>
				</div>

				{/* {r} */}

				<div className={styles.h_side}>
					<div className={styles.details}>
						<span>1.5m</span>
						<span>Monthly traffic</span>
					</div>
					<div className={styles.details}>
						<span>100k</span>
						<span>Happy Customers</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
