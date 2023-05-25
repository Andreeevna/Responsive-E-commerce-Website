import React from 'react'

import Hero from '../../assets/testimonialHero.png'
import styles from './Testimonials.module.css'

const Testimonials = () => {
	return (
		<div className={styles.testimonials}>
			<div className={styles.wrapper}>
				<div className={styles.details}>
					<span>TOP RATED</span>
					<span>
						SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN
						REJOICED
					</span>
				</div>

				<img src={Hero} alt='Hero' />

				<div className={styles.details}>
					<span>100K</span>
					<span>HAPPY CUSTOMERS WITH US</span>
				</div>
			</div>
		</div>
	)
}

export default Testimonials
