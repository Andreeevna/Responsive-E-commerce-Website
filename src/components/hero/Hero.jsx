import React from 'react'

import { BsArrowRight } from 'react-icons/bs'
import { RiShoppingBagFill } from 'react-icons/ri'

import { motion } from 'framer-motion'

import HeroImg from '../../assets/hero.png'
import styles from './Hero.module.css'

const Hero = () => {
	const transition = { duration: 3, type: 'spring' }

	return (
		<div className={styles.container}>
			<div className={styles.h_side}>
				<span className={styles.text1}>SKIN PROTECTION CREAM</span>
				<div className={styles.text2}>
					<span>Trendy Collection</span>
					<span>
						Seedily say has suitable disposal and boy. Exercise joy man children
						rejoiced.
					</span>
				</div>
			</div>
			{/* {m} */}
			<div className={styles.mid_side}>
				<motion.div
					initial={{ bottom: '2rem' }}
					whileInView={{ bottom: '0rem' }}
					transition={transition}
					className={styles.circle}
				></motion.div>
				<motion.img
					initial={{ bottom: '2rem' }}
					whileInView={{ bottom: '0rem' }}
					transition={transition}
					src={HeroImg}
					alt=''
					width={600}
				/>
				<motion.div
					initial={{ right: '4%' }}
					whileInView={{ right: '2%' }}
					transition={transition}
					className={styles.cart}
				>
					<RiShoppingBagFill />
					<div className={styles.signup}>
						<span>Best Signup Offers</span>
						<div className={styles.signup_arrow}>
							<BsArrowRight />
						</div>
					</div>
				</motion.div>
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
	)
}

export default Hero
